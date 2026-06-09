const abecedario = [
  {
    letra: "A",
    tipo: "vocal",
    palabra: "avión",
    url: "https://i.ytimg.com/vi/9XimutDsfsY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBjRXBMA9bF_bCTy58ml1rUeVPFWg",
  },
  {
    letra: "B",
    tipo: "consonante",
    palabra: "barco",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boat.jpg?width=500",
  },
  {
    letra: "C",
    tipo: "consonante",
    palabra: "casa",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/House.jpg?width=500",
  },
  {
    letra: "D",
    tipo: "consonante",
    palabra: "dado",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dice.jpg?width=500",
  },
  {
    letra: "E",
    tipo: "vocal",
    palabra: "elefante",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Elephant.jpg?width=500",
  },
  {
    letra: "F",
    tipo: "consonante",
    palabra: "fresa",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry.jpg?width=500",
  },
  {
    letra: "G",
    tipo: "consonante",
    palabra: "gato",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVfHORQFLyUf_rNove-xUmxIskDeMJ63REz_YIMQ6S0vCyQdkBvJos4igKspvCgpqnpy8h0xM--1uckzZIxDgyoHy37-MowkF-YzvVx8&s=10",
  },
  {
    letra: "H",
    tipo: "consonante",
    palabra: "helicóptero",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Helicopter.jpg?width=500",
  },
  {
    letra: "I",
    tipo: "vocal",
    palabra: "iguana",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Iguana.jpg?width=500",
  },
  {
    letra: "J",
    tipo: "consonante",
    palabra: "jirafa",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Giraffe.jpg?width=500",
  },
  {
    letra: "K",
    tipo: "consonante",
    palabra: "koala",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Koala.jpg?width=500",
  },
  {
    letra: "L",
    tipo: "consonante",
    palabra: "león",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/002_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1280px-002_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg",
  },
  {
    letra: "M",
    tipo: "consonante",
    palabra: "manzana",
    url: "https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg",
  },
  {
    letra: "N",
    tipo: "consonante",
    palabra: "nube",
    url: "https://services.meteored.com/img/article/-por-que-las-nubes-no-se-caen--7332-1_1280.jpg",
  },
  {
    letra: "O",
    tipo: "vocal",
    palabra: "oso",
    url: "https://storage.googleapis.com/media-cloud-na/2025/02/proteccion-del-oso-de-anteojos.jpg",
  },
  {
    letra: "P",
    tipo: "consonante",
    palabra: "perro",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6U38E_AnJ1-vP26V1zobaThA6HleTqywqICf1FqDDYwzqbQIwsFDRp9EvwHnXpoSiusolAxCv9etUDcuppxm77-xwOKaq3bc_iQZfA&s=10",
  },
  {
    letra: "Q",
    tipo: "consonante",
    palabra: "queso",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cheese.jpg?width=500",
  },
  {
    letra: "R",
    tipo: "consonante",
    palabra: "rosa",
    url: "https://www.floristeriamorris.com/wp-content/uploads/2023/03/la-rosa-roja-un-simbolo-cargado-de-significado-min-scaled.jpg",
  },
  {
    letra: "S",
    tipo: "consonante",
    palabra: "sol",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sun.jpg?width=500",
  },
  {
    letra: "T",
    tipo: "consonante",
    palabra: "tren",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Train.jpg?width=500",
  },
  {
    letra: "U",
    tipo: "vocal",
    palabra: "uva",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Grapes.jpg?width=500",
  },
  {
    letra: "V",
    tipo: "consonante",
    palabra: "vaca",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cow.jpg?width=500",
  },
  {
    letra: "W",
    tipo: "consonante",
    palabra: "wafle",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waffle.jpg?width=500",
  },
  {
    letra: "X",
    tipo: "consonante",
    palabra: "xilófono",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Xylophone.jpg?width=500",
  },
  {
    letra: "Y",
    tipo: "consonante",
    palabra: "yate",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yacht.jpg?width=500",
  },
  {
    letra: "Z",
    tipo: "consonante",
    palabra: "zapato",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shoe.jpg?width=500",
  },
];

let contador = 0;

function crearCarta({ letra, tipo, palabra, url }) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.tipo = tipo;
    card.dataset.vista = "false";
    card.addEventListener("click", () => voltear(card));

    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";

    const cardFrente = document.createElement("div");
    cardFrente.className = "card-frente";

    const titulo = document.createElement("h1");
    titulo.textContent = letra;
    cardFrente.appendChild(titulo);

    const cardDorso = document.createElement("div");
    cardDorso.className = "card-dorso";

    const imagen = document.createElement("img");
    imagen.src = url;
    imagen.alt = palabra;

    const nombre = document.createElement("h3");
    nombre.textContent = palabra;

    cardDorso.append(imagen, nombre);
    cardInner.append(cardFrente, cardDorso);
    card.appendChild(cardInner);

    return card;
}

function cargarAbecedario() {
    const galeria = document.getElementById("inicio");
    const totalLetras = document.getElementById("total-letras");

    galeria.innerHTML = "";
    abecedario.forEach((item) => {
        galeria.appendChild(crearCarta(item));
    });

    totalLetras.textContent = abecedario.length;
}

function aumentarContador() {
    contador++;
    document.getElementById("contador").textContent = contador;
}

function voltear(card) {
    card.classList.toggle("volteada");

    if (card.dataset.vista === "false") {
        card.dataset.vista = "true";
        aumentarContador();
    }
}

function filtrar(tipo) {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        if (tipo === "todas" || card.dataset.tipo === tipo) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", cargarAbecedario);