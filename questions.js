const questions = {
dansk: [
  {
    q: "Hvad forstås ved førfagligt ordforråd?",
    answers: [
      "Ord fra hverdagssprog der støtter overgangen til faglige begreber",
      "Ord der kun bruges i grammatikundervisning",
      "Ord som kun forekommer i skønlitteratur",
      "Ord uden betydning for faglig læsning"
    ],
    correct: 0
  },
  {
    q: "Hvad er formålet med stilladsering i dansk?",
    answers: [
      "At gøre tekster mere komplekse for alle elever",
      "At støtte elevens læring midlertidigt, indtil eleven kan mere selv",
      "At sikre at alle elever arbejder helt ens",
      "At kontrollere om eleverne kan huske det hele uden hjælp"
    ],
    correct: 1
  },
  {
    q: "Hvad er skolesprog?",
    answers: [
      "Sprog der primært bruges i uformelle samtaler mellem elever",
      "Fagligt og abstrakt sprog, som bruges i undervisning og tekster",
      "Sprog der kun bruges i skriftlige afleveringer",
      "Et særligt korrekt talesprog uden hverdagselementer"
    ],
    correct: 1
  },
  {
    q: "Hvad er en læsestrategi?",
    answers: [
      "En metode til at støtte forståelsen før, under og efter læsning",
      "En måde at læse så hurtigt som muligt på",
      "En fast opskrift der bruges ens til alle tekster",
      "Et system til at rette elevers læsefejl"
    ],
    correct: 0
  },
  {
    q: "Hvad er afkodning?",
    answers: [
      "At forklare tekstens tema og budskab",
      "At omsætte bogstaver og bogstavfølger til sproglyde",
      "At læse mellem linjerne i en tekst",
      "At genkende tekstens genre og formål"
    ],
    correct: 1
  },

  {
    q: "Hvad er læseforståelse?",
    answers: [
      "At kunne læse en tekst flydende uden pauser",
      "At forstå indhold, sammenhæng og mening i en tekst",
      "At kunne stave alle ordene i teksten korrekt",
      "At kunne genlæse teksten hurtigt flere gange"
    ],
    correct: 1
  },
  {
    q: "Hvad er en multimodal tekst?",
    answers: [
      "En tekst der kun består af skrift og overskrifter",
      "En tekst med flere udtryksformer, fx skrift, billede og lyd",
      "En tekst der er skrevet i flere afsnit",
      "En tekst der veksler mellem fakta og fortælling"
    ],
    correct: 1
  },
  {
    q: "Hvad er en genre?",
    answers: [
      "En måde at inddele tekster efter formål, træk og opbygning",
      "En metode til at analysere stavning i tekster",
      "Et synonym for tema i en tekst",
      "En samling af ord der hører til samme emne"
    ],
    correct: 0
  },
  {
    q: "Hvad er formålet med modellering?",
    answers: [
      "At vise og tydeliggøre, hvordan en opgave eller proces kan gribes an",
      "At lade eleverne finde frem til alt uden støtte",
      "At sikre at eleverne kun arbejder individuelt",
      "At teste om eleverne allerede kan stoffet"
    ],
    correct: 0
  },
  {
    q: "Hvad er en fagtekst?",
    answers: [
      "En tekst med fagligt indhold, der forklarer eller informerer om et emne",
      "En tekst der altid er skrevet af en lærer",
      "En tekst der kun må bruges i naturfag",
      "En tekst uden særlige sproglige krav"
    ],
    correct: 0
  },

  {
    q: "Hvad er en fortællende tekst?",
    answers: [
      "En tekst med handling, personer og et forløb",
      "En tekst der kun gengiver fakta neutralt",
      "En tekst der udelukkende opstiller argumenter",
      "En teksttype der kun bruges mundtligt"
    ],
    correct: 0
  },
  {
    q: "Hvad er skriveprocessen?",
    answers: [
      "At skrive færdigt i første forsøg uden ændringer",
      "Planlægning, formulering, respons og bearbejdning af tekst",
      "At rette stavning til sidst og ellers lade teksten stå",
      "En metode hvor læreren skriver, og eleven kopierer"
    ],
    correct: 1
  },
  {
    q: "Hvad er respons i skrivning?",
    answers: [
      "En vurdering af om teksten er lang nok",
      "Feedback på tekstens indhold, form eller sprog med henblik på forbedring",
      "En afsluttende karakter uden kommentarer",
      "En opsummering af teksten i ét ord"
    ],
    correct: 1
  },
  {
    q: "Hvad er ordkendskab?",
    answers: [
      "At kunne stave mange ord udenad",
      "At kende ords betydning, brug og nuancer i forskellige sammenhænge",
      "At kunne finde ord i en ordbog hurtigt",
      "At kunne opdele ord i vokaler og konsonanter"
    ],
    correct: 1
  },
  {
    q: "Hvad er sproglig opmærksomhed?",
    answers: [
      "At kunne høre, undersøge og arbejde bevidst med sprogets lyd og opbygning",
      "At kunne tale højt og tydeligt foran andre",
      "At kunne huske mange svære ord",
      "At kunne læse udenad uden forståelse"
    ],
    correct: 0
  },

  {
    q: "Hvad er dialogisk læsning?",
    answers: [
      "At læse højt uden afbrydelser fra eleverne",
      "At læse og tale sammen om tekstens indhold, sprog og billeder",
      "At lade eleverne læse teksten alene bagefter",
      "At fokusere på korrekt oplæsning frem for forståelse"
    ],
    correct: 1
  },
  {
    q: "Hvad er en læsekontrakt?",
    answers: [
      "En aftale om læsning mellem elev, skole og eventuelt hjem",
      "En liste over de bøger eleven skal købe",
      "Et dokument der bruges til at bedømme læsehastighed",
      "En oversigt over alle fejl eleven laver under læsning"
    ],
    correct: 0
  },
  {
    q: "Hvad er et åbent spørgsmål?",
    answers: [
      "Et spørgsmål med ét præcist facitsvar",
      "Et spørgsmål der lægger op til flere mulige og uddybede svar",
      "Et spørgsmål der kun bruges i prøver",
      "Et spørgsmål der ikke kræver begrundelse"
    ],
    correct: 1
  },
  {
    q: "Hvad er inferens?",
    answers: [
      "At gengive tekstens ord præcist",
      "At udlede noget, som ikke står direkte, ved at læse mellem linjerne",
      "At finde tekstens svære ord og forklare dem",
      "At sammenligne to teksters overskrifter"
    ],
    correct: 1
  },
  {
    q: "Hvad er et tema i en tekst?",
    answers: [
      "Tekstens overordnede emne eller centrale idé",
      "Den første sætning i teksten",
      "En liste over tekstens nøgleord",
      "Måden teksten er opdelt i afsnit på"
    ],
    correct: 0
  },

  {
    q: "Hvad er en hovedperson?",
    answers: [
      "Den karakter som fortællingen især kredser om",
      "Den person der har skrevet teksten",
      "Den figur der optræder først i teksten",
      "En person der altid er fortælleren"
    ],
    correct: 0
  },
  {
    q: "Hvad er en konflikt i en tekst?",
    answers: [
      "Et centralt problem eller modsætningsforhold i fortællingen",
      "En tekst uden handling men med mange beskrivelser",
      "En metode til at afslutte fortællingen hurtigt",
      "En fejl i tekstens struktur"
    ],
    correct: 0
  },
  {
    q: "Hvad er en synsvinkel?",
    answers: [
      "Den måde historien opleves og formidles på",
      "Tekstens visuelle opsætning på siden",
      "Forfatterens private holdning til emnet",
      "Den rækkefølge kapitlerne kommer i"
    ],
    correct: 0
  },
  {
    q: "Hvad er en fortæller?",
    answers: [
      "Den stemme eller instans der formidler historien til læseren",
      "Den person i historien der taler mest",
      "Forfatteren selv i alle tekster",
      "En karakter der altid er hovedpersonen"
    ],
    correct: 0
  },
  {
    q: "Hvad er en metafor?",
    answers: [
      "Et sprogligt billede hvor noget omtales som noget andet uden sammenligningsord",
      "En direkte sammenligning med ordet 'som'",
      "En overdrivelse der bruges for humor",
      "Et ord der betyder det modsatte af sig selv"
    ],
    correct: 0
  },

  {
    q: "Hvad er et rim?",
    answers: [
      "Ord eller lyde der har ens eller næsten ens lyd i slutningen",
      "Ord der begynder med samme bogstav",
      "Ord der har samme betydning",
      "Ord der står i samme sætning"
    ],
    correct: 0
  },
  {
    q: "Hvad er en novelle?",
    answers: [
      "En kort fortælling med koncentreret handling og få personer",
      "En længere fortælling med flere sidehandlinger",
      "En sagtekst med tydelige faglige forklaringer",
      "Et digt med fast rytme og rim"
    ],
    correct: 0
  },
  {
    q: "Hvad er en artikel?",
    answers: [
      "En tekst der informerer, forklarer eller argumenterer om et emne",
      "En teksttype der altid fortæller en fiktiv historie",
      "En tekst der kun består af interviews",
      "En tekst der kun bruges i lærebøger"
    ],
    correct: 0
  },
  {
    q: "Hvad er et digt?",
    answers: [
      "En tekstform der ofte arbejder med rytme, billeder og fortættet sprog",
      "En tekst der altid handler om følelser og natur",
      "En kort fagtekst med fakta og begreber",
      "En fortælling der altid rimer i alle linjer"
    ],
    correct: 0
  },
  {
    q: "Hvad er læselyst?",
    answers: [
      "Motivation og interesse for at læse",
      "Evnen til at læse hurtigt uden fejl",
      "At kunne huske alt man har læst",
      "At vælge de korteste tekster først"
    ],
    correct: 0
  },

  {
    q: "Hvad er differentiering i dansk?",
    answers: [
      "At tilpasse indhold, støtte og arbejdsformer til elevers forskellige behov",
      "At give alle elever præcis de samme opgaver og mål",
      "At opdele elever efter karakterer og lade dem arbejde fast dér",
      "At vælge én metode og holde fast i den hele året"
    ],
    correct: 0
  },
  {
    q: "Hvad er elevaktivering?",
    answers: [
      "At eleverne deltager aktivt i bearbejdning, samtale og læring",
      "At eleverne sidder stille og lytter længst muligt",
      "At eleverne arbejder alene uden dialog",
      "At eleverne først bliver aktive efter testen"
    ],
    correct: 0
  },
  {
    q: "Hvad er feedback?",
    answers: [
      "Tilbagemelding der hjælper eleven videre i læringsprocessen",
      "En endelig vurdering uden mulighed for forbedring",
      "En generel ros uden fokus på udvikling",
      "En opsummering af dagens lektier"
    ],
    correct: 0
  },
  {
    q: "Hvad er læringsmålsstyret undervisning?",
    answers: [
      "Undervisning hvor mål for læring er tydelige og styrer valg af aktiviteter",
      "Undervisning hvor eleverne selv vælger mål uden lærerens støtte",
      "Undervisning der kun styres af lærebogens rækkefølge",
      "Undervisning hvor evaluering først kommer til sidst"
    ],
    correct: 0
  },
  {
    q: "Hvad er evaluering?",
    answers: [
      "At vurdere og undersøge elevers læring og undervisningens udbytte",
      "At give eleverne lektier for næste uge",
      "At sammenligne elevernes personligheder",
      "At rette tekster for stavefejl alene"
    ],
    correct: 0
  },

  {
    q: "Hvad er literacy?",
    answers: [
      "Evnen til at læse, skrive og deltage meningsfuldt i tekstlige sammenhænge",
      "Kun teknisk sikker læsning af skrevne ord",
      "Kun evnen til at skrive korrekt grammatik",
      "At kunne læse én type tekst meget grundigt"
    ],
    correct: 0
  },
  {
    q: "Hvad er tekstkompetence?",
    answers: [
      "At kunne forstå, bruge og skabe tekster i forskellige sammenhænge",
      "At kunne læse alle ord i en tekst uden tøven",
      "At kunne skrive lange tekster hurtigt",
      "At kunne huske tekstens overskrift og forfatter"
    ],
    correct: 0
  },
  {
    q: "Hvad er kommunikation?",
    answers: [
      "At udveksle mening, information og budskaber med andre",
      "At tale så længe som muligt uden afbrydelser",
      "At skrive uden at tænke på modtageren",
      "At forklare fagord uden eksempler"
    ],
    correct: 0
  },
  {
    q: "Hvad er en samtale?",
    answers: [
      "En dialog hvor deltagere lytter, taler og bygger videre på hinandens bidrag",
      "En situation hvor én person holder et oplæg",
      "En tekst der gengiver direkte tale",
      "En aktivitet hvor svar skal være helt ens"
    ],
    correct: 0
  },
  {
    q: "Hvad er aktiv lytning?",
    answers: [
      "At lytte opmærksomt og vise forståelse for det, den anden siger",
      "At vente på selv at få ordet",
      "At skrive alt ned uden at reagere",
      "At være stille uden at forholde sig til indholdet"
    ],
    correct: 0
  },

  {
    q: "Hvad er mundtlighed?",
    answers: [
      "Sproglig kommunikation gennem tale, samtale og fremlæggelse",
      "Kun spontan tale uden planlægning",
      "Skriftlige aktiviteter med oplæsning bagefter",
      "Træning i korrekt håndskrift"
    ],
    correct: 0
  },
  {
    q: "Hvad er skriftlighed?",
    answers: [
      "At formulere sig og kommunikere gennem skrevne tekster",
      "At skrive ord korrekt uden at tænke på indhold",
      "At læse højt fra en bog med tydelig stemme",
      "At notere stikord uden sammenhæng"
    ],
    correct: 0
  },
  {
    q: "Hvad er en tekststruktur?",
    answers: [
      "Måden en tekst er organiseret og bygget op på",
      "Tekstens samlede antal ord og linjer",
      "Den skrifttype teksten er skrevet med",
      "Rækkefølgen af svære ord i teksten"
    ],
    correct: 0
  },
  {
    q: "Hvad er et afsnit?",
    answers: [
      "En sammenhængende del af en tekst med et delindhold",
      "En enkelt sætning med punktum",
      "En overskrift uden brødtekst",
      "Et afsnit i en bogs indholdsfortegnelse"
    ],
    correct: 0
  },
  {
    q: "Hvad er en sætning?",
    answers: [
      "Ord der danner en sproglig helhed med mening",
      "En samling ord uden krav om sammenhæng",
      "Et afsnit med mindst tre linjer",
      "Et enkelt ord med stor begyndelsesbogstav"
    ],
    correct: 0
  },

  {
    q: "Hvad er formålet med at arbejde med ordforråd i dansk?",
    answers: [
      "At styrke elevers forståelse, udtryksevne og adgang til tekster",
      "At få elever til at bruge de samme ord hele tiden",
      "At erstatte læsning med ordtræning alene",
      "At fokusere på stavning uden betydning"
    ],
    correct: 0
  },
  {
    q: "Hvad betyder det at læse mellem linjerne?",
    answers: [
      "At udlede information som ikke står direkte skrevet",
      "At læse meget langsomt og grundigt",
      "At springe uvigtige sætninger over",
      "At finde alle tekstens kommaer"
    ],
    correct: 0
  },
  {
    q: "Hvad er et lukket spørgsmål i undervisningen?",
    answers: [
      "Et spørgsmål der typisk lægger op til et kort og afgrænset svar",
      "Et spørgsmål der altid kræver lange begrundelser",
      "Et spørgsmål uden rigtigt eller forkert svar",
      "Et spørgsmål der kun bruges i gruppearbejde"
    ],
    correct: 0
  },
  {
    q: "Hvad er formålet med åbne spørgsmål i dansk?",
    answers: [
      "At invitere til refleksion, tolkning og flere mulige svar",
      "At sikre at alle elever svarer helt ens",
      "At kontrollere om eleverne kan huske én bestemt formulering",
      "At afslutte en samtale hurtigt"
    ],
    correct: 0
  },
  {
    q: "Hvad er sammenhæng mellem afkodning og læseforståelse?",
    answers: [
      "Afkodning er vigtig, men forståelse kræver også ordkendskab og fortolkning",
      "Når afkodning er på plads, kommer forståelse altid automatisk",
      "Læseforståelse er vigtigere end afkodning og kan erstatte den helt",
      "De to områder har ingen reel forbindelse"
    ],
    correct: 0
  },

  {
    q: "Hvad er kendetegnende for en god faglig samtale i dansk?",
    answers: [
      "At elever begrunder, lytter og bygger videre på hinandens tanker",
      "At læreren taler mest og eleverne noterer stille",
      "At svarene bliver så korte som muligt",
      "At man kun fokuserer på ét rigtigt facit"
    ],
    correct: 0
  },
  {
    q: "Hvad er formålet med før-læsning?",
    answers: [
      "At aktivere forforståelse og skabe forventninger til teksten",
      "At kontrollere om eleverne allerede kan hele teksten udenad",
      "At springe vanskelige ord over inden læsning",
      "At erstatte selve læsningen med samtale"
    ],
    correct: 0
  },
  {
    q: "Hvad er formålet med under-læsning?",
    answers: [
      "At støtte eleverne i at overvåge forståelsen mens de læser",
      "At rette alle stavefejl i teksten",
      "At vælge hvilken genre teksten kunne have været",
      "At afgøre om teksten er for lang"
    ],
    correct: 0
  },
  {
    q: "Hvad er formålet med efter-læsning?",
    answers: [
      "At bearbejde, opsummere og perspektivere tekstens indhold",
      "At starte en helt ny tekst uden forbindelse",
      "At fokusere kun på oplæsning og udtale",
      "At undgå fortolkning for ikke at forvirre eleverne"
    ],
    correct: 0
  },
  {
    q: "Hvad betyder det at modellere skrivning i undervisningen?",
    answers: [
      "At læreren viser og tænker højt om, hvordan en tekst kan planlægges og skrives",
      "At læreren skriver elevens tekst færdig for eleven",
      "At eleverne kopierer en tekst uden ændringer",
      "At man kun retter grammatik på tavlen"
    ],
    correct: 0
  }
],
matematik: [
  {
    q: "Hvad er begrebsforståelse i matematik?",
    answers: [
      "At forstå hvorfor en metode virker, og hvordan matematiske idéer hænger sammen",
      "At kunne udføre regnemetoder hurtigt uden nødvendigvis at kunne forklare dem",
      "At kunne huske flest mulige regler og formler udenad",
      "At kunne løse mange ens opgaver på kort tid"
    ],
    correct: 0
  },
  {
    q: "Hvad er procedureforståelse?",
    answers: [
      "At forstå de bagvedliggende idéer bag et matematisk begreb",
      "At kunne gennemføre en fremgangsmåde eller metode korrekt",
      "At kunne forklare matematik med egne ord i alle situationer",
      "At kunne vælge den sværeste strategi i en opgave"
    ],
    correct: 1
  },
  {
    q: "Hvad er en repræsentation i matematik?",
    answers: [
      "En måde at vise eller udtrykke matematik på, fx med symboler, tegninger eller materialer",
      "En forklaring der kun gives mundtligt af læreren",
      "En metode der altid bruger tal og formler alene",
      "En oversigt over elevernes resultater i et regneark"
    ],
    correct: 0
  },
  {
    q: "Hvad er konkret materiale?",
    answers: [
      "Fysiske genstande der kan støtte elever i at undersøge og forstå matematik",
      "Materiale der kun bruges til leg og ikke til faglig læring",
      "Alle opgaver der er skrevet i en matematikbog",
      "Digitale øvelser med facit og point"
    ],
    correct: 0
  },
  {
    q: "Hvad er abstrakt tænkning?",
    answers: [
      "At arbejde med matematiske idéer uden nødvendigvis at bruge konkrete genstande",
      "At regne uden at skrive noget ned",
      "At bruge fantasifulde historier i stedet for tal",
      "At undgå modeller og symboler i undervisningen"
    ],
    correct: 0
  },

  {
    q: "Hvad er talforståelse?",
    answers: [
      "Forståelse af tal, deres værdi, opbygning og relationer til andre tal",
      "Evnen til at skrive tal hurtigt og korrekt i rækkefølge",
      "At kunne regne med store tal uden hjælpemidler",
      "At kende alle gangestykker udenad"
    ],
    correct: 0
  },
  {
    q: "Hvad er en strategi i matematik?",
    answers: [
      "En bevidst måde at angribe og løse en opgave på",
      "En regel der altid virker i alle typer opgaver",
      "Den hurtigste metode, uanset om man forstår den",
      "Et facit der viser, om svaret er korrekt"
    ],
    correct: 0
  },
  {
    q: "Hvad er en fejltype?",
    answers: [
      "Et mønster i de misforståelser eller fejl elever typisk laver",
      "En enkelt forkert udregning uden betydning for undervisningen",
      "En straf når eleven ikke kan svare rigtigt",
      "Et tegn på at eleven ikke kan lære matematik"
    ],
    correct: 0
  },
  {
    q: "Hvad er problemløsning?",
    answers: [
      "At arbejde med opgaver, hvor eleven skal undersøge, vælge strategi og begrunde løsninger",
      "At løse opgaver så hurtigt som muligt med en kendt metode",
      "At finde ét facit uden at forklare fremgangsmåden",
      "At træne de samme regnestykker mange gange"
    ],
    correct: 0
  },
  {
    q: "Hvad er matematisering?",
    answers: [
      "At oversætte situationer fra virkeligheden til matematiske modeller eller udtryk",
      "At gøre alle opgaver mere abstrakte for eleverne",
      "At bruge symboler i stedet for ord i alle opgaver",
      "At regne uden brug af hverdagseksempler"
    ],
    correct: 0
  },

  {
    q: "Hvad er en model i matematik?",
    answers: [
      "En forenklet fremstilling af en situation eller sammenhæng",
      "En præcis kopi af virkeligheden uden forenkling",
      "Et regnestykke uden tekst eller forklaring",
      "En metode der kun bruges i geometri"
    ],
    correct: 0
  },
  {
    q: "Hvad er et regneudtryk?",
    answers: [
      "En matematisk skrivemåde med tal, symboler og eventuelt parenteser",
      "En tekst der forklarer, hvordan man bør regne",
      "Et facit skrevet som en hel sætning",
      "En tabel med måleresultater"
    ],
    correct: 0
  },
  {
    q: "Hvad er addition?",
    answers: [
      "At sammenlægge tal eller størrelser",
      "At finde forskellen mellem to tal",
      "At dele en mængde i lige store dele",
      "At gange et tal med sig selv"
    ],
    correct: 0
  },
  {
    q: "Hvad er subtraktion?",
    answers: [
      "At finde forskellen ved at tage noget fra",
      "At lægge to eller flere tal sammen",
      "At fordele i lige store grupper",
      "At udvide et tal med en faktor"
    ],
    correct: 0
  },
  {
    q: "Hvad er multiplikation?",
    answers: [
      "En måde at beregne gentagen addition eller bestemte antal grupper af samme størrelse",
      "At finde hvor meget der er tilbage efter en reduktion",
      "At dele en mængde tilfældigt op",
      "At sammenligne to tal ved at trække fra"
    ],
    correct: 0
  },

  {
    q: "Hvad er division?",
    answers: [
      "At opdele eller fordele en mængde i lige store dele eller grupper",
      "At lægge flere ens mængder sammen",
      "At finde forskellen mellem to størrelser",
      "At gøre et tal større ved hjælp af en faktor"
    ],
    correct: 0
  },
  {
    q: "Hvad er en brøk?",
    answers: [
      "Et tal der beskriver en del af en helhed eller et forhold mellem to tal",
      "Et tal der kun kan skrives med komma",
      "Et mål for hvor stor en figur er",
      "Et symbol der altid betyder division i opgaver"
    ],
    correct: 0
  },
  {
    q: "Hvad er en decimal?",
    answers: [
      "Et tal skrevet i titalssystemet med heltal og eventuelt decimaler efter komma",
      "Et tal der altid er mindre end 1",
      "En måde at skrive brøker på uden værdi",
      "Et tal der kun bruges i statistik"
    ],
    correct: 0
  },
  {
    q: "Hvad er procent?",
    answers: [
      "En måde at angive dele ud af hundrede på",
      "En metode til at gange to tal sammen",
      "En type tal der kun bruges i geometri",
      "En forkortelse for gennemsnit"
    ],
    correct: 0
  },
  {
    q: "Hvad er en ligning?",
    answers: [
      "En matematisk sætning med et lighedstegn, hvor to udtryk er lige store",
      "Et regnestykke uden ukendte størrelser",
      "En grafisk fremstilling af tal i et koordinatsystem",
      "En opgave hvor man kun må bruge hovedregning"
    ],
    correct: 0
  },

  {
    q: "Hvad er variabler?",
    answers: [
      "Symboler, ofte bogstaver, der repræsenterer tal eller størrelser",
      "Tal der altid ændrer værdi i samme opgave",
      "Regneregler der bruges i algebra",
      "De største tal i en talfølge"
    ],
    correct: 0
  },
  {
    q: "Hvad er en funktion?",
    answers: [
      "En sammenhæng hvor hver inputværdi hører sammen med én bestemt outputværdi",
      "En tabel med vilkårlige tal uden mønster",
      "En metode til at regne hurtigere i hovedet",
      "En regel der kun gælder for grafer"
    ],
    correct: 0
  },
  {
    q: "Hvad er en graf?",
    answers: [
      "En visuel fremstilling af en sammenhæng, ofte i et koordinatsystem",
      "En liste over tal skrevet i rækkefølge",
      "En figur der altid består af rette linjer",
      "Et udtryk med parenteser og variable"
    ],
    correct: 0
  },
  {
    q: "Hvad er geometri?",
    answers: [
      "Læren om former, figurer, placeringer og rumlige sammenhænge",
      "Læren om tal og regnearter alene",
      "En metode til at analysere datasæt",
      "En del af matematik der kun handler om vinkler"
    ],
    correct: 0
  },
  {
    q: "Hvad er en vinkel?",
    answers: [
      "En figur eller størrelse dannet af to linjer eller stråler, der mødes i et punkt",
      "Afstanden mellem to punkter på en linje",
      "En figur med tre sider",
      "Et mål for en flades størrelse"
    ],
    correct: 0
  },

  {
    q: "Hvad er en trekant?",
    answers: [
      "En polygon med tre sider og tre vinkler",
      "En figur med tre lige lange sider",
      "En lukket figur med mindst fire hjørner",
      "En figur der altid har en ret vinkel"
    ],
    correct: 0
  },
  {
    q: "Hvad er en firkant?",
    answers: [
      "En polygon med fire sider",
      "En figur hvor alle sider nødvendigvis er lige lange",
      "En figur med fire rette vinkler",
      "En figur der altid er et kvadrat"
    ],
    correct: 0
  },
  {
    q: "Hvad er omkreds?",
    answers: [
      "Den samlede længde rundt om en figur",
      "Størrelsen af figurens flade",
      "Mængden af plads inde i en kasse",
      "Afstanden fra centrum til kanten i en cirkel"
    ],
    correct: 0
  },
  {
    q: "Hvad er areal?",
    answers: [
      "Målet for hvor stor en flade er",
      "Længden rundt om en figur",
      "Afstanden mellem to punkter",
      "Et mål for hvor tung en figur er"
    ],
    correct: 0
  },
  {
    q: "Hvad er volumen?",
    answers: [
      "Et mål for hvor meget plads et rumligt objekt fylder",
      "Målet for en flades størrelse",
      "Længden rundt om en figur",
      "Et mål for hældningen på en linje"
    ],
    correct: 0
  },

  {
    q: "Hvad er sandsynlighed?",
    answers: [
      "Et mål for hvor stor chance der er for, at en hændelse sker",
      "En sikker forudsigelse af et resultat",
      "Antallet af mulige svar i en opgave",
      "Den mest almindelige værdi i et datasæt"
    ],
    correct: 0
  },
  {
    q: "Hvad er statistik?",
    answers: [
      "Arbejdet med at indsamle, bearbejde, analysere og fortolke data",
      "At løse geometriske problemer ved hjælp af figurer",
      "At opstille ligninger med ukendte",
      "At finde facit uden at forklare metoden"
    ],
    correct: 0
  },
  {
    q: "Hvad er et gennemsnit?",
    answers: [
      "En middelværdi, ofte fundet ved at summere værdier og dele med antallet",
      "Den værdi der står i midten af et sorteret datasæt",
      "Den værdi der forekommer flest gange",
      "Forskellen mellem den største og mindste værdi"
    ],
    correct: 0
  },
  {
    q: "Hvad er median?",
    answers: [
      "Den midterste værdi i et sorteret datasæt",
      "Den værdi der forekommer oftest",
      "Summen af alle værdier delt med antallet",
      "Den største værdi i et datasæt"
    ],
    correct: 0
  },
  {
    q: "Hvad er typetal?",
    answers: [
      "Den værdi der forekommer hyppigst i et datasæt",
      "Den midterste værdi i et sorteret datasæt",
      "Forskellen mellem to yderpunkter",
      "Den samlede sum af alle observationer"
    ],
    correct: 0
  },

  {
    q: "Hvad er differentiering i matematik?",
    answers: [
      "At tilpasse opgaver, støtte og repræsentationer til elevers forskellige forudsætninger",
      "At give alle elever de samme opgaver for at sikre fairness",
      "At dele eleverne fast op efter niveau uden variation",
      "At lade de hurtigste elever arbejde alene med flere sider"
    ],
    correct: 0
  },
  {
    q: "Hvad er feedback i matematik?",
    answers: [
      "Respons der hjælper eleven til at forstå fejl, strategier og næste skridt",
      "En besked om, hvor mange opgaver eleven nåede",
      "Et facit uden forklaring på fremgangsmåden",
      "En karakter der gives efter endt forløb"
    ],
    correct: 0
  },
  {
    q: "Hvad er evaluering?",
    answers: [
      "At undersøge og vurdere elevens læring og undervisningens udbytte",
      "At give eleverne flere opgaver af samme type",
      "At rette regnefejl uden at se på forståelse",
      "At afslutte et forløb med en konkurrence"
    ],
    correct: 0
  },
  {
    q: "Hvad er undersøgende matematik?",
    answers: [
      "At udforske mønstre, sammenhænge og strategier gennem spørgsmål og afprøvning",
      "At følge en fast opskrift uden afvigelser",
      "At træne automatisering uden samtale",
      "At arbejde med facit før opgaven læses"
    ],
    correct: 0
  },
  {
    q: "Hvad er en åben opgave?",
    answers: [
      "En opgave hvor der kan være flere strategier, løsninger eller måder at begrunde på",
      "En opgave uden fagligt mål eller retning",
      "En opgave der kun kan løses i grupper",
      "En opgave hvor alle svar er lige gode"
    ],
    correct: 0
  },

  {
    q: "Hvad er forskellen på begrebsforståelse og procedureforståelse?",
    answers: [
      "Begrebsforståelse handler om mening og sammenhæng, mens procedureforståelse handler om at kunne udføre metoder",
      "Begrebsforståelse handler om at regne hurtigt, mens procedureforståelse handler om at forklare langsomt",
      "Begrebsforståelse bruges i geometri, mens procedureforståelse bruges i algebra",
      "Der er ingen reel forskel mellem de to"
    ],
    correct: 0
  },
  {
    q: "Hvorfor er flere repræsentationer vigtige i matematikundervisning?",
    answers: [
      "De kan støtte elever i at forbinde konkrete, visuelle, sproglige og symbolske forståelser",
      "De gør det muligt at undgå faglige samtaler i undervisningen",
      "De erstatter behovet for at arbejde med begreber",
      "De sikrer, at alle elever lærer på præcis samme måde"
    ],
    correct: 0
  },
  {
    q: "Hvad betyder det at generalisere i matematik?",
    answers: [
      "At finde mønstre eller regler, der gælder i flere tilfælde",
      "At vælge den letteste løsning uden begrundelse",
      "At opstille en tabel med enkelte resultater",
      "At regne med store tal i stedet for små"
    ],
    correct: 0
  },
  {
    q: "Hvad er et mønster i matematik?",
    answers: [
      "En regelmæssighed eller struktur der kan genkendes og beskrives",
      "En tegning med ens farver og former",
      "Et facit der går igen i flere opgaver",
      "En metode til at kontrollere fejl i tabeller"
    ],
    correct: 0
  },
  {
    q: "Hvad betyder det at begrunde i matematik?",
    answers: [
      "At forklare hvorfor en løsning, strategi eller påstand giver mening",
      "At skrive facit tydeligt og pænt",
      "At bruge flest mulige regnestykker i én opgave",
      "At vælge samme metode som sidemanden"
    ],
    correct: 0
  },

  {
    q: "Hvad er en matematisk samtale?",
    answers: [
      "En dialog hvor elever forklarer, lytter, argumenterer og sammenligner strategier",
      "En aktivitet hvor læreren fortæller, og eleverne kun noterer",
      "En test hvor eleverne svarer én ad gangen uden begrundelse",
      "En opsamling hvor kun det rigtige facit nævnes"
    ],
    correct: 0
  },
  {
    q: "Hvad er formålet med at bruge konkret materiale i matematik?",
    answers: [
      "At støtte forståelse ved at gøre idéer synlige og håndgribelige",
      "At erstatte al symbolbehandling i matematikundervisningen",
      "At gøre undervisningen lettere uden krav om tænkning",
      "At undgå at eleverne taler om matematik"
    ],
    correct: 0
  },
  {
    q: "Hvornår er konkret materiale mest værdifuldt?",
    answers: [
      "Når det kobles til samtale, refleksion og gradvis overgang til mere abstrakte repræsentationer",
      "Når eleverne bruger det uden forklaring eller fælles opsamling",
      "Kun i de yngste klasser og aldrig senere",
      "Når det erstatter alle andre arbejdsformer"
    ],
    correct: 0
  },
  {
    q: "Hvad kan en elevfejl vise i matematik?",
    answers: [
      "Noget om elevens tænkning, strategi eller misforståelse",
      "At eleven ikke har forsøgt at løse opgaven",
      "At opgaven nødvendigvis er for svær",
      "At der ikke er behov for mere undervisning"
    ],
    correct: 0
  },
  {
    q: "Hvad er formålet med at lade elever sammenligne strategier?",
    answers: [
      "At udvikle forståelse for, at opgaver kan løses på forskellige meningsfulde måder",
      "At finde ud af hvem der regner hurtigst i klassen",
      "At sikre at alle ender med præcis samme metode",
      "At undgå brug af faglige begreber"
    ],
    correct: 0
  },

  {
    q: "Hvad betyder det at estimere i matematik?",
    answers: [
      "At lave et kvalificeret overslag over en værdi eller et resultat",
      "At finde det nøjagtige facit med skriftlig metode",
      "At gætte uden at bruge nogen form for viden",
      "At vælge mellem to svarmuligheder i en test"
    ],
    correct: 0
  },
  {
    q: "Hvorfor er estimering vigtig?",
    answers: [
      "Den styrker talforståelse og hjælper med at vurdere, om resultater virker rimelige",
      "Den gør præcise beregninger overflødige i matematik",
      "Den bruges kun i hovedregning og ikke i problemløsning",
      "Den handler mest om at memorere facit"
    ],
    correct: 0
  },
  {
    q: "Hvad vil det sige at et svar er rimeligt?",
    answers: [
      "At resultatet passer nogenlunde med situationen, tallene og forventningen i opgaven",
      "At svaret er det samme som sidemandens",
      "At tallet er nemt at arbejde videre med",
      "At eleven brugte en hurtig metode"
    ],
    correct: 0
  },
  {
    q: "Hvad er forskellen på omkreds og areal?",
    answers: [
      "Omkreds måler længden rundt om en figur, mens areal måler størrelsen af fladen",
      "Omkreds måler fladen, mens areal måler længden rundt om figuren",
      "Omkreds bruges i 2D, mens areal kun bruges i 3D",
      "Der er ingen forskel, hvis figuren er firkantet"
    ],
    correct: 0
  },
  {
    q: "Hvad er forskellen på areal og volumen?",
    answers: [
      "Areal handler om fladers størrelse, mens volumen handler om rumlige objekters indhold eller fylde",
      "Areal handler om længde, mens volumen handler om bredde",
      "Areal og volumen måler det samme med forskellige enheder",
      "Volumen bruges kun i statistik"
    ],
    correct: 0
  },

  {
    q: "Hvad er et koordinatsystem?",
    answers: [
      "Et system med akser, der bruges til at placere og aflæse punkter og sammenhænge",
      "En tabel med tal i rækker og kolonner",
      "Et net der kun bruges til geometriopgaver med vinkler",
      "En metode til at måle omkreds og areal"
    ],
    correct: 0
  },
  {
    q: "Hvad er formålet med algebra i skolen?",
    answers: [
      "At beskrive mønstre, sammenhænge og generaliseringer med symboler",
      "At erstatte alle regnearter med bogstaver",
      "At gøre matematik mere abstrakt uden forbindelse til virkeligheden",
      "At træne én bestemt metode til ligninger"
    ],
    correct: 0
  },
  {
    q: "Hvad er en matematisk forklaring?",
    answers: [
      "En beskrivelse af hvordan og hvorfor en løsning eller sammenhæng giver mening",
      "Et facit skrevet med understregning",
      "En gengivelse af regnereglen uden eksempel",
      "En kort besked om at svaret er rigtigt"
    ],
    correct: 0
  },
  {
    q: "Hvad betyder progression i matematikundervisning?",
    answers: [
      "At elever gradvist udvikler mere avanceret forståelse, sprog og strategier",
      "At alle opgaver bliver sværere fra side til side uanset elevens niveau",
      "At undervisningen går hurtigere frem hvert år",
      "At eleverne laver flere opgaver på kortere tid"
    ],
    correct: 0
  },
  {
    q: "Hvad er et vigtigt kendetegn ved god matematikundervisning?",
    answers: [
      "At elever både arbejder med forståelse, strategier, samtale og begrundelser",
      "At elever primært træner hurtighed og facitkontrol",
      "At læreren undgår elevforklaringer for at spare tid",
      "At alle opgaver løses med én fast metode"
    ],
    correct: 0
  }
],
engelsk: [
  {
    q: "What is communicative language teaching?",
    answers: [
      "An approach that emphasizes meaningful communication and language use in context",
      "An approach that focuses mainly on grammar drills and error correction",
      "A method where students primarily memorize vocabulary lists",
      "A teaching style based only on written tests and exercises"
    ],
    correct: 0
  },
  {
    q: "What is scaffolding in language teaching?",
    answers: [
      "Temporary support that helps learners complete tasks they cannot yet do independently",
      "A fixed sequence of grammar exercises used in every lesson",
      "A system for correcting all student errors immediately",
      "A way of simplifying all teaching materials permanently"
    ],
    correct: 0
  },
  {
    q: "What is second language acquisition?",
    answers: [
      "The process of learning a language in addition to one’s first language",
      "The process of forgetting one language while learning another",
      "A method for teaching translation skills only",
      "A stage where learners focus only on pronunciation"
    ],
    correct: 0
  },
  {
    q: "What is vocabulary?",
    answers: [
      "The words a person knows and can understand or use",
      "The rules that determine sentence structure",
      "The sounds and stress patterns of a language",
      "The written symbols used in grammar exercises"
    ],
    correct: 0
  },
  {
    q: "What is pronunciation?",
    answers: [
      "The way words and sounds are spoken in a language",
      "The way words are organized into sentences",
      "The meaning of words in a particular context",
      "The spelling patterns used in written language"
    ],
    correct: 0
  },

  {
    q: "What is grammar?",
    answers: [
      "The system of rules and patterns for how a language works",
      "The collection of words learners need for communication",
      "The ability to speak quickly and smoothly",
      "The interpretation of meaning in spoken texts"
    ],
    correct: 0
  },
  {
    q: "What is listening comprehension?",
    answers: [
      "The ability to understand spoken language",
      "The ability to read and summarize written texts",
      "The ability to produce accurate spoken sentences",
      "The ability to identify grammar rules in speech"
    ],
    correct: 0
  },
  {
    q: "What is reading comprehension?",
    answers: [
      "The ability to understand and interpret written texts",
      "The ability to read aloud without hesitation",
      "The ability to identify every unknown word in a text",
      "The ability to spell words correctly while reading"
    ],
    correct: 0
  },
  {
    q: "What is speaking?",
    answers: [
      "The productive skill of expressing meaning through spoken language",
      "The receptive skill of understanding what others say",
      "The ability to copy phrases from a text accurately",
      "The process of identifying grammar mistakes in oral work"
    ],
    correct: 0
  },
  {
    q: "What is writing?",
    answers: [
      "The productive skill of expressing meaning through written language",
      "The ability to decode sounds and letters while reading",
      "The use of body language to support communication",
      "The practice of repeating model sentences aloud"
    ],
    correct: 0
  },

  {
    q: "What is a dialogue?",
    answers: [
      "A spoken interaction between two or more people",
      "A written summary of a lesson topic",
      "A grammar activity with one correct answer",
      "A silent reading task completed individually"
    ],
    correct: 0
  },
  {
    q: "What is fluency?",
    answers: [
      "The ability to communicate smoothly and with relative ease",
      "The ability to use language with complete grammatical accuracy",
      "The ability to translate every word correctly",
      "The ability to memorize model sentences quickly"
    ],
    correct: 0
  },
  {
    q: "What is accuracy?",
    answers: [
      "The correct use of language forms such as grammar, vocabulary and pronunciation",
      "The ability to speak for a long time without pauses",
      "The confidence to use gestures in communication",
      "The speed at which learners can complete written tasks"
    ],
    correct: 0
  },
  {
    q: "What is CLIL?",
    answers: [
      "Content and Language Integrated Learning, where subject content and language are learned together",
      "A method focusing only on speaking and pronunciation practice",
      "A reading strategy used for literary analysis only",
      "A grammar-based model for testing written accuracy"
    ],
    correct: 0
  },
  {
    q: "What is feedback?",
    answers: [
      "Information given to support learners in improving their work or performance",
      "A final grade that ends the learning process",
      "A list of mistakes without explanation or guidance",
      "A set of instructions given before a task begins"
    ],
    correct: 0
  },

  {
    q: "What is differentiation?",
    answers: [
      "Adapting teaching to learners’ different needs, levels and ways of learning",
      "Giving all learners the same task in the same way",
      "Separating learners permanently by ability groups only",
      "Allowing fast learners to skip all support activities"
    ],
    correct: 0
  },
  {
    q: "What is motivation?",
    answers: [
      "The desire or willingness to engage in learning",
      "The ability to complete tasks without making mistakes",
      "The amount of grammar knowledge a learner has",
      "The process of testing students at the end of a unit"
    ],
    correct: 0
  },
  {
    q: "What is a task?",
    answers: [
      "A purposeful activity designed to promote learning and language use",
      "A short test used only to measure grammar accuracy",
      "A list of words learners must memorize silently",
      "A teacher explanation with no learner participation"
    ],
    correct: 0
  },
  {
    q: "What is interaction?",
    answers: [
      "Communication where participants respond to and build on each other’s contributions",
      "A speech delivered by one person without interruption",
      "The silent processing of written input",
      "A correction procedure led entirely by the teacher"
    ],
    correct: 0
  },
  {
    q: "What is pair work?",
    answers: [
      "A learning activity where two students work together",
      "An assessment where students answer individually in silence",
      "A teaching format where the teacher speaks to the whole class",
      "A writing method where students copy the same text"
    ],
    correct: 0
  },

  {
    q: "What is group work?",
    answers: [
      "A learning activity where several students collaborate on a shared task",
      "A situation where learners complete identical tests independently",
      "A form of teacher explanation to the whole class",
      "An exercise where only one student is active at a time"
    ],
    correct: 0
  },
  {
    q: "What is a lesson plan?",
    answers: [
      "A structured plan for goals, activities, materials and progression in a lesson",
      "A list of homework tasks given after each lesson",
      "A record of all student mistakes made during class",
      "A set of test questions used for final assessment"
    ],
    correct: 0
  },
  {
    q: "What is assessment?",
    answers: [
      "The process of gathering information about learning and performance",
      "A method for explaining new content before practice",
      "A type of classroom management used during activities",
      "A strategy for increasing speaking speed in discussions"
    ],
    correct: 0
  },
  {
    q: "What is formative assessment?",
    answers: [
      "Assessment used during learning to support progress and next steps",
      "Assessment used only at the end of a course for grading",
      "Assessment that focuses exclusively on correct pronunciation",
      "Assessment where learners compare themselves without teacher input"
    ],
    correct: 0
  },
  {
    q: "What is summative assessment?",
    answers: [
      "Assessment that evaluates learning at the end of a course or unit",
      "Assessment used continuously to adjust teaching during learning",
      "Assessment focused on peer feedback and self-reflection only",
      "Assessment that replaces all classroom interaction"
    ],
    correct: 0
  },

  {
    q: "What is a learning goal?",
    answers: [
      "A clear statement of what learners are expected to know or be able to do",
      "A description of which activities learners enjoy most",
      "A summary of what the teacher has already explained",
      "A list of classroom rules for behaviour and participation"
    ],
    correct: 0
  },
  {
    q: "What is a model?",
    answers: [
      "An example that shows learners what a product or performance can look like",
      "A grammar rule that must be memorized before practice",
      "A test format used to compare learners’ speaking levels",
      "A digital tool that automatically corrects student work"
    ],
    correct: 0
  },
  {
    q: "What is repetition?",
    answers: [
      "Repeating language to support memory, confidence and learning",
      "Saying the same sentence many times without understanding",
      "A correction method used only for pronunciation mistakes",
      "A reading strategy where students scan for keywords"
    ],
    correct: 0
  },
  {
    q: "What is drilling?",
    answers: [
      "Structured repeated practice of language forms to build control and familiarity",
      "An activity where learners freely discuss open topics",
      "A method that focuses only on reading comprehension",
      "A strategy used to avoid speaking in front of others"
    ],
    correct: 0
  },
  {
    q: "What is context?",
    answers: [
      "The situation, setting or surrounding meaning that helps language make sense",
      "The list of grammar rules needed in a lesson",
      "The number of times a learner uses a word",
      "The order in which vocabulary is written in a notebook"
    ],
    correct: 0
  },

  {
    q: "What is meaning?",
    answers: [
      "What words, phrases or texts express or refer to",
      "The grammatical structure of a sentence only",
      "The sound pattern used in connected speech",
      "The number of correct answers in a task"
    ],
    correct: 0
  },
  {
    q: "What is form?",
    answers: [
      "The structure or linguistic shape of language",
      "The intention behind a speaker’s message",
      "The social situation in which language is used",
      "The emotional response of the listener"
    ],
    correct: 0
  },
  {
    q: "What is use?",
    answers: [
      "The way language is applied for specific purposes in real situations",
      "The spelling pattern of difficult vocabulary items",
      "The grammatical category a word belongs to",
      "The number of examples learners can remember"
    ],
    correct: 0
  },
  {
    q: "What is a text?",
    answers: [
      "A spoken, written or multimodal piece of communication with meaning",
      "A written paragraph only",
      "A set of grammar sentences without context",
      "A list of vocabulary items organized alphabetically"
    ],
    correct: 0
  },
  {
    q: "What is a genre?",
    answers: [
      "A type of text with typical features, purpose and structure",
      "A category of words with similar pronunciation",
      "A system for grouping grammar exercises by level",
      "A method for correcting written errors"
    ],
    correct: 0
  },

  {
    q: "What is culture in language teaching?",
    answers: [
      "Understanding ways of life, perspectives and practices connected to language use",
      "Learning only facts about holidays and famous places",
      "Teaching grammar without reference to social context",
      "Focusing only on correct pronunciation in native-speaker accents"
    ],
    correct: 0
  },
  {
    q: "What is intercultural competence?",
    answers: [
      "The ability to understand, reflect on and communicate across cultural differences",
      "The ability to translate every word between two languages",
      "The knowledge of historical dates from English-speaking countries only",
      "The skill of using perfect grammar in formal writing"
    ],
    correct: 0
  },
  {
    q: "What is digital literacy?",
    answers: [
      "The ability to use digital tools critically, meaningfully and responsibly",
      "The ability to type quickly without spelling mistakes",
      "The use of online dictionaries in every activity",
      "The practice of replacing speaking tasks with digital quizzes"
    ],
    correct: 0
  },
  {
    q: "What is multimodality?",
    answers: [
      "The use of different modes such as text, image, sound and video to create meaning",
      "The use of several grammar rules in one sentence",
      "The ability to speak and write at the same time",
      "The practice of giving the same content in multiple worksheets"
    ],
    correct: 0
  },
  {
    q: "What is a strategy?",
    answers: [
      "A conscious way of approaching learning or solving a language task",
      "A fixed answer pattern used in all assignments",
      "A list of vocabulary items arranged by topic",
      "A method that avoids learner reflection"
    ],
    correct: 0
  },

  {
    q: "Why is fluency not the same as accuracy?",
    answers: [
      "Fluency is about smooth communication, while accuracy is about correct language use",
      "Fluency is about writing, while accuracy is about speaking only",
      "Fluency means using advanced vocabulary, while accuracy means speaking loudly",
      "There is no meaningful difference between the two"
    ],
    correct: 0
  },
  {
    q: "Why is scaffolding important in language teaching?",
    answers: [
      "It helps learners participate in tasks that would otherwise be too difficult without support",
      "It removes the need for learners to think independently",
      "It ensures that all students complete exactly the same task in the same way",
      "It replaces the need for clear learning goals"
    ],
    correct: 0
  },
  {
    q: "What is the purpose of pair work in English lessons?",
    answers: [
      "To increase participation and create more opportunities for meaningful language use",
      "To make sure the teacher can correct every word immediately",
      "To reduce the need for students to listen to one another",
      "To replace all whole-class teaching with silent work"
    ],
    correct: 0
  },
  {
    q: "What is the benefit of group work in language teaching?",
    answers: [
      "It can support collaboration, negotiation of meaning and active participation",
      "It guarantees that every learner speaks equally without support",
      "It works best when learners avoid discussion and divide the work silently",
      "It is mainly useful for testing grammar under pressure"
    ],
    correct: 0
  },
  {
    q: "Why are learning goals useful in English teaching?",
    answers: [
      "They help make expectations, focus and progression clear for learners",
      "They allow teachers to avoid assessment altogether",
      "They replace the need for classroom interaction and practice",
      "They are mainly used to increase the amount of homework"
    ],
    correct: 0
  },

  {
    q: "What is the purpose of formative assessment in English?",
    answers: [
      "To provide information that can guide feedback, teaching and next learning steps",
      "To rank learners at the end of the school year",
      "To replace all communicative activities with tests",
      "To measure only pronunciation and ignore other skills"
    ],
    correct: 0
  },
  {
    q: "Why is context important when teaching vocabulary?",
    answers: [
      "It helps learners understand how words function and what they mean in real situations",
      "It makes it easier to memorize words without ever using them",
      "It allows teachers to avoid explaining meaning altogether",
      "It is mainly useful when students already know every word"
    ],
    correct: 0
  },
  {
    q: "What is the difference between a task and a test?",
    answers: [
      "A task is designed to promote learning and language use, while a test primarily measures performance",
      "A task is always written, while a test is always spoken",
      "A task focuses only on grammar, while a test focuses only on vocabulary",
      "There is no practical difference between the two"
    ],
    correct: 0
  },
  {
    q: "Why is interaction central in language learning?",
    answers: [
      "Because learners develop language through using it with others in meaningful exchanges",
      "Because learners only need grammar explanations to acquire language",
      "Because speaking should replace listening and reading completely",
      "Because interaction mainly helps with classroom discipline"
    ],
    correct: 0
  },
  {
    q: "What is an important feature of good English teaching?",
    answers: [
      "Learners actively use language, receive support, and work with meaning as well as form",
      "Learners mainly complete isolated grammar exercises in silence",
      "The teacher avoids student talk to prevent mistakes",
      "Success is measured only by speed and memorization"
    ],
    correct: 0
  }
],
livsoplysning: [
  {
    q: "Hvad handler livsoplysning primært om?",
    answers: [
      "Menneskets liv, dannelse, værdier og forståelse af sig selv og andre",
      "At elever primært lærer faglige facts og begreber uden personlig refleksion",
      "At træne elever i at gengive faste svar om moral og regler",
      "At fokusere på testbare resultater frem for samtale og eftertanke"
    ],
    correct: 0
  },
  {
    q: "Hvad er dannelse?",
    answers: [
      "En proces hvor mennesket udvikler forståelse, ansvar og forhold til verden og andre",
      "At lære skolens regler udenad og følge dem præcist",
      "At opnå høje faglige resultater i alle skolefag",
      "At kunne gengive kulturelle traditioner korrekt"
    ],
    correct: 0
  },
  {
    q: "Hvad er etik?",
    answers: [
      "Overvejelser om hvad der er rigtigt, forkert, godt og ansvarligt",
      "Faste regler for hvordan man altid skal handle i alle situationer",
      "Personlige følelser uden forbindelse til handlinger",
      "Viden om samfundets love og institutioner"
    ],
    correct: 0
  },
  {
    q: "Hvad er moral?",
    answers: [
      "De handlinger, normer og vurderinger mennesker lever efter i praksis",
      "Teoretiske analyser af begreber uden relation til virkeligheden",
      "En liste over regler som alle mennesker følger ens",
      "Evnen til at undgå konflikter i sociale sammenhænge"
    ],
    correct: 0
  },
  {
    q: "Hvad er værdier?",
    answers: [
      "Det mennesker og fællesskaber tillægger betydning og finder vigtigt",
      "Objektive regler som altid er de samme overalt",
      "Fakta man kan bevise med tal og målinger",
      "Vaner der ikke har betydning for beslutninger"
    ],
    correct: 0
  },

  {
    q: "Hvad er identitet?",
    answers: [
      "Måden et menneske forstår sig selv i relation til erfaringer, fællesskaber og omgivelser",
      "En fast kerne der aldrig påvirkes af andre mennesker",
      "Den rolle man får tildelt i skolen af læreren",
      "Summen af ens faglige resultater og præstationer"
    ],
    correct: 0
  },
  {
    q: "Hvad er fællesskab?",
    answers: [
      "At høre til sammen med andre gennem relationer, deltagelse og gensidighed",
      "At alle i en gruppe mener og gør præcis det samme",
      "En samling mennesker der kun er forbundet af regler",
      "En situation hvor individet skal tilsidesætte alle egne behov"
    ],
    correct: 0
  },
  {
    q: "Hvad er respekt?",
    answers: [
      "At anerkende andres værdighed, grænser og perspektiver",
      "At være enig med andre for at undgå konflikt",
      "At acceptere alt uden at stille spørgsmål",
      "At følge autoriteter uden refleksion"
    ],
    correct: 0
  },
  {
    q: "Hvad er tolerance?",
    answers: [
      "At kunne leve med og acceptere forskelle uden nødvendigvis at være enig",
      "At mene at alle holdninger er lige gode i enhver situation",
      "At undgå kontakt med mennesker man er uenig med",
      "At lade være med at have egne værdier"
    ],
    correct: 0
  },
  {
    q: "Hvad er empati?",
    answers: [
      "Evnen til at leve sig ind i og forstå andres følelser og perspektiver",
      "Evnen til at løse andres problemer for dem",
      "At føle det samme som alle andre i en gruppe",
      "At være enig med andre for at vise omsorg"
    ],
    correct: 0
  },

  {
    q: "Hvad er ansvar?",
    answers: [
      "At tage medansvar for egne handlinger og deres betydning for andre",
      "At gøre det andre forventer uden at tænke selv",
      "At undgå fejl og derfor undlade at handle",
      "At følge regler uden hensyn til situationen"
    ],
    correct: 0
  },
  {
    q: "Hvad er demokrati?",
    answers: [
      "En styre- og samværsform hvor mennesker har medbestemmelse, rettigheder og ansvar",
      "Et system hvor flertallet altid har ret uanset konsekvenser",
      "En måde at undgå uenighed ved at følge faste regler",
      "Et princip hvor alle bestemmer alt hele tiden"
    ],
    correct: 0
  },
  {
    q: "Hvad er medbestemmelse?",
    answers: [
      "At have reel mulighed for at få indflydelse på beslutninger og fælles forhold",
      "At blive informeret om beslutninger andre allerede har taget",
      "At få lov til at vælge mellem løsninger der er fastlagt på forhånd",
      "At bestemme alene uden hensyn til fællesskabet"
    ],
    correct: 0
  },
  {
    q: "Hvad er ligeværd?",
    answers: [
      "At alle mennesker har samme menneskelige værdi, selv om de er forskellige",
      "At alle skal behandles helt ens i enhver situation",
      "At alle skal have de samme meninger og muligheder",
      "At ingen må have særlige behov i et fællesskab"
    ],
    correct: 0
  },
  {
    q: "Hvad er forskellighed?",
    answers: [
      "At mennesker er forskellige i erfaringer, baggrunde, perspektiver og måder at være på",
      "At nogle mennesker har mere værdi end andre i et fællesskab",
      "At alle forskelle bør udlignes for at skabe ro",
      "At forskelle kun handler om kultur og sprog"
    ],
    correct: 0
  },

  {
    q: "Hvad er livsfilosofi?",
    answers: [
      "Tanker og refleksioner over livet, mennesket og det der giver retning og mening",
      "Et sæt regler som alle mennesker bør leve efter",
      "En teori der kun handler om religion og tro",
      "En metode til at analysere sociale konflikter"
    ],
    correct: 0
  },
  {
    q: "Hvad er mening?",
    answers: [
      "Det som opleves som betydningsfuldt og giver retning eller værdi i livet",
      "Det samme som at være glad hele tiden",
      "Noget der kun kan forklares rationelt og objektivt",
      "Et fælles svar som alle mennesker deler"
    ],
    correct: 0
  },
  {
    q: "Hvad er trivsel?",
    answers: [
      "At have det godt psykisk, socialt og ofte også fysisk i sin hverdag",
      "At undgå alle former for modstand og udfordring",
      "At være tilfreds så længe man præsterer godt",
      "At være uden konflikter i alle sammenhænge"
    ],
    correct: 0
  },
  {
    q: "Hvad er livskvalitet?",
    answers: [
      "Hvordan et menneske oplever sit livs værdi, mening og velbefindende",
      "Hvor mange muligheder man har for materiel succes",
      "Et mål for hvor effektivt man når sine mål",
      "Det samme som at føle glæde i øjeblikket"
    ],
    correct: 0
  },
  {
    q: "Hvad er relationer?",
    answers: [
      "Forhold mellem mennesker som formes af kontakt, erfaringer og gensidighed",
      "De regler der bestemmer hvordan mennesker skal opføre sig",
      "Midlertidige møder uden betydning for udvikling",
      "Sociale roller som er fastlagt én gang for alle"
    ],
    correct: 0
  },

  {
    q: "Hvad er konflikter?",
    answers: [
      "Uenigheder eller spændinger mellem mennesker, værdier eller interesser",
      "Situationer hvor nogen opfører sig forkert og skal straffes",
      "Manglende kommunikation uden følelsesmæssig betydning",
      "Problemer der altid bør undgås frem for bearbejdes"
    ],
    correct: 0
  },
  {
    q: "Hvad er konfliktløsning?",
    answers: [
      "At arbejde med uenigheder på en måde der søger forståelse, ansvar og løsning",
      "At få den ene part til at opgive sin mening hurtigst muligt",
      "At finde den skyldige og afslutte sagen",
      "At undgå samtale for at skabe ro"
    ],
    correct: 0
  },
  {
    q: "Hvad er samarbejde?",
    answers: [
      "At arbejde sammen mod noget fælles gennem dialog, ansvar og koordinering",
      "At fordele opgaver så man undgår kontakt med hinanden",
      "At lade den mest kompetente bestemme for alle",
      "At alle gør det samme på samme måde hele tiden"
    ],
    correct: 0
  },
  {
    q: "Hvad er kommunikation?",
    answers: [
      "At skabe og udveksle mening gennem sprog, handlinger og andre udtryk",
      "At fortælle noget til andre uden at tage hensyn til deres forståelse",
      "At bruge ord korrekt uden at tænke på sammenhæng",
      "At overføre information neutralt uden relation eller fortolkning"
    ],
    correct: 0
  },
  {
    q: "Hvad er aktiv lytning?",
    answers: [
      "At lytte opmærksomt og vise, at man forsøger at forstå den anden",
      "At være stille mens man venter på selv at tale",
      "At høre ordene uden at forholde sig til indholdet",
      "At acceptere alt hvad den anden siger uden spørgsmål"
    ],
    correct: 0
  },

  {
    q: "Hvad er normer?",
    answers: [
      "Forventninger til adfærd som udvikles i grupper og fællesskaber",
      "Formelle love vedtaget af staten",
      "Personlige følelser uden social betydning",
      "Universelle regler som er ens i alle kulturer"
    ],
    correct: 0
  },
  {
    q: "Hvad er regler?",
    answers: [
      "Retningslinjer der er formuleret for at styre adfærd i bestemte sammenhænge",
      "Uformelle forventninger som ingen har skrevet ned",
      "Personlige overbevisninger om hvad der er rigtigt",
      "Følelser der opstår i sociale fællesskaber"
    ],
    correct: 0
  },
  {
    q: "Hvad er frihed?",
    answers: [
      "Mulighed for at vælge og handle, ofte i spænding med ansvar og hensyn til andre",
      "At kunne gøre præcis hvad man vil uden begrænsninger",
      "At være uafhængig af alle relationer og fællesskaber",
      "At undgå at tage stilling til vanskelige valg"
    ],
    correct: 0
  },
  {
    q: "Hvad er ansvarlighed?",
    answers: [
      "At handle med omtanke for konsekvenser, relationer og fællesskab",
      "At være pligtopfyldende uden refleksion over situationen",
      "At overtage ansvaret for andres handlinger",
      "At undgå beslutninger for ikke at gøre noget forkert"
    ],
    correct: 0
  },
  {
    q: "Hvad er selvforståelse?",
    answers: [
      "At have indsigt i egne tanker, værdier, reaktioner og måder at være i verden på",
      "At kunne beskrive sine styrker uden at nævne sine svagheder",
      "At have en fast identitet der ikke ændres over tid",
      "At forstå hvordan andre opfatter én uden selvrefleksion"
    ],
    correct: 0
  },

  {
    q: "Hvad er livsvalg?",
    answers: [
      "Valg der former ens liv, retning, relationer og værdier",
      "Beslutninger der kun handler om uddannelse og arbejde",
      "Tilfældige valg uden længerevarende betydning",
      "Valg som andre bør træffe for én"
    ],
    correct: 0
  },
  {
    q: "Hvad er etik i skolen?",
    answers: [
      "Overvejelser om hvordan man behandler hinanden ansvarligt og værdigt i skolens fællesskab",
      "At læreren håndhæver regler uden dialog med eleverne",
      "At elever lærer hvilke handlinger der altid er rigtige",
      "At skolen undgår emner der kan skabe uenighed"
    ],
    correct: 0
  },
  {
    q: "Hvad er digital dannelse?",
    answers: [
      "At kunne bruge digitale medier ansvarligt, kritisk og reflekteret",
      "At kunne bruge flest mulige digitale værktøjer hurtigt",
      "At kende reglerne for it-sikkerhed uden at forstå deres betydning",
      "At foretrække digitale løsninger frem for menneskelig dialog"
    ],
    correct: 0
  },
  {
    q: "Hvad er fælles værdier?",
    answers: [
      "Værdier et fællesskab deler og orienterer sig efter i samvær og beslutninger",
      "Værdier som alle mennesker i et samfund nødvendigvis er enige om",
      "Regler som kun gælder i formelle sammenhænge",
      "Personlige holdninger der ikke påvirker fællesskabet"
    ],
    correct: 0
  },
  {
    q: "Hvad er kulturel forståelse?",
    answers: [
      "At kunne forstå og forholde sig åbent og reflekteret til andre menneskers kulturelle baggrunde og perspektiver",
      "At kende flest mulige fakta om andre lande og traditioner",
      "At acceptere alle kulturelle normer ukritisk",
      "At sammenligne kulturer for at finde den bedste"
    ],
    correct: 0
  },

  {
    q: "Hvad er etik og moral i undervisning?",
    answers: [
      "Spørgsmål om hvordan man bør handle, møde andre og skabe et ansvarligt læringsfællesskab",
      "Et emne der kun handler om elevadfærd og disciplin",
      "Undervisning i regler uden plads til refleksion",
      "Viden om hvordan man undgår konflikter gennem kontrol"
    ],
    correct: 0
  },
  {
    q: "Hvad er livsmod?",
    answers: [
      "At have mod til at leve, handle og møde usikkerhed og udfordringer",
      "At være frygtløs og aldrig tvivle",
      "At kunne træffe hurtige beslutninger uden eftertanke",
      "At være positiv uanset situationen"
    ],
    correct: 0
  },
  {
    q: "Hvad er livsglæde?",
    answers: [
      "En oplevelse af glæde, mening og engagement i livet",
      "En følelse der opstår når man undgår alle problemer",
      "Det samme som at have succes i alt hvad man gør",
      "En stemning der ikke påvirkes af relationer eller værdier"
    ],
    correct: 0
  },
  {
    q: "Hvad er ansvar i fællesskaber?",
    answers: [
      "At bidrage til det fælles og tage hensyn til hvordan ens handlinger påvirker andre",
      "At sørge for at alle følger de samme meninger",
      "At lade ledere eller lærere tage alle beslutninger",
      "At fokusere på egne mål før fællesskabets behov"
    ],
    correct: 0
  },
  {
    q: "Hvad er dialog?",
    answers: [
      "En samtaleform hvor man lytter, undersøger og forholder sig åbent til hinanden",
      "En samtale hvor formålet er at overbevise den anden hurtigst muligt",
      "En udveksling hvor én person forklarer og den anden accepterer",
      "En metode til at undgå uenighed i svære emner"
    ],
    correct: 0
  },

  {
    q: "Hvordan adskiller etik sig fra moral?",
    answers: [
      "Etik handler om refleksion over handlinger og værdier, mens moral handler om praksis og normer i handling",
      "Etik handler om regler, mens moral handler om følelser uden handling",
      "Etik og moral betyder præcis det samme i alle sammenhænge",
      "Etik bruges i skolen, mens moral kun bruges i samfundet"
    ],
    correct: 0
  },
  {
    q: "Hvorfor er fællesskab vigtigt i livsoplysning?",
    answers: [
      "Fordi mennesket udvikler sig i relationer og gennem deltagelse med andre",
      "Fordi fællesskab gør det muligt at undgå individuelle valg",
      "Fordi fællesskabet altid bør vægte højere end individet",
      "Fordi fællesskab primært handler om at skabe enshed"
    ],
    correct: 0
  },
  {
    q: "Hvorfor er empati vigtig i skolen?",
    answers: [
      "Den kan støtte forståelse, relationer og ansvarlig omgang med andre",
      "Den gør det lettere at undgå alle konflikter helt",
      "Den betyder, at man altid skal være enig med andre",
      "Den erstatter behovet for regler og struktur"
    ],
    correct: 0
  },
  {
    q: "Hvorfor er dialog central i arbejdet med livsoplysning?",
    answers: [
      "Fordi forståelse af livsspørgsmål udvikles gennem samtale, perspektiver og refleksion",
      "Fordi dialog gør det lettere at nå frem til ét fælles facitsvar",
      "Fordi elever lærer bedst om værdier uden personlig stillingtagen",
      "Fordi dialog først og fremmest bruges til at skabe enighed"
    ],
    correct: 0
  },
  {
    q: "Hvad er et vigtigt kendetegn ved arbejdet med livsoplysning i skolen?",
    answers: [
      "At der gives plads til refleksion, samtale og undersøgelse af menneskelige spørgsmål",
      "At eleverne lærer faste svar på eksistentielle spørgsmål",
      "At undervisningen undgår personlige og værdimæssige emner",
      "At fokus er på korrekt gengivelse af teorier frem for erfaringer"
    ],
    correct: 0
  },

  {
    q: "Hvad betyder det, at et menneske er dannelsesvæsen?",
    answers: [
      "At mennesket formes og udvikler sig gennem erfaring, refleksion og mødet med andre",
      "At mennesket fødes med en færdig identitet og faste værdier",
      "At udvikling primært handler om faglig præstation",
      "At dannelse kun finder sted i skolen og ikke i livet ellers"
    ],
    correct: 0
  },
  {
    q: "Hvordan hænger frihed og ansvar sammen?",
    answers: [
      "Frihed indebærer valg, og ansvar handler om at forholde sig til konsekvenserne af dem",
      "Frihed betyder at ansvar bliver unødvendigt",
      "Ansvar begrænser frihed så meget, at de to modsiger hinanden",
      "Frihed og ansvar handler om to helt adskilte områder"
    ],
    correct: 0
  },
  {
    q: "Hvorfor er selvforståelse vigtig?",
    answers: [
      "Den kan hjælpe mennesker til at handle mere bevidst og indgå mere reflekteret i relationer",
      "Den gør det muligt at undgå påvirkning fra andre helt",
      "Den handler mest om at kunne beskrive sine styrker præcist",
      "Den er kun vigtig i perioder med personlige kriser"
    ],
    correct: 0
  },
  {
    q: "Hvad kan konflikter bidrage med, hvis de håndteres godt?",
    answers: [
      "De kan åbne for læring, forståelse og udvikling i relationer og fællesskaber",
      "De viser først og fremmest hvem der har mest ret",
      "De bør afsluttes så hurtigt, at parterne ikke når at tale sammen",
      "De har sjældent nogen positiv betydning"
    ],
    correct: 0
  },
  {
    q: "Hvad er et vigtigt mål med livsoplysning i undervisningen?",
    answers: [
      "At støtte elever i at reflektere over liv, værdier, ansvar og det at være menneske",
      "At give elever færdige svar på hvordan man bør leve",
      "At træne elever i at gengive etiske begreber uden eksempler",
      "At holde personlige og eksistentielle spørgsmål adskilt fra skolen"
    ],
    correct: 0
  }
],
paedagogisk_psykologi: [
  {
    q: "Hvad handler pædagogisk psykologi om?",
    answers: [
      "Hvordan mennesker lærer, udvikler sig og trives i pædagogiske sammenhænge",
      "Hvordan tests kan bruges til at rangordne elever mest præcist",
      "Hvordan undervisning bør standardiseres uden hensyn til elever",
      "Hvordan adfærd kan styres uden fokus på relationer og læring"
    ],
    correct: 0
  },
  {
    q: "Hvad er motivation?",
    answers: [
      "Den drivkraft der får en person til at engagere sig i læring og handling",
      "Evnen til at gennemføre opgaver hurtigt uden hjælp",
      "Et udtryk for hvor højt et fagligt niveau en elev har",
      "En metode læreren bruger til at kontrollere elevadfærd"
    ],
    correct: 0
  },
  {
    q: "Hvad er indre motivation?",
    answers: [
      "Motivation der udspringer af interesse, mening eller lyst i selve aktiviteten",
      "Motivation der opstår når man får belønning eller ros udefra",
      "Motivation der kun ses hos fagligt stærke elever",
      "Motivation der afhænger af faste regler og kontrol"
    ],
    correct: 0
  },
  {
    q: "Hvad er ydre motivation?",
    answers: [
      "Motivation der påvirkes af belønning, krav, ros eller andre ydre forhold",
      "Motivation der kun handler om personlig nysgerrighed",
      "Motivation der opstår når eleven glemmer målet med aktiviteten",
      "Motivation der altid fører til dybere læring end indre motivation"
    ],
    correct: 0
  },
  {
    q: "Hvad er læring?",
    answers: [
      "En relativt varig ændring i viden, forståelse, færdigheder eller handlemåder",
      "At kunne huske information kortvarigt til en prøve",
      "At gentage en aktivitet mange gange uden refleksion",
      "At vise korrekt adfærd i undervisningen"
    ],
    correct: 0
  },

  {
    q: "Hvad er trivsel?",
    answers: [
      "At have det godt og kunne fungere psykisk, socialt og ofte fagligt i sin hverdag",
      "At undgå alle former for modstand, krav og udfordringer",
      "At være tilfreds så længe man får gode karakterer",
      "At være rolig og stille i undervisningen"
    ],
    correct: 0
  },
  {
    q: "Hvad er inklusion?",
    answers: [
      "At elever oplever at høre til og kunne deltage meningsfuldt i fællesskabet",
      "At alle elever undervises på præcis samme måde",
      "At elever med vanskeligheder placeres tættere på læreren",
      "At fællesskabet fungerer bedst når forskelle tones ned"
    ],
    correct: 0
  },
  {
    q: "Hvad er eksklusion?",
    answers: [
      "At blive holdt udenfor eller have begrænset mulighed for deltagelse i fællesskabet",
      "At få særlige udfordringer fordi man er fagligt stærk",
      "At arbejde individuelt med egne mål i en periode",
      "At modtage støtte fra en lærer eller pædagog"
    ],
    correct: 0
  },
  {
    q: "Hvad er differentiering?",
    answers: [
      "At tilpasse undervisning, støtte og aktiviteter til elevers forskellige forudsætninger",
      "At dele elever fast op efter niveau og give dem samme type opgaver",
      "At give alle elever identiske opgaver for at sikre fairness",
      "At lade de hurtigste elever arbejde uden lærerens involvering"
    ],
    correct: 0
  },
  {
    q: "Hvad er zone for nærmeste udvikling?",
    answers: [
      "Det område hvor eleven kan klare mere med støtte end alene",
      "Det område hvor eleven kun arbejder med det, der allerede mestres sikkert",
      "Det område hvor opgaver er så svære, at de skaber maksimal udfordring",
      "Det område hvor læreren vurderer elevens endelige niveau"
    ],
    correct: 0
  },

  {
    q: "Hvem står bag zonen for nærmeste udvikling?",
    answers: [
      "Vygotsky",
      "Piaget",
      "Freud",
      "Skinner"
    ],
    correct: 0
  },
  {
    q: "Hvad er stilladsering?",
    answers: [
      "Midlertidig støtte der hjælper eleven til gradvist at kunne mere selv",
      "En metode hvor læreren gør opgaven færdig for eleven",
      "Et system til at kontrollere elevers fejl undervejs",
      "En fast rækkefølge af aktiviteter som alle skal følge"
    ],
    correct: 0
  },
  {
    q: "Hvad er behaviorisme?",
    answers: [
      "En læringsforståelse der lægger vægt på stimuli, respons og forstærkning",
      "En teori om at læring primært sker gennem indre refleksion og forståelse",
      "En tilgang hvor relationer og følelser altid er vigtigst",
      "En model der forklarer læring som kulturel deltagelse alene"
    ],
    correct: 0
  },
  {
    q: "Hvad er kognitiv læring?",
    answers: [
      "Læring forstået som mentale processer som tænkning, forståelse og hukommelse",
      "Læring der kun handler om synlig adfærd i undervisningen",
      "Læring der udelukkende opstår i sociale relationer",
      "Læring der først og fremmest afhænger af belønning og straf"
    ],
    correct: 0
  },
  {
    q: "Hvad er social læring?",
    answers: [
      "Læring der sker gennem samspil, observation og deltagelse sammen med andre",
      "Læring der foregår bedst når eleven arbejder helt alene",
      "Læring der kun handler om at kopiere voksnes adfærd",
      "Læring der primært knytter sig til sociale regler frem for fagligt indhold"
    ],
    correct: 0
  },

  {
    q: "Hvad er selvopfattelse?",
    answers: [
      "Hvordan en person forstår og vurderer sig selv",
      "Hvordan læreren beskriver elevens faglige niveau",
      "Hvordan andre i klassen opfatter en elev",
      "Hvordan en elev reagerer i konfliktsituationer"
    ],
    correct: 0
  },
  {
    q: "Hvad er selvtillid?",
    answers: [
      "Troen på egne evner til at klare bestemte opgaver eller situationer",
      "Følelsen af at have værdi som menneske uanset præstation",
      "Evnen til at tage styring i en gruppe uden hjælp",
      "Et tegn på at eleven altid præsterer godt fagligt"
    ],
    correct: 0
  },
  {
    q: "Hvad er selvværd?",
    answers: [
      "Den værdi og accept et menneske tillægger sig selv",
      "Troen på at kunne løse skoleopgaver uden fejl",
      "Elevens sociale status i klassen",
      "Lærerens vurdering af elevens potentiale"
    ],
    correct: 0
  },
  {
    q: "Hvad er relationer?",
    answers: [
      "Forhold mellem mennesker som påvirker trivsel, læring og udvikling",
      "De regler der gælder for social adfærd i skolen",
      "Midlertidige møder uden betydning for læring",
      "Elevens placering i klassens struktur"
    ],
    correct: 0
  },
  {
    q: "Hvad er relationskompetence?",
    answers: [
      "Evnen til at skabe, vedligeholde og forstå betydningsfulde relationer",
      "Evnen til at løse alle konflikter hurtigt og effektivt",
      "Evnen til at få elever til at adlyde uden modstand",
      "Evnen til at være personlig og privat med elever"
    ],
    correct: 0
  },

  {
    q: "Hvad er klasseledelse?",
    answers: [
      "At skabe rammer, struktur og relationer der understøtter læring og deltagelse",
      "At sikre ro gennem faste sanktioner og konsekvenser alene",
      "At læreren styrer al aktivitet uden elevinddragelse",
      "At fokusere på disciplin frem for læringsmiljø"
    ],
    correct: 0
  },
  {
    q: "Hvad er læringsmiljø?",
    answers: [
      "De sociale, fysiske og pædagogiske rammer hvor læring finder sted",
      "Det materiale eleverne bruger i et bestemt fag",
      "Den stemning der opstår når alle arbejder stille",
      "Det faglige niveau i en klasse målt ved test"
    ],
    correct: 0
  },
  {
    q: "Hvad er kognition?",
    answers: [
      "Mentale processer som tænkning, perception, hukommelse og problemløsning",
      "De følelser der styrer sociale relationer i klassen",
      "Den adfærd læreren kan observere direkte",
      "De strategier elever bruger til at undgå vanskelige opgaver"
    ],
    correct: 0
  },
  {
    q: "Hvad er hukommelse?",
    answers: [
      "Evnen til at lagre, fastholde og hente information",
      "Evnen til at forstå andres perspektiver i en samtale",
      "Evnen til at holde fokus i længere tid",
      "Evnen til at tilpasse sig sociale regler i klassen"
    ],
    correct: 0
  },
  {
    q: "Hvad er opmærksomhed?",
    answers: [
      "Evnen til at rette fokus mod noget bestemt og sortere andet fra",
      "Evnen til at huske information over lang tid",
      "Evnen til at arbejde uden pauser i flere timer",
      "Evnen til at reagere hurtigt på lærerens spørgsmål"
    ],
    correct: 0
  },

  {
    q: "Hvad er koncentration?",
    answers: [
      "Evnen til at fastholde fokus over tid på en opgave eller aktivitet",
      "Evnen til at lære nyt uden støtte fra andre",
      "Evnen til at forstå komplekse tekster ved første gennemlæsning",
      "Evnen til at være stille i undervisningen"
    ],
    correct: 0
  },
  {
    q: "Hvad er emotioner?",
    answers: [
      "Følelser og følelsesmæssige reaktioner som påvirker tænkning og handling",
      "Kognitive strategier til at løse problemer hurtigt",
      "Biologiske processer uden betydning for læring",
      "Midlertidige stemninger der ikke påvirker relationer"
    ],
    correct: 0
  },
  {
    q: "Hvad er empati?",
    answers: [
      "Evnen til at forstå og forholde sig til andres følelser og perspektiver",
      "Evnen til at tage ansvar for andres problemer",
      "Evnen til at undgå konflikter ved altid at være enig",
      "Evnen til at mærke de samme følelser som andre i enhver situation"
    ],
    correct: 0
  },
  {
    q: "Hvad er stress?",
    answers: [
      "En belastningstilstand der kan opstå når krav opleves som større end ressourcer",
      "En kortvarig koncentrationstilstand før en opgave",
      "En naturlig form for motivation der altid fremmer læring",
      "Et tegn på at eleven mangler vilje og disciplin"
    ],
    correct: 0
  },
  {
    q: "Hvad er mestring?",
    answers: [
      "At håndtere udfordringer og opleve, at man kan påvirke situationer og læring",
      "At gennemføre alle opgaver uden fejl eller hjælp",
      "At undgå vanskelige situationer for at beskytte sit selvværd",
      "At kunne arbejde hurtigere end andre elever"
    ],
    correct: 0
  },

  {
    q: "Hvad er feedback?",
    answers: [
      "Respons der hjælper eleven til at forstå sin læring og næste skridt",
      "En vurdering der afslutter læringsprocessen med en karakter",
      "En påpegning af fejl uden forslag til udvikling",
      "En opsummering af hvad læreren har undervist i"
    ],
    correct: 0
  },
  {
    q: "Hvad er evaluering?",
    answers: [
      "At undersøge og vurdere læring, trivsel eller undervisningens udbytte",
      "At sammenligne elever for at finde klassens stærkeste",
      "At kontrollere om regler bliver fulgt i timerne",
      "At rette skriftlige fejl i elevopgaver"
    ],
    correct: 0
  },
  {
    q: "Hvad er læringsstrategier?",
    answers: [
      "Måder elever bevidst kan arbejde med at forstå, huske og anvende nyt stof",
      "Metoder læreren bruger til at styre klassen uden elevinddragelse",
      "Faste regler som alle elever bør følge uanset opgave",
      "Rutiner der bruges til at afslutte undervisningen hurtigt"
    ],
    correct: 0
  },
  {
    q: "Hvad er samarbejde?",
    answers: [
      "At arbejde sammen og koordinere indsats mod et fælles mål",
      "At dele opgaver så man undgår kontakt med hinanden",
      "At lade den stærkeste elev løse opgaven for gruppen",
      "At finde en løsning uden at skulle begrunde den"
    ],
    correct: 0
  },
  {
    q: "Hvad er konflikter?",
    answers: [
      "Uenigheder eller spændinger mellem mennesker, interesser eller perspektiver",
      "Situationer hvor én elev bevidst bryder reglerne",
      "Enhver form for uro i klassen uanset årsag",
      "Følelser der bør fjernes før læring kan finde sted"
    ],
    correct: 0
  },

  {
    q: "Hvad er konfliktløsning?",
    answers: [
      "At arbejde med uenigheder gennem forståelse, dialog og ansvarlig handling",
      "At finde den skyldige og afslutte konflikten hurtigt",
      "At få parterne til at undgå hinanden i fremtiden",
      "At lade læreren afgøre hvem der har ret uden samtale"
    ],
    correct: 0
  },
  {
    q: "Hvad er udvikling?",
    answers: [
      "Forandring over tid i menneskets måde at tænke, føle, handle og lære på",
      "At blive ældre og mere moden uden påvirkning fra omgivelser",
      "At opnå bedre resultater i skolen år for år",
      "At lære flere strategier til at klare tests"
    ],
    correct: 0
  },
  {
    q: "Hvad er social udvikling?",
    answers: [
      "Udvikling i måden man indgår i relationer, fællesskaber og sociale sammenhænge",
      "Udvikling i evnen til at styre sine følelser alene",
      "Udvikling i elevens faglige præstationer i gruppesituationer",
      "Udvikling i forståelsen af regler og sanktioner"
    ],
    correct: 0
  },
  {
    q: "Hvad er kognitiv udvikling?",
    answers: [
      "Udvikling i tænkning, forståelse, problemløsning og andre mentale processer",
      "Udvikling i sociale relationer og følelsesmæssig tilknytning",
      "Udvikling i elevens motivation gennem ydre belønning",
      "Udvikling i fysisk koordination og motorik"
    ],
    correct: 0
  },
  {
    q: "Hvad er læringsvanskeligheder?",
    answers: [
      "Udfordringer der kan gøre læring vanskeligere og kræve særlig støtte eller tilpasning",
      "Manglende lyst til at arbejde i timerne",
      "Et midlertidigt problem der altid skyldes lav motivation",
      "Tegn på at eleven ikke kan udvikle sig fagligt"
    ],
    correct: 0
  },

  {
    q: "Hvordan hænger motivation og læring sammen?",
    answers: [
      "Motivation påvirker engagement, vedholdenhed og villighed til at arbejde med læring",
      "Motivation har kun betydning i kreative fag og ikke i boglige fag",
      "Læring afhænger primært af intelligens og ikke af motivation",
      "Motivation er kun vigtig hvis eleven arbejder alene"
    ],
    correct: 0
  },
  {
    q: "Hvorfor er relationer vigtige i skolen?",
    answers: [
      "Fordi relationer påvirker trivsel, tryghed, deltagelse og muligheder for læring",
      "Fordi gode relationer gør klasseledelse unødvendig",
      "Fordi relationer først og fremmest handler om at undgå konflikter",
      "Fordi læring sker bedst når læreren bliver elevens ven"
    ],
    correct: 0
  },
  {
    q: "Hvorfor er stilladsering vigtig?",
    answers: [
      "Den hjælper elever med at klare opgaver de endnu ikke kan løse helt selv",
      "Den sikrer at læreren kan styre alle elevsvar præcist",
      "Den gør det muligt at undgå differentiering i undervisningen",
      "Den erstatter behovet for elevaktivitet og refleksion"
    ],
    correct: 0
  },
  {
    q: "Hvad er forskellen på selvtillid og selvværd?",
    answers: [
      "Selvtillid handler om tro på egne evner, mens selvværd handler om oplevelsen af egen værdi",
      "Selvtillid handler om sociale relationer, mens selvværd handler om faglige resultater",
      "Selvtillid og selvværd betyder det samme i pædagogisk psykologi",
      "Selvtillid er medfødt, mens selvværd kun udvikles i skolen"
    ],
    correct: 0
  },
  {
    q: "Hvad er et vigtigt kendetegn ved et godt læringsmiljø?",
    answers: [
      "At det understøtter tryghed, deltagelse, struktur og mulighed for faglig udvikling",
      "At der er mest mulig ro og mindst mulig elevsamtale",
      "At alle elever arbejder med præcis samme opgaver og tempo",
      "At læreren har fuld kontrol over alle beslutninger i undervisningen"
    ],
    correct: 0
  },

  {
    q: "Hvorfor er opmærksomhed vigtig for læring?",
    answers: [
      "Fordi læring kræver at eleven kan rette og fastholde fokus på relevant indhold",
      "Fordi opmærksomhed automatisk fører til dyb forståelse",
      "Fordi opmærksomhed kun handler om at sidde stille i undervisningen",
      "Fordi elever ikke behøver støtte hvis de er opmærksomme"
    ],
    correct: 0
  },
  {
    q: "Hvordan kan feedback støtte læring?",
    answers: [
      "Ved at gøre eleven klogere på hvad der fungerer, hvad der skal udvikles, og hvordan man kan komme videre",
      "Ved at vise hvilke fejl der er lavet uden yderligere forklaring",
      "Ved at afslutte en opgave med en karakter og et kort resumé",
      "Ved at sammenligne elevens præstation med de andres"
    ],
    correct: 0
  },
  {
    q: "Hvad betyder det at arbejde inkluderende?",
    answers: [
      "At skabe betingelser for at forskellige elever kan deltage og opleve sig som en del af fællesskabet",
      "At gøre undervisningen ens for alle så forskelle ikke bliver synlige",
      "At sænke kravene for alle elever i klassen",
      "At flytte elever med behov for støtte ud af fællesskabet midlertidigt"
    ],
    correct: 0
  },
  {
    q: "Hvad kan stress gøre ved læring og trivsel?",
    answers: [
      "Det kan belaste opmærksomhed, hukommelse, motivation og følelsen af at kunne mestre",
      "Det kan styrke koncentration og læring i alle situationer",
      "Det påvirker kun elevernes sociale liv og ikke deres faglige arbejde",
      "Det viser først og fremmest at eleven mangler ansvarlighed"
    ],
    correct: 0
  },
  {
    q: "Hvad er et vigtigt mål i pædagogisk psykologi?",
    answers: [
      "At forstå og støtte menneskers læring, udvikling og trivsel i pædagogiske sammenhænge",
      "At finde én metode der virker ens for alle elever",
      "At forklare læring ud fra testresultater alene",
      "At fokusere på kontrol frem for relationer og deltagelse"
    ],
    correct: 0
  }
],
pad: [
  {
    q: "Hvad handler didaktik om?",
    answers: [
      "Planlægning, gennemførelse og refleksion over undervisning og læring",
      "At sikre ro i klassen gennem faste regler og konsekvenser",
      "At vælge læremidler uden at koble dem til mål og elever",
      "At gennemføre undervisning så ensartet som muligt i alle klasser"
    ],
    correct: 0
  },
  {
    q: "Hvad er pædagogik?",
    answers: [
      "Læren om opdragelse, undervisning, dannelse og menneskelig udvikling",
      "En metode til at styre elevadfærd mest muligt effektivt",
      "En samling regler for hvordan elever bør opføre sig i skolen",
      "Et fagområde der kun handler om undervisningsteknik"
    ],
    correct: 0
  },
  {
    q: "Hvad er et læringsmål?",
    answers: [
      "En tydelig beskrivelse af hvad eleverne skal lære eller kunne",
      "En oversigt over hvilke aktiviteter læreren vil gennemføre",
      "Et mål for hvor hurtigt eleverne skal arbejde i timen",
      "En vurdering af hvad eleverne allerede mestrer"
    ],
    correct: 0
  },
  {
    q: "Hvad er evaluering?",
    answers: [
      "At undersøge og vurdere læring, undervisning og elevers udbytte",
      "At afslutte et forløb med en karakter uden videre opfølgning",
      "At kontrollere om eleverne har lavet deres lektier",
      "At sammenligne elevernes resultater for at rangordne dem"
    ],
    correct: 0
  },
  {
    q: "Hvad er formativ evaluering?",
    answers: [
      "Evaluering undervejs som bruges til at støtte læring og justere undervisning",
      "Evaluering der bruges til at afslutte et forløb med en samlet bedømmelse",
      "Evaluering hvor læreren vurderer eleven uden elevens deltagelse",
      "Evaluering der primært har til formål at dokumentere fejl"
    ],
    correct: 0
  },

  {
    q: "Hvad er summativ evaluering?",
    answers: [
      "Evaluering der bruges til at vurdere læring ved afslutningen af et forløb",
      "Evaluering der løbende bruges til at justere undervisning og støtte elevens udvikling",
      "Evaluering der fokuserer på elevens trivsel frem for faglige mål",
      "Evaluering der foregår gennem dialog uden nogen form for vurdering"
    ],
    correct: 0
  },
  {
    q: "Hvad er feedback?",
    answers: [
      "Tilbagemelding der hjælper eleven videre i sin læringsproces",
      "En afsluttende kommentar der kun fortæller om opgaven er god eller dårlig",
      "En gennemgang af fejl uden forslag til forbedring",
      "Et kort resumé af hvad læreren har undervist i"
    ],
    correct: 0
  },
  {
    q: "Hvad er differentiering?",
    answers: [
      "At tilpasse undervisning, støtte og aktiviteter til elevers forskellige forudsætninger",
      "At give alle elever samme opgave for at sikre ligebehandling",
      "At dele eleverne fast op efter niveau og undervise dem adskilt",
      "At lade de stærkeste elever arbejde helt uden lærerens støtte"
    ],
    correct: 0
  },
  {
    q: "Hvad er klasseledelse?",
    answers: [
      "At skabe struktur, relationer og rammer der understøtter læring og deltagelse",
      "At håndhæve regler konsekvent så eleverne er stille hele timen",
      "At styre undervisningen uden elevinddragelse for at undgå uro",
      "At fokusere på disciplin frem for indhold og læring"
    ],
    correct: 0
  },
  {
    q: "Hvad er et læringsmiljø?",
    answers: [
      "De sociale, fysiske og didaktiske rammer hvor læring finder sted",
      "Det materiale læreren har valgt til et bestemt emne",
      "Det niveau eleverne skal nå i slutningen af året",
      "Den del af undervisningen hvor eleverne arbejder individuelt"
    ],
    correct: 0
  },

  {
    q: "Hvad er elevdeltagelse?",
    answers: [
      "At elever er aktivt involveret i undervisning, læring og fællesskab",
      "At elever møder op og følger lærerens instruktioner uden spørgsmål",
      "At elever arbejder alene med individuelle opgaver det meste af tiden",
      "At elever svarer korrekt når læreren spørger"
    ],
    correct: 0
  },
  {
    q: "Hvad er stilladsering?",
    answers: [
      "Midlertidig støtte der hjælper eleven til gradvist at kunne mere selv",
      "En metode hvor læreren overtager opgaven for at sikre succes",
      "Et system med faste trin som alle elever skal følge ens",
      "En måde at forenkle indhold så eleverne ikke møder udfordringer"
    ],
    correct: 0
  },
  {
    q: "Hvad er motivation?",
    answers: [
      "Den drivkraft der får elever til at engagere sig i læring og deltagelse",
      "Et tegn på at eleven kan arbejde hurtigt og selvstændigt",
      "En metode læreren bruger til at sikre ro og fokus",
      "Elevens generelle holdning til skolen uanset aktivitet"
    ],
    correct: 0
  },
  {
    q: "Hvad er relationskompetence?",
    answers: [
      "Evnen til at skabe, forstå og vedligeholde betydningsfulde relationer i undervisningen",
      "Evnen til at undgå alle konflikter med elever og forældre",
      "Evnen til at være personlig og privat med eleverne",
      "Evnen til at få eleverne til at adlyde uden modstand"
    ],
    correct: 0
  },
  {
    q: "Hvad er inklusion?",
    answers: [
      "At skabe mulighed for at forskellige elever kan deltage meningsfuldt i fællesskabet",
      "At undervise alle elever på præcis samme måde",
      "At placere elever med særlige behov i samme lokale som resten af klassen",
      "At sænke kravene så alle kan følge med uden støtte"
    ],
    correct: 0
  },

  {
    q: "Hvad er undervisningsdifferentiering?",
    answers: [
      "At tilpasse indhold, støtte, tempo og arbejdsformer til elevers forskellige behov",
      "At lave forskellige opgaver til forskellige elever uden fælles mål",
      "At lade eleverne selv vælge sværhedsgrad uden vejledning",
      "At opdele eleverne permanent i stærke og svage grupper"
    ],
    correct: 0
  },
  {
    q: "Hvad er et didaktisk valg?",
    answers: [
      "Et begrundet valg om mål, indhold, metoder eller evaluering i undervisningen",
      "En hurtig beslutning læreren tager undervejs uden faglig overvejelse",
      "Et valg af lærebog som automatisk bestemmer hele undervisningen",
      "En regel for hvordan alle timer bør gennemføres"
    ],
    correct: 0
  },
  {
    q: "Hvad er læringsaktiviteter?",
    answers: [
      "De handlinger eleverne deltager i for at udvikle forståelse og færdigheder",
      "De opgaver læreren bruger for at udfylde undervisningstiden",
      "De aktiviteter der primært har til formål at skabe ro i klassen",
      "De ting elever gør efter timen uden sammenhæng med målene"
    ],
    correct: 0
  },
  {
    q: "Hvad er progression?",
    answers: [
      "At læring og undervisning udvikler sig gradvist mod større kompleksitet og forståelse",
      "At opgaverne bliver sværere uge for uge uanset elevens forudsætninger",
      "At eleverne arbejder hurtigere i takt med at de bliver ældre",
      "At undervisningen følger lærebogens rækkefølge fra start til slut"
    ],
    correct: 0
  },
  {
    q: "Hvad er refleksion?",
    answers: [
      "At tænke undersøgende over praksis, erfaringer og valg for at forstå og udvikle dem",
      "At genfortælle hvad der skete i undervisningen uden vurdering",
      "At forklare hvorfor en aktivitet var god fordi eleverne var stille",
      "At finde fejl hos eleverne efter et forløb"
    ],
    correct: 0
  },

  {
    q: "Hvad er en undervisningsplan?",
    answers: [
      "En plan der beskriver mål, indhold, aktiviteter og evaluering i et forløb eller en lektion",
      "En liste over materialer læreren skal bruge i timen",
      "En oversigt over hvilke elever der skal have støtte",
      "Et dokument der kun bruges ved observation af undervisning"
    ],
    correct: 0
  },
  {
    q: "Hvad er målstyret undervisning?",
    answers: [
      "Undervisning hvor læringsmål er tydelige og styrer valg af indhold og aktiviteter",
      "Undervisning hvor alle mål fastsættes af lærebogen alene",
      "Undervisning hvor eleverne arbejder uden at kende formålet",
      "Undervisning der kun fokuserer på afsluttende testresultater"
    ],
    correct: 0
  },
  {
    q: "Hvad er tegn på læring?",
    answers: [
      "Observerbare udtryk for at elever udvikler forståelse, færdigheder eller strategier",
      "Et facit som viser at en elev har svaret korrekt",
      "De aktiviteter elever deltager i i løbet af timen",
      "Lærerens forventninger til hvad eleven burde kunne"
    ],
    correct: 0
  },
  {
    q: "Hvad er elevfeedback?",
    answers: [
      "Feedback rettet mod eleven med fokus på læring, udvikling og næste skridt",
      "Ros der gives til hele klassen når timen er gået godt",
      "En forklaring på hvorfor eleven fik en bestemt karakter",
      "En liste over fejl eleven skal rette uden yderligere støtte"
    ],
    correct: 0
  },
  {
    q: "Hvad er lærerstyring?",
    answers: [
      "Når læreren i høj grad rammesætter og styrer indhold, aktiviteter og processer",
      "Når læreren bestemmer alt uden hensyn til elevernes respons og behov",
      "Når eleverne får ansvar for egen læring uden nogen form for vejledning",
      "Når undervisningen udelukkende foregår som tavlegennemgang"
    ],
    correct: 0
  },

  {
    q: "Hvad er elevstyret undervisning?",
    answers: [
      "Undervisning hvor elever får indflydelse på processer, valg eller arbejdsformer inden for tydelige rammer",
      "Undervisning hvor læreren trækker sig helt og eleverne selv bestemmer alt",
      "Undervisning der kun foregår som gruppearbejde uden mål",
      "Undervisning hvor elever arbejder alene uden lærerfeedback"
    ],
    correct: 0
  },
  {
    q: "Hvad er variation i undervisning?",
    answers: [
      "At bruge forskellige metoder, aktiviteter og tilgange for at støtte læring og engagement",
      "At skifte aktivitet ofte for at undgå at elever mister fokus",
      "At bruge så mange materialer som muligt i hver lektion",
      "At ændre mål og indhold løbende for at gøre undervisningen spændende"
    ],
    correct: 0
  },
  {
    q: "Hvad er samarbejde?",
    answers: [
      "At arbejde sammen om fælles mål gennem dialog, koordinering og ansvar",
      "At dele arbejdet op så man undgår at forstyrre hinanden",
      "At lade den stærkeste elev tage styringen og løse opgaven",
      "At en gruppe afleverer samme svar uden at drøfte indholdet"
    ],
    correct: 0
  },
  {
    q: "Hvad er klassekultur?",
    answers: [
      "De normer, relationer og måder at være sammen på som præger klassen",
      "De regler læreren har skrevet ned for klassen",
      "Det faglige niveau eleverne har i et bestemt fag",
      "De traditioner skolen har for prøver og evaluering"
    ],
    correct: 0
  },
  {
    q: "Hvad er tydelig undervisning?",
    answers: [
      "Undervisning med klare mål, struktur, forventninger og sammenhæng mellem aktiviteter",
      "Undervisning hvor læreren forklarer meget og længe fra tavlen",
      "Undervisning hvor eleverne altid ved præcis hvilket svar der forventes",
      "Undervisning hvor alle instruktioner gives ens uden hensyn til eleverne"
    ],
    correct: 0
  },

  {
    q: "Hvad er læringsmålstyret undervisning?",
    answers: [
      "Undervisning hvor mål for læring er synlige og bruges aktivt i planlægning og evaluering",
      "Undervisning hvor elever kun vurderes ud fra om de når målene til sidst",
      "Undervisning hvor aktiviteter er vigtigere end elevernes læringsudbytte",
      "Undervisning hvor læreren følger målene uden at tilpasse sig elevgruppen"
    ],
    correct: 0
  },
  {
    q: "Hvad er didaktisk refleksion?",
    answers: [
      "Overvejelse over undervisningens valg, begrundelser og konsekvenser for læring",
      "At tænke tilbage på timen og vurdere om der var nok aktiviteter",
      "At forklare hvorfor man valgte en metode man plejer at bruge",
      "At beskrive elevadfærd uden at koble det til undervisning"
    ],
    correct: 0
  },
  {
    q: "Hvad er elevinddragelse?",
    answers: [
      "At elever får mulighed for indflydelse, medansvar og aktiv deltagelse i undervisningen",
      "At elever bliver spurgt om deres mening efter undervisningen er afsluttet",
      "At elever vælger aktiviteter uden forbindelse til mål og indhold",
      "At læreren lader eleverne arbejde alene for at skabe selvstændighed"
    ],
    correct: 0
  },
  {
    q: "Hvad er læringsstrategier?",
    answers: [
      "Måder elever kan arbejde bevidst med at forstå, huske og anvende stof",
      "Metoder læreren bruger til at få eleverne til at række hånden op",
      "Rutiner som bruges i starten og slutningen af hver lektion",
      "Faste regler for hvordan elever skal løse alle opgaver"
    ],
    correct: 0
  },
  {
    q: "Hvad er læring gennem dialog?",
    answers: [
      "At forståelse udvikles gennem samtale, spørgsmål, respons og fælles undersøgelse",
      "At læreren forklarer indholdet mundtligt så eleverne slipper for at arbejde selv",
      "At eleverne taler sammen om emnet uden behov for mål og struktur",
      "At læring bedst sker når alle får lige meget taletid uanset indhold"
    ],
    correct: 0
  },

  {
    q: "Hvad er en undervisningsmetode?",
    answers: [
      "En måde at organisere og gennemføre undervisning på i forhold til mål og indhold",
      "Et bestemt materiale der bruges i undervisningen",
      "En fast fremgangsmåde der altid bør bruges i et fag",
      "En teknik læreren anvender for at holde orden i klassen"
    ],
    correct: 0
  },
  {
    q: "Hvad er struktur i undervisning?",
    answers: [
      "Den måde undervisningen organiseres på, så mål, indhold og aktiviteter hænger sammen",
      "At læreren bestemmer rækkefølgen af alt uden at justere undervejs",
      "At eleverne følger den samme arbejdsform i hele forløbet",
      "At alle lektioner er bygget ens op uanset emne og elevgruppe"
    ],
    correct: 0
  },
  {
    q: "Hvad er tydelige mål?",
    answers: [
      "Klare og forståelige mål som giver eleverne retning for deres læring",
      "Mål der er formuleret så præcist, at eleverne kun kan arbejde på én måde",
      "Mål der primært bruges af læreren i planlægningen og ikke deles med eleverne",
      "Mål som kun handler om hvad eleverne skal nå til en test"
    ],
    correct: 0
  },
  {
    q: "Hvad er læring gennem praksis?",
    answers: [
      "At elever udvikler forståelse ved at handle, afprøve og erfare i meningsfulde sammenhænge",
      "At elever lærer bedst når læreren først viser den korrekte løsning",
      "At læring først opstår når teori erstattes helt af aktivitet",
      "At elever primært lærer ved at efterligne en model uden refleksion"
    ],
    correct: 0
  },
  {
    q: "Hvad er aktiv undervisning?",
    answers: [
      "Undervisning hvor elever deltager, undersøger, taler og arbejder med stoffet",
      "Undervisning hvor der er mange aktiviteter uanset om de støtter læring",
      "Undervisning hvor læreren bevæger sig meget rundt i klassen",
      "Undervisning hvor eleverne er fysisk aktive i alle fag"
    ],
    correct: 0
  },

  {
    q: "Hvad er undervisningens formål?",
    answers: [
      "At skabe betingelser for læring, udvikling, dannelse og deltagelse",
      "At sikre at eleverne kommer gennem pensum hurtigst muligt",
      "At lære elever at følge regler og instruktioner uden modstand",
      "At dokumentere hvad eleverne kan ved afslutningen af et forløb"
    ],
    correct: 0
  },
  {
    q: "Hvad er læring gennem samarbejde?",
    answers: [
      "At elever udvikler forståelse gennem fælles arbejde, dialog og gensidig støtte",
      "At elever fordeler arbejdet så hver især løser sin del alene",
      "At gruppen når frem til ét fælles svar uden at drøfte processen",
      "At eleverne lærer mest når de stærkeste tager ledelsen"
    ],
    correct: 0
  },
  {
    q: "Hvad er elevens rolle?",
    answers: [
      "At være en aktiv deltager i læring, refleksion og fællesskab",
      "At modtage undervisning og gengive det læreren siger",
      "At arbejde selvstændigt uden behov for støtte eller dialog",
      "At følge instruktioner præcist uden at stille spørgsmål"
    ],
    correct: 0
  },
  {
    q: "Hvad er lærerens rolle?",
    answers: [
      "At skabe rammer, støtte læring og træffe didaktiske valg med blik for eleverne",
      "At formidle stof så præcist, at eleverne ikke behøver at undersøge selv",
      "At styre undervisningen stramt for at undgå afvigelser fra planen",
      "At sikre at alle elever arbejder i samme tempo mod samme resultat"
    ],
    correct: 0
  },
  {
    q: "Hvad er undervisningens indhold?",
    answers: [
      "Det faglige stof, de erfaringer og de perspektiver elever arbejder med i undervisningen",
      "De aktiviteter læreren vælger for at skabe variation i timen",
      "Det materiale eleverne får udleveret i begyndelsen af et forløb",
      "De mål der står beskrevet i årsplanen"
    ],
    correct: 0
  }
],
dsa: [
  {
    q: "Hvad er dansk som andetsprog (DSA)?",
    answers: [
      "Undervisning og sproglig støtte målrettet elever, der lærer dansk som et andet sprog",
      "Danskundervisning for elever der har svært ved stavning på modersmålet",
      "Et forløb hvor flersprogede elever kun arbejder med mundtlig dansk",
      "Et fag der primært handler om at oversætte mellem dansk og elevens hjemmesprog"
    ],
    correct: 0
  },
  {
    q: "Hvad er hverdagssprog?",
    answers: [
      "Sprog der bruges i daglige, konkrete og ofte situationsbundne sammenhænge",
      "Sprog der kun bruges i hjemmet og aldrig i skolen",
      "Sprog med mange fagord og abstrakte begreber",
      "Sprog der altid er uformelt og grammatisk ukorrekt"
    ],
    correct: 0
  },
  {
    q: "Hvad er skolesprog?",
    answers: [
      "Det mere faglige og abstrakte sprog som bruges i undervisning, tekster og opgaver",
      "Det sprog elever taler med venner i frikvarteret",
      "Et særligt korrekt dansk der kun bruges i skriftlige prøver",
      "Sprog der kun handler om grammatiske regler"
    ],
    correct: 0
  },
  {
    q: "Hvad er stilladsering?",
    answers: [
      "Midlertidig støtte der hjælper eleven til at forstå og bruge nyt sprog mere selvstændigt",
      "En metode hvor læreren forenkler alle tekster permanent",
      "Et fast undervisningsforløb som alle andetsprogselever skal følge ens",
      "En måde at rette elevsprog løbende uden fokus på forståelse"
    ],
    correct: 0
  },
  {
    q: "Hvad er sprogtilegnelse?",
    answers: [
      "Den proces hvor en person udvikler forståelse og brug af et sprog",
      "Evnen til at oversætte ord direkte fra ét sprog til et andet",
      "At kunne gengive grammatiske regler udenad",
      "At lære at udtale alle ord perfekt fra begyndelsen"
    ],
    correct: 0
  },

  {
    q: "Hvad er flersprogethed?",
    answers: [
      "At kunne bruge eller forholde sig til flere sprog i hverdagen og læringen",
      "At kunne tale to sprog helt fejlfrit på samme niveau",
      "At skifte mellem sprog uden at blande ord eller udtryk",
      "At have ét stærkt skolesprog og ét svagt hjemmesprog"
    ],
    correct: 0
  },
  {
    q: "Hvad er ordforråd?",
    answers: [
      "De ord og begreber en person kan forstå og bruge",
      "En liste over de sværeste ord i en lærebog",
      "Evnen til at stave lange ord korrekt",
      "De ord læreren vælger at teste i slutningen af et forløb"
    ],
    correct: 0
  },
  {
    q: "Hvad er førfagligt ordforråd?",
    answers: [
      "Ord fra hverdagssprog som støtter overgangen til fagligt og abstrakt sprog",
      "Ord der kun bruges i begynderundervisning og ikke i fagene",
      "Ord som altid er lettere end hverdagssprog",
      "Ord der kun handler om grammatik og sætningsanalyse"
    ],
    correct: 0
  },
  {
    q: "Hvad er fagligt ordforråd?",
    answers: [
      "Ord og begreber der er knyttet til bestemte fag og faglige sammenhænge",
      "Alle ord der optræder i en skriftlig tekst",
      "Ord der kun bruges af lærere og ikke af elever",
      "Ord som er svære at udtale men lette at forstå"
    ],
    correct: 0
  },
  {
    q: "Hvad er sproglig opmærksomhed?",
    answers: [
      "Evnen til at lægge mærke til og arbejde bevidst med sprogets former, lyde og brug",
      "Evnen til at lytte uden at reagere på indholdet",
      "Evnen til at huske mange ord uden at bruge dem",
      "Evnen til at tale længe uden pauser"
    ],
    correct: 0
  },

  {
    q: "Hvad er modersmål?",
    answers: [
      "Det eller de sprog et barn tilegner sig tidligt og bruger i nære sammenhænge",
      "Det sprog man lærer først i skolen",
      "Det sprog man er bedst til at skrive på",
      "Det officielle sprog i det land man bor i"
    ],
    correct: 0
  },
  {
    q: "Hvad er andetsprog?",
    answers: [
      "Et sprog der læres efter modersmålet og bruges i samfund, skole eller hverdag",
      "Et sprog man lærer gennem oversættelse alene",
      "Et sprog man kun bruger i undervisning og aldrig socialt",
      "Et sprog der altid læres senere i livet"
    ],
    correct: 0
  },
  {
    q: "Hvad er sprogstøtte?",
    answers: [
      "Pædagogiske tiltag der hjælper elever med at forstå og bruge sproget i undervisningen",
      "Ekstra grammatikopgaver som gives til flersprogede elever",
      "En forenkling af alle faglige krav i klassen",
      "Et system hvor eleven får svarene oversat af læreren"
    ],
    correct: 0
  },
  {
    q: "Hvad er visuel støtte?",
    answers: [
      "Brug af billeder, modeller, symboler eller andre visuelle elementer til at støtte forståelse",
      "At eleverne ser videoer i stedet for at arbejde med sprog",
      "At skrive alle svar på tavlen før eleverne prøver selv",
      "At bruge farver i bøgerne for at gøre dem mere spændende"
    ],
    correct: 0
  },
  {
    q: "Hvad er modellering i DSA-undervisning?",
    answers: [
      "At læreren viser hvordan sprog, opgaver eller tekster kan bruges og forstås",
      "At læreren taler langsomt så eleverne kan kopiere udtalen",
      "At eleverne gentager læreren ordret uden at ændre noget",
      "At læreren vælger én elevtekst som alle skal skrive af"
    ],
    correct: 0
  },

  {
    q: "Hvad er kontekst i sprogarbejde?",
    answers: [
      "Den situation og sammenhæng der hjælper ord og ytringer med at give mening",
      "Den grammatiske regel der bestemmer ordstilling i en sætning",
      "Den rækkefølge nye ord præsenteres i",
      "Den teksttype læreren vælger til en prøve"
    ],
    correct: 0
  },
  {
    q: "Hvad er kommunikativ kompetence?",
    answers: [
      "Evnen til at bruge sprog meningsfuldt og passende i forskellige situationer",
      "Evnen til at bruge korrekt grammatik i alle sætninger",
      "Evnen til at oversætte ord hurtigt mellem to sprog",
      "Evnen til at tale meget uden at stoppe"
    ],
    correct: 0
  },
  {
    q: "Hvad er receptive sprogfærdigheder?",
    answers: [
      "At forstå sprog gennem lytning og læsning",
      "At udtrykke sig gennem tale og skrivning",
      "At kunne gentage ord og sætninger korrekt",
      "At kunne analysere grammatiske fejl i en tekst"
    ],
    correct: 0
  },
  {
    q: "Hvad er produktive sprogfærdigheder?",
    answers: [
      "At bruge sprog gennem tale og skrivning",
      "At forstå indhold gennem billeder og lyd",
      "At kunne udpege svære ord i en tekst",
      "At kunne genkende sproglyde i oplæsning"
    ],
    correct: 0
  },
  {
    q: "Hvad er mundtlig sprogtilegnelse?",
    answers: [
      "Udvikling af evnen til at forstå og bruge talesprog",
      "At lære at skrive sammenhængende tekster på dansk",
      "At træne læsehastighed gennem højt oplæsning",
      "At arbejde med staveregler og tegnsætning"
    ],
    correct: 0
  },

  {
    q: "Hvad er skriftlig sprogtilegnelse?",
    answers: [
      "Udvikling af evnen til at forstå og bruge skriftsprog i forskellige sammenhænge",
      "At kunne skrive enkeltord uden at forstå deres betydning",
      "At kopiere tekster korrekt fra tavlen",
      "At oversætte sætninger direkte fra modersmål til dansk"
    ],
    correct: 0
  },
  {
    q: "Hvad er stilladserende spørgsmål?",
    answers: [
      "Spørgsmål der hjælper eleven til at tænke, forstå og formulere sig mere præcist",
      "Spørgsmål der kun bruges til at kontrollere om eleven kan svaret",
      "Spørgsmål der forenkler indholdet så eleven undgår at tænke selv",
      "Spørgsmål der altid kan besvares med ja eller nej"
    ],
    correct: 0
  },
  {
    q: "Hvad er et åbent spørgsmål i DSA?",
    answers: [
      "Et spørgsmål der inviterer til flere mulige og mere udfoldede svar",
      "Et spørgsmål med ét korrekt facitsvar",
      "Et spørgsmål der kun bruges i mundtlig evaluering",
      "Et spørgsmål der ikke kræver sproglig støtte"
    ],
    correct: 0
  },
  {
    q: "Hvad er et lukket spørgsmål?",
    answers: [
      "Et spørgsmål der typisk lægger op til et kort og afgrænset svar",
      "Et spørgsmål der kun kan forstås med billeder",
      "Et spørgsmål der kræver lang begrundelse",
      "Et spørgsmål som eleven selv formulerer"
    ],
    correct: 0
  },
  {
    q: "Hvad er sprogbrug i kontekst?",
    answers: [
      "At sproget forstås og læres i meningsfulde situationer og sammenhænge",
      "At nye ord bedst læres isoleret uden fagligt indhold",
      "At sproget primært trænes gennem løse grammatikøvelser",
      "At elever først skal mestre grammatik før de bruger sproget"
    ],
    correct: 0
  },

  {
    q: "Hvad er transfer mellem sprog?",
    answers: [
      "At viden eller mønstre fra ét sprog påvirker brugen af et andet sprog",
      "At alle ord fra modersmålet kan oversættes direkte til dansk",
      "At elever automatisk glemmer deres modersmål når de lærer dansk",
      "At man skal undgå at bruge flere sprog i undervisningen"
    ],
    correct: 0
  },
  {
    q: "Hvad er positiv transfer?",
    answers: [
      "Når viden fra et kendt sprog støtter forståelse eller brug af et nyt sprog",
      "Når eleven blander flere sprog i samme sætning",
      "Når modersmålet forstyrrer elevens danske udtale",
      "Når læreren oversætter alle centrale begreber"
    ],
    correct: 0
  },
  {
    q: "Hvad er intersprog?",
    answers: [
      "Det midlertidige sprogsystem en andetsprogselev udvikler på vej mod større sproglig kompetence",
      "Et blandingssprog der opstår når eleven ikke har lært dansk rigtigt",
      "Et sprog der kun bruges i uformelle samtaler mellem flersprogede elever",
      "En metode til at sammenligne modersmål og dansk"
    ],
    correct: 0
  },
  {
    q: "Hvad er sproglig progression?",
    answers: [
      "At elevens sprog udvikler sig gradvist i kompleksitet, præcision og funktion",
      "At eleven lærer flere ord fra uge til uge uden at bruge dem",
      "At undervisningen bliver sværere uanset elevens udvikling",
      "At eleven først udvikler skrift og derefter mundtlighed"
    ],
    correct: 0
  },
  {
    q: "Hvad er deltagelse vigtigt for i DSA?",
    answers: [
      "Fordi sprog udvikles gennem aktiv brug, samspil og meningsfulde fællesskaber",
      "Fordi deltagelse gør det lettere at undgå grammatiske fejl",
      "Fordi elever lærer bedst ved kun at lytte i begyndelsen",
      "Fordi deltagelse primært handler om at række hånden op ofte"
    ],
    correct: 0
  },

  {
    q: "Hvad er tosproget udvikling?",
    answers: [
      "Udvikling hvor flere sprog indgår i barnets læring, identitet og kommunikation",
      "En proces hvor ét sprog gradvist erstatter det andet",
      "At barnet lærer to sprog i præcis samme tempo og på samme måde",
      "At barnet kun bruger ét sprog ad gangen i alle sammenhænge"
    ],
    correct: 0
  },
  {
    q: "Hvad er sproglig identitet?",
    answers: [
      "Den måde sprog hænger sammen med hvordan en person forstår sig selv og sine fællesskaber",
      "Et mål for hvor korrekt en elev taler dansk",
      "De sprog eleven bruger mest i undervisningen",
      "En vurdering af elevens ordforråd og udtale"
    ],
    correct: 0
  },
  {
    q: "Hvad er inkluderende sprogarbejde?",
    answers: [
      "Undervisning der anerkender elevers sproglige ressourcer og giver adgang til deltagelse og læring",
      "Undervisning hvor alle elever får samme tekst uden støtte for at sikre lighed",
      "Undervisning der undgår brug af modersmål for at styrke dansk hurtigere",
      "Undervisning hvor flersprogede elever arbejder særskilt med enklere opgaver"
    ],
    correct: 0
  },
  {
    q: "Hvad er sprog og fag i sammenhæng?",
    answers: [
      "At sproglig udvikling og faglig læring hænger tæt sammen i undervisningen",
      "At sprogundervisning bør ske adskilt fra fagundervisning",
      "At fagligt indhold først bør komme når eleven taler flydende dansk",
      "At sprogarbejde kun er vigtigt i danskfaget"
    ],
    correct: 0
  },
  {
    q: "Hvad er begrebsudvikling?",
    answers: [
      "At elever gradvist udvikler forståelse af ord, begreber og deres sammenhænge",
      "At elever lærer at stave fagord korrekt",
      "At elever lærer at bruge korte definitioner uden forklaring",
      "At elever husker flest mulige ord på én gang"
    ],
    correct: 0
  },

  {
    q: "Hvad er ordkendskab i DSA?",
    answers: [
      "At kende ords betydning, brug, form og nuancer i forskellige sammenhænge",
      "At kunne oversætte et ord direkte til sit modersmål",
      "At kunne stave ordet uden fejl i en diktat",
      "At kunne genkende ordet når læreren siger det højt"
    ],
    correct: 0
  },
  {
    q: "Hvad er sætningsstartere som støtte?",
    answers: [
      "Sproglige begyndelser der hjælper elever med at formulere svar og deltage i samtale eller skrivning",
      "Eksempler på sætninger som elever skal lære udenad og gentage",
      "De første ord i en tekst som læreren læser op",
      "En metode til at træne korrekt tegnsætning"
    ],
    correct: 0
  },
  {
    q: "Hvad er formålet med at aktivere forforståelse?",
    answers: [
      "At koble elevens viden og erfaringer til det nye sprog og indhold",
      "At sikre at eleverne allerede kender alle centrale ord før undervisningen starter",
      "At undgå at eleverne møder ukendt indhold i teksten",
      "At teste elevens baggrundsviden før læreren forklarer noget"
    ],
    correct: 0
  },
  {
    q: "Hvad er læsestøtte i DSA?",
    answers: [
      "Støtte som hjælper eleven med at forstå tekst gennem ordforråd, billeder, struktur og samtale",
      "At forkorte alle tekster så eleverne hurtigere kommer igennem dem",
      "At give eleverne facit til alle spørgsmål før læsning",
      "At fokusere på oplæsning uden at arbejde med forståelse"
    ],
    correct: 0
  },
  {
    q: "Hvad er skrivestøtte i DSA?",
    answers: [
      "Støtte som hjælper eleven med at formulere og strukturere tekster gennem modeller, ord og rammer",
      "At lade eleven kopiere en modeltekst uden ændringer",
      "At rette alle fejl før eleven selv prøver at skrive",
      "At nøjes med at fokusere på stavning i skriveprocessen"
    ],
    correct: 0
  },

  {
    q: "Hvad er mundtlig deltagelse i DSA?",
    answers: [
      "At eleven aktivt bruger talesprog til at spørge, forklare, svare og indgå i samtale",
      "At eleven lytter opmærksomt uden nødvendigvis at sige noget",
      "At eleven gentager lærerens ord så præcist som muligt",
      "At eleven taler frit uden støtte eller struktur"
    ],
    correct: 0
  },
  {
    q: "Hvad er multimodal støtte i DSA?",
    answers: [
      "At kombinere flere udtryksformer som billeder, tekst, lyd og handling for at støtte forståelse",
      "At bruge digitale værktøjer i stedet for samtale",
      "At give elever både en let og en svær tekst om samme emne",
      "At lade elever vælge mellem at skrive eller tale"
    ],
    correct: 0
  },
  {
    q: "Hvad er formålet med at bruge elevernes samlede sproglige ressourcer?",
    answers: [
      "At bygge videre på det eleverne allerede kan og skabe bro til nyt sprog og fagligt indhold",
      "At sikre at dansk kun bruges i de situationer hvor eleven er helt sikker",
      "At gøre det lettere at undgå fejl i dansk ved at skifte sprog",
      "At lade eleverne arbejde uden lærerens sproglige støtte"
    ],
    correct: 0
  },
  {
    q: "Hvad er translanguaging i praksis?",
    answers: [
      "At elever bruger deres samlede sproglige ressourcer fleksibelt i læring og kommunikation",
      "At elever oversætter alle tekster ord for ord til dansk",
      "At undervisningen foregår halvt på dansk og halvt på modersmål",
      "At læreren undgår dansk for at gøre fagene lettere"
    ],
    correct: 0
  },
  {
    q: "Hvad er sproglig bevidsthed?",
    answers: [
      "At kunne lægge mærke til hvordan sprog fungerer og bruges forskelligt i forskellige sammenhænge",
      "At kunne høre om nogen taler grammatisk forkert",
      "At kunne skelne mellem skriftsprog og talesprog uden videre forklaring",
      "At kunne bruge avancerede fagord i alle fag"
    ],
    correct: 0
  },

  {
    q: "Hvorfor er skolesprog ofte udfordrende for andetsprogselever?",
    answers: [
      "Fordi det ofte er mere abstrakt, fagligt og mindre bundet til den konkrete situation",
      "Fordi det altid er meget længere end hverdagssprog",
      "Fordi det kun bruges i skrift og aldrig i tale",
      "Fordi det består af ord som ikke findes i andre sprog"
    ],
    correct: 0
  },
  {
    q: "Hvorfor er stilladsering vigtig i DSA?",
    answers: [
      "Fordi den gør det muligt for elever at deltage sprogligt og fagligt, mens de stadig er under udvikling",
      "Fordi den gør det muligt at undgå udfordrende opgaver helt",
      "Fordi den sikrer at læreren kan styre alle elevsvar",
      "Fordi den erstatter behovet for aktiv elevdeltagelse"
    ],
    correct: 0
  },
  {
    q: "Hvorfor er ordforrådsarbejde centralt i DSA?",
    answers: [
      "Fordi ord og begreber giver adgang til forståelse, deltagelse og faglig læring",
      "Fordi elever først skal kunne mange ord før de kan begynde at tale",
      "Fordi ordforråd er vigtigere end sammenhæng og kontekst",
      "Fordi nye ord bedst læres gennem udenadslære alene"
    ],
    correct: 0
  },
  {
    q: "Hvad er forskellen på hverdagssprog og skolesprog?",
    answers: [
      "Hverdagssprog er ofte konkret og situationsbundet, mens skolesprog er mere abstrakt og fagligt",
      "Hverdagssprog bruges mundtligt, mens skolesprog kun bruges skriftligt",
      "Hverdagssprog er grammatisk enklere, mens skolesprog altid er korrekt og formelt",
      "Der er ingen væsentlig forskel mellem de to"
    ],
    correct: 0
  },
  {
    q: "Hvad er et vigtigt mål i DSA-undervisning?",
    answers: [
      "At støtte elever i at udvikle dansk så de kan deltage sprogligt, fagligt og socialt i skolen",
      "At få elever til hurtigst muligt at tale fejlfrit dansk",
      "At erstatte elevens øvrige sprog med dansk i alle sammenhænge",
      "At fokusere på grammatik før eleven deltager i faglig undervisning"
    ],
    correct: 0
  }
],
}