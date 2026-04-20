const board = document.getElementById("board");
const rollBtn = document.getElementById("rollBtn");
const statusText = document.getElementById("status");
const playerCountSelect = document.getElementById("playerCount");
const startGameBtn = document.getElementById("startGameBtn");
const playerLegend = document.getElementById("playerLegend");

const questionBox = document.getElementById("questionBox");
const questionText = document.getElementById("question");
const answersDiv = document.getElementById("answers");

const duelBox = document.getElementById("duelBox");
const duelInstruction = document.getElementById("duelInstruction");
const challengeText = document.getElementById("challengeText");
const duelTimerText = document.getElementById("duelTimer");
const duelButtons = document.getElementById("duelButtons");

const dice = document.getElementById("dice");
const diceResult = document.getElementById("diceResult");

let currentPlayer = 1;
let playerCount = 2;
let positions = [];
let isMoving = false;
let startPosition = 1;
let lastRoll = 0;
let duelTimerInterval = null;
let duelTimeLeft = 15;
let gameStarted = false;
let selectedDuelOpponent = null;
let diceRotationX = 0;
let diceRotationY = 0;

const totalTiles = 50;
const cols = 10;
const rows = 5;

const playerColors = [
  "#2f7fd1",
  "#c95454",
  "#2fa36b",
  "#d28a2f",
  "#7d56c2",
  "#de5ea8"
];

const specialTiles = {
  5: "duel",
  10: "chance",
  15: "stige",
  20: "duel",
  25: "chance",
  30: "stige",
  35: "duel",
  40: "chance",
  45: "stige"
};

const ladders = {
  15: 22,
  30: 38,
  45: 50
};

const categories = [
  "dansk",
  "matematik",
  "engelsk",
  "livsoplysning",
  "paedagogisk_psykologi",
  "pad",
  "dsa"
];

const localDuelChallenges = [
  "Imiter din yndlingslærer i 15 sekunder.",
  "Forklar didaktik på 10 sekunder uden at stoppe.",
  "Vis med kropssprog, hvordan man skaber ro i klassen.",
  "Spil en lærer, der starter timen tydeligt og roligt.",
  "Forklar forskellen på hverdagssprog og skolesprog.",
  "Giv en mini-forklaring på, hvad klasseledelse er.",
  "Spil en elev og en lærer i en kort konfliktsituation.",
  "Forklar begrebsforståelse i matematik med egne ord."
];

function getCategoryLabel(cat) {
  if (cat === "paedagogisk_psykologi") return "PP";
  if (cat === "livsoplysning") return "LIV";
  if (cat === "matematik") return "MAT";
  if (cat === "engelsk") return "ENG";
  if (cat === "dansk") return "DAN";
  if (cat === "pad") return "PAD";
  if (cat === "dsa") return "DSA";
  return "";
}

function clampPosition(pos) {
  return Math.max(1, Math.min(totalTiles, pos));
}

function getNextPlayer(player) {
  return player >= playerCount ? 1 : player + 1;
}

function checkWinner(player) {
  if (positions[player - 1] >= totalTiles) {
    positions[player - 1] = totalTiles;
    updateBoard();
    statusText.textContent = "🏆 Spiller " + player + " vandt spillet!";
    gameStarted = false;
    rollBtn.disabled = true;

    setTimeout(() => {
      alert("🏆 Spiller " + player + " vandt!");
    }, 100);

    return true;
  }

  return false;
}

function updateTurnUI(customMessage) {
  rollBtn.classList.remove(
    "player1-turn",
    "player2-turn",
    "player3-turn",
    "player4-turn",
    "player5-turn",
    "player6-turn"
  );

  rollBtn.classList.add("player" + currentPlayer + "-turn");
  statusText.textContent = customMessage || "Spiller " + currentPlayer + "'s tur";
}

function endTurn() {
  currentPlayer = getNextPlayer(currentPlayer);
  updateTurnUI();
  isMoving = false;
  rollBtn.disabled = false;
}

function enableSamePlayerTurn(message) {
  statusText.textContent = message;
  isMoving = false;
  rollBtn.disabled = false;
}

