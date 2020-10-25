'use strict';

//
//-	Označit, že vždycky začíná kolečko
//-	Říct, že kolečko a čtverečky budou na buttonech
//-	Když hraje kolečko, tak se vypíše obrázek kolečka do butonu, ale zároveň i nahoře
//-	Když hraje křížek, tak sevypíše křížek do butonnu, ale zároveň i nahoře

//  když na tahu kolečko, tak v buttonu kolečko, takže informace, že potom hraje křížek, změní se proměnná na tahu ze circle na křížek

let naTahu = 'circle';

let hraje = document.querySelector("symbol");

const pole = document.querySelectorAll("btn");

const hra = (event) => {
  if ( naTahu === 'circle') {
    event.target.classList.add("board__field--circle");
naTahu = "cross";
hraje.classList.add("board__field--cross");
  }
  else {
    event.target.classList.add("board__field--cross");
    naTahu = "circle";
    hraje.classList.add("board__field--circle");    
  }
};

//cyklus - který mi zavolá funkci hra

for (let i = 0; i < pole.length; i++) {
   pole[i].addEventListener("click", hra); 
}
