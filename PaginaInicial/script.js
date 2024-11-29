const board = document.querySelector('.game-board'); // Seleciona o tabuleiro
const rows = Array.from(document.querySelectorAll('.row')); // Seleciona as linhas
const targetWord = "TERMO"; // Palavra fixa como exemplo
let currentRow = 0; // Linha atual do jogo
let currentCol = 0; // Coluna atual da linha
let currentGuess = ""; // Palavra sendo formada

// Mapeia o teclado para capturar entrada do usuário
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
    quadrados[currentCol].classList.add('typing'); // Adiciona uma classe para digitação
    currentGuess += letter;
    currentCol++;
  }
  

  function deleteLetter() {
    const quadrados = rows[currentRow].querySelectorAll('.quadrado');
    currentCol--;
    quadrados[currentCol].textContent = '';
    quadrados[currentCol].classList.remove('typing'); // Remove a classe para digitação
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

  // Verificar letras corretas
  currentGuess.split('').forEach((letter, index) => {
    if (letter === targetArray[index]) {
      quadrados[index].classList.add('correct');
      targetArray[index] = null; // Marca como usada
    }
  });

  // Verificar letras presentes
  currentGuess.split('').forEach((letter, index) => {
    if (targetArray.includes(letter) && !quadrados[index].classList.contains('correct')) {
      quadrados[index].classList.add('present');
      targetArray[targetArray.indexOf(letter)] = null; // Marca como usada
    }
  });

  // Marcar letras ausentes
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