function showDiceFace(value) {
  const finalRotation = getFinalDiceRotation(value);

  dice.classList.remove("rolling");
  dice.style.transform = `rotateX(${finalRotation.x}deg) rotateY(${finalRotation.y}deg)`;
  diceResult.textContent = "Seneste slag: " + value;
}

function getFinalDiceRotation(value) {
  if (value === 1) return { x: 0, y: 0 };
  if (value === 2) return { x: 90, y: 0 };
  if (value === 3) return { x: -90, y: 0 };
  if (value === 4) return { x: 0, y: 90 };
  if (value === 5) return { x: 0, y: -90 };
  return { x: 0, y: 180 };
}

function rollDiceAnimation(finalValue, callback) {
  const finalRotation = getFinalDiceRotation(finalValue);

  // Nulstil altid til en ren startposition først
  dice.classList.remove("rolling");
  dice.style.transition = "none";
  dice.style.transform = "rotateX(0deg) rotateY(0deg)";

  // Tving browseren til at registrere nulstillingen
  void dice.offsetWidth;

  // Start den rigtige animation
  dice.classList.add("rolling");
  dice.style.transition = "transform 1.4s cubic-bezier(0.17, 0.84, 0.44, 1)";
  dice.style.transform = `rotateX(${720 + finalRotation.x}deg) rotateY(${720 + finalRotation.y}deg)`;

  setTimeout(() => {
    // Lås terningen fast på slutfladen med små tal igen
    dice.classList.remove("rolling");
    dice.style.transition = "none";
    dice.style.transform = `rotateX(${finalRotation.x}deg) rotateY(${finalRotation.y}deg)`;
    diceResult.textContent = "Seneste slag: " + finalValue;

    if (callback) callback();
  }, 1400);
}

function buildBoard() {
  board.innerHTML = "";

  for (let i = 1; i <= totalTiles; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.id = "tile-" + i;

    const rowFromBottom = Math.floor((i - 1) / cols);
    const posInRow = (i - 1) % cols;

    const visualRow = rows - rowFromBottom;
    const visualCol = rowFromBottom % 2 === 0 ? posInRow + 1 : cols - posInRow;

    tile.style.gridRow = visualRow;
    tile.style.gridColumn = visualCol;

    const isEvenRow = rowFromBottom % 2 === 0;
    const isLastInRow = posInRow === cols - 1;

    if (i !== totalTiles) {
      if (isLastInRow && isEvenRow) {
        tile.classList.add("path-down-left");
      } else if (isLastInRow && !isEvenRow) {
        tile.classList.add("path-down-right");
      } else if (isEvenRow) {
        tile.classList.add("path-right");
      } else {
        tile.classList.add("path-left");
      }
    }

    let label = "";

    if (i === 1) {
      tile.classList.add("start");
      label = "START";
    } else if (i === totalTiles) {
      tile.classList.add("slut");
      label = "SLUT";
    } else if (specialTiles[i]) {
      const type = specialTiles[i];
      tile.classList.add(type);
      tile.classList.add("special-label");

      if (type === "stige") label = "STIGE";
      if (type === "duel") label = "DUEL";
      if (type === "chance") label = "CHANCE";
    } else {
      const cat = categories[i % categories.length];
      tile.classList.add(cat);
      label = getCategoryLabel(cat);
    }

    tile.textContent = label;
    board.appendChild(tile);
  }
}

function updateBoard() {
  document.querySelectorAll(".player-piece").forEach(el => el.remove());

  positions.forEach((pos, index) => {
    const tile = document.getElementById("tile-" + pos);
    if (!tile) return;

    const player = document.createElement("div");
    player.classList.add("player-piece");
    player.style.background = playerColors[index];
    player.style.setProperty("--player-color", playerColors[index]);
    player.textContent = index + 1;

    const slotClass = "slot-" + ((index % 6) + 1);
    player.classList.add(slotClass);

    tile.appendChild(player);
  });
}

function updateLegend() {
  playerLegend.innerHTML = "";

  for (let i = 0; i < playerCount; i++) {
    const item = document.createElement("div");
    item.className = "legend-item";

    const dot = document.createElement("span");
    dot.className = "legend-dot";
    dot.style.background = playerColors[i];

    const text = document.createElement("span");
    text.textContent = "Spiller " + (i + 1);

    item.appendChild(dot);
    item.appendChild(text);
    playerLegend.appendChild(item);
  }
}

