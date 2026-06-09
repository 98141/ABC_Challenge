const abecedario = [
    { letra: "A", palabra: "aviÃ³n", url: "https://i.ytimg.com/vi/9XimutDsfsY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBjRXBMA9bF_bCTy58ml1rUeVPFWg" },
    { letra: "B", palabra: "barco", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boat.jpg?width=500" },
    { letra: "C", palabra: "casa", url: "https://commons.wikimedia.org/wiki/Special:FilePath/House.jpg?width=500" },
    { letra: "D", palabra: "dado", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dice.jpg?width=500" },
    { letra: "E", palabra: "elefante", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Elephant.jpg?width=500" },
    { letra: "F", palabra: "fresa", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry.jpg?width=500" },
    { letra: "G", palabra: "gato", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVfHORQFLyUf_rNove-xUmxIskDeMJ63REz_YIMQ6S0vCyQdkBvJos4igKspvCgpqnpy8h0xM--1uckzZIxDgyoHy37-MowkF-YzvVx8&s=10" },
    { letra: "H", palabra: "helicÃ³ptero", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Helicopter.jpg?width=500" },
    { letra: "I", palabra: "iguana", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Iguana.jpg?width=500" },
    { letra: "J", palabra: "jirafa", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Giraffe.jpg?width=500" },
    { letra: "K", palabra: "koala", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Koala.jpg?width=500" },
    { letra: "L", palabra: "leÃ³n", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/002_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1280px-002_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg" },
    { letra: "M", palabra: "manzana", url: "https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg" },
    { letra: "N", palabra: "nube", url: "https://services.meteored.com/img/article/-por-que-las-nubes-no-se-caen--7332-1_1280.jpg" },
    { letra: "O", palabra: "oso", url: "https://storage.googleapis.com/media-cloud-na/2025/02/proteccion-del-oso-de-anteojos.jpg" },
    { letra: "P", palabra: "perro", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6U38E_AnJ1-vP26V1zobaThA6HleTqywqICf1FqDDYwzqbQIwsFDRp9EvwHnXpoSiusolAxCv9etUDcuppxm77-xwOKaq3bc_iQZfA&s=10" },
    { letra: "Q", palabra: "queso", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cheese.jpg?width=500" },
    { letra: "R", palabra: "rosa", url: "https://www.floristeriamorris.com/wp-content/uploads/2023/03/la-rosa-roja-un-simbolo-cargado-de-significado-min-scaled.jpg" },
    { letra: "S", palabra: "sol", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sun.jpg?width=500" },
    { letra: "T", palabra: "tren", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Train.jpg?width=500" },
    { letra: "U", palabra: "uva", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Grapes.jpg?width=500" },
    { letra: "V", palabra: "vaca", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cow.jpg?width=500" },
    { letra: "W", palabra: "wafle", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waffle.jpg?width=500" },
    { letra: "X", palabra: "xilÃ³fono", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Xylophone.jpg?width=500" },
    { letra: "Y", palabra: "yate", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yacht.jpg?width=500" },
    { letra: "Z", palabra: "zapato", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shoe.jpg?width=500" }
];

let contador = 0;

function aumentarContador() {
    contador++;
    document.getElementById("contador").textContent = contador;
}
