import playTrailer from "./metodos/playVideo.js";
import { accionBtnExterno, accionBtnMenu } from "./metodos/btnMenu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  //Control de trailer
  playTrailer(".trailer", "video", ".play", ".close");

  // Control diferentes botones de la pagina
  accionBtnMenu(".logo", "../index.html");
  accionBtnExterno("#facebook", "https://www.facebook.com/alonso.bermejo.9");
  accionBtnExterno("#github", "https://github.com/CLiPeStar");
  accionBtnExterno("#twitter", "https://twitter.com/CLiP_0");
});