function startGame() {
  clearInterval(duelTimerInterval);
  questionBox.classList.add("hidden");
  duelBox.classList.add("hidden");

  playerCount = Number(playerCountSelect.value);
  currentPlayer = 1;
  positions = Array(playerCount).fill(1);
  isMoving = false;
  startPosition = 1;
  lastRoll = 0;
  duelTimeLeft = 15;
  selectedDuelOpponent = null;
  gameStarted = true;

  updateLegend();
  updateBoard();
  updateTurnUI();
  showDiceFace(1);
  rollBtn.disabled = false;
}

rollBtn.onclick = () => {
  if (!gameStarted || isMoving) return;

  const roll = Math.floor(Math.random() * 6) + 1;
  lastRoll = roll;
  startPosition = positions[currentPlayer - 1];

  isMoving = true;
  rollBtn.disabled = true;
  statusText.textContent = "Spiller " + currentPlayer + " slår terningen...";

  rollDiceAnimation(roll, () => {
    statusText.textContent = "Spiller " + currentPlayer + " slog en " + roll;
    movePlayer(roll);
  });
};

function movePlayer(steps) {
  let moved = 0;

  const interval = setInterval(() => {
    if (moved < steps && positions[currentPlayer - 1] < totalTiles) {
      positions[currentPlayer - 1]++;
      updateBoard();
      moved++;
    } else {
      clearInterval(interval);
      handleTileAfterMove();
    }
  }, 250);
}

function handleTileAfterMove() {
  let pos = positions[currentPlayer - 1];

  if (checkWinner(currentPlayer)) return;

  if (ladders[pos]) {
    positions[currentPlayer - 1] = ladders[pos];
    updateBoard();
    pos = positions[currentPlayer - 1];

    if (checkWinner(currentPlayer)) return;
  }

  if (specialTiles[pos] === "duel") {
    showDuel();
    isMoving = false;
    rollBtn.disabled = true;
    return;
  }

  if (specialTiles[pos] === "chance") {
    alert("Chance! Du rykker 2 felter frem.");
    positions[currentPlayer - 1] = clampPosition(positions[currentPlayer - 1] + 2);
    updateBoard();

    if (checkWinner(currentPlayer)) return;

    if (lastRoll === 6) {
      enableSamePlayerTurn("🎲 Du slog en 6'er! Slå igen.");
      return;
    }

    endTurn();
    return;
  }

  showQuestion();
  isMoving = false;
  rollBtn.disabled = true;
}

function showQuestion() {
  const pos = positions[currentPlayer - 1];
  const cat = categories[pos % categories.length];
  const categoryQuestions = questions[cat];

  if (!categoryQuestions || categoryQuestions.length === 0) {
    alert("Der mangler spørgsmål i kategorien: " + cat);

    if (lastRoll === 6) {
      enableSamePlayerTurn("🎲 Ingen spørgsmål her, men du slog en 6'er. Slå igen.");
      return;
    }

    endTurn();
    return;
  }

  const q = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];

  questionText.textContent = q.q;
  answersDiv.innerHTML = "";
  questionBox.classList.remove("hidden");

  const shuffledAnswers = q.answers.map((answer, index) => ({
    text: answer,
    isCorrect: index === q.correct
  }));

  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach(answerObj => {
    const btn = document.createElement("button");
    btn.textContent = answerObj.text;
    btn.onclick = () => answerQuestion(answerObj.isCorrect);
    answersDiv.appendChild(btn);
  });
}

function answerQuestion(isCorrect) {
  questionBox.classList.add("hidden");

  if (isCorrect) {
    alert("Rigtigt! 🎉 Du bliver stående.");

    if (checkWinner(currentPlayer)) return;

    if (lastRoll === 6) {
      enableSamePlayerTurn("🎲 Du slog en 6'er og svarede rigtigt! Slå igen.");
      return;
    }

    endTurn();
    return;
  }

  alert("Forkert! Du rykker tilbage til det felt, du stod på før.");

  positions[currentPlayer - 1] = startPosition;
  updateBoard();

  statusText.textContent = "Forkert svar — turen går videre!";

  board.classList.add("shake");
  setTimeout(() => {
    board.classList.remove("shake");
  }, 400);

  if (checkWinner(currentPlayer)) return;

  lastRoll = 0;
  endTurn();
}

