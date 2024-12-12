const wordList = [
  "AMADO", "ANEXO", "ARENA", "ASTRO", "AMIGA", "ANDAR", "AUDIO", "BARCO",
  "BEIJO", "BANCO", "BICHO", "BRAVO", "BONUS", "BANHO", "BALAO", "CAMPO",
  "CARTA", "CERCO", "CENHO", "CESTO", "COURO", "CRAVO", "DENTE", "DIZER",
  "DEDAL", "DOLAR", "DANCA", "DRAMA", "ELITE", "ESTAR", "ETAPA", "ECOAR",
  "ESCOL", "ESQUI", "FALAR", "FARDO", "FAIXA", "FAUNA", "FELIZ", "FENDA",
  "FERRO", "FLORA", "FORNO", "FRASE", "FRUTO", "FUGIR", "FURAR", "GENTE",
  "GANHO", "GASTO", "GARRA", "GRITO", "GRATA", "GUETO", "HABIL", "HASTE",
  "HINOS", "HOTEL", "HUMOR", "IDOSO", "IDEAL", "INDIO", "INFRA", "INATO",
  "INSTA", "JAULA", "JOVEM", "JUROS", "LARGO", "LINHA", "LIVRO", "LOMBO",
  "LUGAR", "LUTAR", "MACHO", "MANSO", "MEIGA", "MIDIA", "MISTO", "MODAL",
  "MOLAR", "MORTE", "MOVER", "NATAL", "NAVIO", "NEXO", "NIVEL", "NOBRE",
  "NUVEM", "NUNCA", "ODIAR", "OLHAR", "ORCAR", "OUSAR", "PACTO", "PARDO",
  "PARTE", "PASTO", "PEDRA", "PERDA", "PIANO", "PRAZO", "PRATO", "PRECO",
  "PROVA", "QUASE", "QUEDA", "QUERO", "RAMPA", "RANGO", "RAIVA", "REGUA",
  "REVER", "RIVAL", "ROMBO", "RUIDO", "SABOR", "SALVO", "SANTO", "SEIVA",
  "SERRA", "SILVO", "SINAL", "SOBRA", "SOMAR", "SUBIR", "SUPER", "SUITE",
  "TABUA", "TARDE", "TENDA", "TEMPO", "TOCAR", "TOMAR", "TORNA", "TRAMA",
  "TRAJE", "TREVO", "TROCA", "TROCO", "UNICO", "UNIR", "UNTAR", "URGIR",
  "VAGAR", "VALER", "VAZIO", "VELHO", "VERDE", "VESTE", "VIVER", "VORAZ",
  "XODO", "ZEBRA", "ZUMBI", "AGUA", "ANIMO", "APICE", "ETNICO", "EBANO",
  "EPICO", "IDOLO", "IMPAR", "OPERA", "ONIBUS", "OTIMO", "UMIDO", "UTICO",
  "VASTO", "ZELO", "ZENAO", "ALIAR", "ABANO", "AFETO", "ALTAR", "AMEBA",
  "AMBOS", "ANELO", "ANEXO", "ANGEL", "ANIMA", "ANUAL", "APEAR", "APITO",
  "APRUM", "ARAME", "ARCAR", "ARDOR", "AREIA", "AREJO", "ARFAR", "ARGIL",
  "ARGUE", "AROMA", "ARTES", "ATAJO", "ATEAR", "ATLAS", "ATOLAR", "ATUAR",
  "AUDIT", "AUMENT", "AUSTE", "AVANC", "AVIAO", "AVIAR", "AVIDA", "AVISO",
  "AXIAL", "AXIOM", "AZARAR", "ACENTO", "ACERVO", "AFERIR", "AGIL", "ABONO",
  "ACIDO", "ACOLH", "ADORA", "AFLUI", "AJOEL", "ALADO", "ALGEM", "ALGOL",
  "ALHAO", "ALIDA", "ALIEN", "ALIMENT", "AMEBO", "AMENO", "APEX",
  "ARMAR", "ARDIL", "ASFIX", "ATUAM", "AUTAR", "BASICO", "BAQUE", "BICHO",
  "BANDA", "BEIJO", "BIBEL", "BALAO", "BRASA", "BREJO", "BICHO", "CABEM",
  "CACAD", "CALOR", "CARAO", "CAROS", "CEBOL", "CERVE", "CLARO", "COESA",
  "CONTA", "DEDAR", "DENOT", "DENTES", "DEPRE", "DIZER", "ESFIR", "ERVAS",
  "ESTAM", "FEDER", "FURTO", "FICAR", "FATOS", "FINO", "GENTE", "GERAM",
  "GRATO", "GRADA", "GRAMA", "GUIAR", "JUSTA", "JUSTO", "LARAN", "LIDER",
  "LINDO", "LUTAR", "LINHA", "MIADO", "MOCAO", "MIRAR", "MORAL", "MORTE",
  "NEGAR", "NICHO", "NINHO", "NOITE", "NOTAR", "PACTO", "PARDO", "PEDIR",
  "PERDO", "POLIR", "PEIXE", "PINHO", "PRATO", "PROVA", "QUASE", "QUEIM",
  "RASTO", "RATEL", "REDEM", "REVER", "REPOR", "SABEM", "SECAR", "SEGUN",
  "SELAR", "SENHO", "SERVO", "SINAL", "SOLTO", "SOMAR", "SOBRE", "SORTE",
  "TARDE", "TEMOR", "TERRA", "TROCA", "UNHAO", "UNIAO", "URTAR", "VALEM",
  "VAZIO", "VERDE", "VIVER", "ZELAR"
];


