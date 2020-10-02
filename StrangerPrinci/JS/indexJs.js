import controlSound from "./jsPrinci/controlBtnSound.js";
import accionBtnMenu from "./jsPrinci/btnMenu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  //Btn control sonido
  controlSound(".controlSonido", "song");

  //Btn menu redireccion a otro html
  accionBtnMenu("#historia", "./Historia/historia.html");
  accionBtnMenu("#personajes", "./Page404/page404.html");
  accionBtnMenu("#noticias", "./Page404/page404.html");
  accionBtnMenu("#album", "./Page404/page404.html");
});