function showDuel() {
  const duelList =
    typeof duelChallenges !== "undefined" &&
    Array.isArray(duelChallenges) &&
    duelChallenges.length > 0
      ? duelChallenges
      : localDuelChallenges;

  const randomChallenge = duelList[Math.floor(Math.random() * duelList.length)];

  selectedDuelOpponent = null;
  challengeText.textContent = randomChallenge;
  duelInstruction.textContent =
    "Spiller " + currentPlayer + " er landet på duel-feltet. Vælg en modstander.";

  duelButtons.innerHTML = "";
  duelBox.classList.remove("hidden");

  clearInterval(duelTimerInterval);
  duelTimeLeft = 15;
  duelTimerText.textContent = "⏱️ Timeren starter først, efter du har valgt modstander, og derefter trykker på Start duel.";

  renderOpponentSelection();
}

function renderOpponentSelection() {
  duelButtons.innerHTML = "";

  for (let i = 1; i <= playerCount; i++) {
    if (i === currentPlayer) continue;

    const btn = document.createElement("button");
    btn.textContent = "Vælg Spiller " + i;
    btn.onclick = () => selectDuelOpponent(i);
    duelButtons.appendChild(btn);
  }
}

function selectDuelOpponent(opponent) {
  selectedDuelOpponent = opponent;

  duelInstruction.textContent =
    "Spiller " + currentPlayer + " duellerer nu mod Spiller " + opponent + ". Tryk på Start duel, når I er klar.";

  duelButtons.innerHTML = "";

  const startBtn = document.createElement("button");
  startBtn.textContent = "▶️ Start duel";
  startBtn.onclick = () => startDuelTimer(opponent);
  duelButtons.appendChild(startBtn);

  duelTimerText.textContent = "⏱️ Klar til duel";
}

function startDuelTimer(opponent) {
  clearInterval(duelTimerInterval);
  duelTimeLeft = 15;
  duelTimerText.textContent = "⏱️ Tid tilbage: 15 sek.";

  duelButtons.innerHTML = "";

  duelTimerInterval = setInterval(() => {
    duelTimeLeft--;
    duelTimerText.textContent = "⏱️ Tid tilbage: " + duelTimeLeft + " sek.";

    if (duelTimeLeft <= 0) {
      clearInterval(duelTimerInterval);
      duelTimerText.textContent = "⏰ Tiden er gået! Vælg vinderen.";
      showDuelWinnerButtons(opponent);
    }
  }, 1000);

  setTimeout(() => {
    if (duelTimeLeft > 0) {
      showDuelWinnerButtons(opponent);
    }
  }, 15000);
}

function showDuelWinnerButtons(opponent) {
  duelButtons.innerHTML = "";

  [currentPlayer, opponent].forEach(player => {
    const btn = document.createElement("button");
    btn.textContent = "Spiller " + player + " vandt";
    btn.onclick = () => duelResult(player);
    duelButtons.appendChild(btn);
  });
}

function duelResult(winner) {
  if (selectedDuelOpponent === null) return;

  clearInterval(duelTimerInterval);
  duelBox.classList.add("hidden");

  const loser = winner === currentPlayer ? selectedDuelOpponent : currentPlayer;

  positions[winner - 1] = clampPosition(positions[winner - 1] + 3);
  positions[loser - 1] = clampPosition(positions[loser - 1] - 3);

  selectedDuelOpponent = null;
  updateBoard();

  if (checkWinner(winner)) return;

  if (lastRoll === 6) {
    enableSamePlayerTurn("🎲 Spilleren på duel-feltet slog en 6'er! Slå igen.");
    return;
  }

  endTurn();
}

startGameBtn.onclick = startGame;

buildBoard();
updateLegend();
showDiceFace(1);
rollBtn.disabled = true;
positions = Array(playerCount).fill(1);
updateBoard();

