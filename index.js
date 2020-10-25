'use strict';

let naTahu = 'circle';

let hraje = document.querySelector('.symbol');

const pole = document.querySelectorAll('btn');

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
