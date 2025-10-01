    const tamano = 10;

    const palabras = [
      { palabra: "GATO", fila: 0, col: 0, dir: "H"},
      { palabra: "AGUA", fila: 0, col: 1, dir: "V"},
      { palabra: "OSO", fila: 0, col: 3, dir: "V"}
    ];

    const tablero = [];

    for (let i = 0; i < tamano; i++) {
      tablero[i] = Array(tamano).fill(null);
    }

    palabras.forEach(({ palabra, fila, col, dir }) => {
      for (let i = 0; i < palabra.length; i++) {
        const f = dir === "H" ? fila : fila + i;
        const c = dir === "H" ? col + i : col;
        tablero[f][c] = palabra[i];
      }
    });

    function crearCrucigrama() {
      const crucigrama = document.getElementById("crucigrama");
      for (let fila = 0; fila < tamano; fila++) {
        for (let col = 0; col < tamano; col++) {
          const celda = document.createElement("div");
          celda.classList.add("celda");

          if (tablero[fila][col] !== null) {
            const input = document.createElement("input");
            input.maxLength = 1;
            input.dataset.fila = fila;
            input.dataset.col = col;
            celda.appendChild(input);
          } else {
            celda.classList.add("celda-negra");
          }

          crucigrama.appendChild(celda);
        }
      }
    }

    function validar() {
      const inputs = document.querySelectorAll("#crucigrama input");
      inputs.forEach(input => {
        const fila = parseInt(input.dataset.fila);
        const col = parseInt(input.dataset.col);
        const letraCorrecta = tablero[fila][col];
        const letraUsuario = input.value.toUpperCase();

        if (letraUsuario === letraCorrecta) {
          input.classList.remove("incorrecta");
          input.classList.add("correcta");
        } else {
          input.classList.remove("correcta");
          input.classList.add("incorrecta");
        }
      });
    }

    crearCrucigrama();
