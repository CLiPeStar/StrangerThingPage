const d = document;
export default function onMouseMove(container) {
  const $container = d.querySelector(container);
  window.onmousemove = (e) => {
    let X = e.clientX / 5,
      Y = e.clientY / 5;

    $container.style.backgroundPositionX = X + "px";
    $container.style.backgroundPositionY = Y + "px";
  };
}
