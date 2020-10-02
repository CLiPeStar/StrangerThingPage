const d = document;
export default function pulseBtn(btn) {
  const $btnPulsed = d.getElementById(btn);

  $btnPulsed.onmousedown = (e) => {
    $btnPulsed.style.border = "none";
  };
  $btnPulsed.onmouseup = (e) => {
    $btnPulsed.removeAttribute("style");
    history.back(1);
  };
}
