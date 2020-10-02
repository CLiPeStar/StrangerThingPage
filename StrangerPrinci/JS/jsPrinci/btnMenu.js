const d = document;

export default function accionBtnMenu(id, link) {
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
