import onMouseMove from "./jsMetodos/onmouseEvent.js";
import pulseBtn from "./jsMetodos/btnPulse.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  //Creamos el efecto de arrastrar en la pantalla
  onMouseMove(".container");

  //Creamos el efecto de pulsar boton
  pulseBtn("btnComeBack");
});
