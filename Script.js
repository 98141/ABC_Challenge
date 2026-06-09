let contador=0;

function aumentarContador(){
    contador++;
    document.getElementById("contador").textContent= contador;
}

function voltear(card) {
  card.classList.toggle("volteada");

  if (card.dataset.vista === "false") {
    card.dataset.vista = "true";
  }
}

function filtrar(tipo) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    if (tipo === "todas") {
      card.style.display = "block";
    } else {
      if (card.dataset.tipo === "vocal") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}