const board = document.querySelector('.game-board'); 
const rows = Array.from(document.querySelectorAll('.row')); 
const targetWord = wordList[Math.floor(Math.random() * wordList.length)];
let currentRow = 0; 
let currentCol = 0; 
let currentGuess = ""; 

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  const key = event.key.toUpperCase();

  if (key === 'BACKSPACE' && currentCol > 0) {
    deleteLetter();
  } else if (key === 'ENTER' && currentCol === 5) {
    submitGuess();
  } else if (isLetter(key) && currentCol < 5) {
    addLetter(key);
  }
}

function isLetter(str) {
  return str.length === 1 && str.match(/[A-Z]/i);
}

function addLetter(letter) {
    const quadrados = rows[currentRow].querySelectorAll('.quadrado');
    quadrados[currentCol].textContent = letter;
    quadrados[currentCol].classList.add('typing'); 
    currentGuess += letter;
    currentCol++;
  }
  

  function deleteLetter() {
    const quadrados = rows[currentRow].querySelectorAll('.quadrado');
    currentCol--;
    quadrados[currentCol].textContent = '';
    quadrados[currentCol].classList.remove('typing'); 
    currentGuess = currentGuess.slice(0, -1);
  }
  
function submitGuess() {
  if (currentGuess === targetWord) {
    endGame(true);
    return;
  }

  if (currentRow === rows.length - 1) {
    endGame(false);
    return;
  }

  checkGuess();
  currentRow++;
  currentCol = 0;
  currentGuess = "";
}

function checkGuess() {
  const quadrados = rows[currentRow].querySelectorAll('.quadrado');
  const targetArray = targetWord.split('');

  currentGuess.split('').forEach((letter, index) => {
    if (letter === targetArray[index]) {
      quadrados[index].classList.add('correct');
      targetArray[index] = null; 
    }
  });

  currentGuess.split('').forEach((letter, index) => {
    if (targetArray.includes(letter) && !quadrados[index].classList.contains('correct')) {
      quadrados[index].classList.add('present');
      targetArray[targetArray.indexOf(letter)] = null; 
    }
  });

  currentGuess.split('').forEach((letter, index) => {
    if (!quadrados[index].classList.contains('correct') && !quadrados[index].classList.contains('present')) {
      quadrados[index].classList.add('absent');
    }
  });
}

function endGame(win) {
  document.removeEventListener('keydown', handleKeyPress);
  const message = win ? "Parabéns, você acertou!" : `Fim de jogo! A palavra era ${targetWord}`;
  setTimeout(() => alert(message), 100);
}


