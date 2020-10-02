const d = document;

export default function selectorTemp(btn, link) {
  const $btnSellection = d.querySelector(btn);

  d.addEventListener("click", (e) => {
    if (e.target.matches(`${btn} *`)) {
      $btnSellection.style.opacity = 0;
      setInterval(() => {
        window.open(link, "_self");
      }, 1000);
    }
  });
}
