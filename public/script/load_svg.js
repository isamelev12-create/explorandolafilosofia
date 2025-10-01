const root = {
  personaje11: 'http://localhost:3000/opcion/1',
  personaje22_1_: 'http://localhost:3000/opcion/2',
  personaje33: 'http://localhost:3000/opcion/3',
  personaje44: 'http://localhost:3000/opcion/4',
};

const svgName = window.nameSvg;

fetch(`img/${svgName}`)
  .then(response => response.text())
  .then(svgText => {
    document.getElementById("svgContainer").innerHTML = svgText;
    Object.entries(root).forEach(([id, url]) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', () => {
          window.location.href = url;
        });
      }
    });
  });