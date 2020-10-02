const d = document;

export function accionBtnMenu(id, link) {
  d.addEventListener("click", (e) => {
    if (
      e.target.matches(id) ||
      e.target.matches(`${id} 
      *`)
    ) {
      window.open(link, "_self");
    }
  });
}
export function accionBtnExterno(id, link) {
  d.addEventListener("click", (e) => {
    if (
      e.target.matches(id) ||
      e.target.matches(`${id} 
      *`)
    ) {
      window.open(link, "noopener");
    }
  });
}
