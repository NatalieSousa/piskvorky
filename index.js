'use strict';

let naTahu = 'circle';

let hraje = document.querySelector('.symbol');

const pole = document.querySelectorAll('.btn');

const hra = (event) => {
  if (naTahu === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    naTahu = 'cross';
    hraje.src = 'cross.svg';
    hraje.alt = 'krizek';
  } else {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    naTahu = 'circle';
    hraje.src = 'circle.svg';
    hraje.alt = 'kolecko';
  }
};

//cyklus - který mi zavolá funkci hra

for (let i = 0; i < pole.length; i++) {
  pole[i].addEventListener('click', hra);
}

const boardSize = 10;
const fields = document.querySelectorAll('.btn');
const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length) {
    if (field === fields[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }
  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};
const getField = (row, column) => fields[row * boardSize + column];

const getSymbol = (field) => {
  // Název třídy přizpůsob tvému kódu.
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener('click', (event) => {
    const isWinner = isWinningMove(event.target);
  });
}

const kdoVyhral = (event) => {
  if (isWinner === true) {
    alert('Gratuluji, vyhrál křížek!');
  } else 
  alert('Gratuluji, vyhrálo kolečko!');
  
};
 