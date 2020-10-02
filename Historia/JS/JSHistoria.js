import selectorTemp from "./metodos/sellector.JS";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  //Selecion y animacion de los paneles de temporadas
  selectorTemp("#temporada1", "../temporadda1/temporada1.html");
  selectorTemp("#temporada2", "../temporada2/temporada2.html");
  selectorTemp("#temporada3", "../temporada3/temporada3.html");
});
