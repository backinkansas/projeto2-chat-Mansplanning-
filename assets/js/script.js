let bancoDeImagens = [
    '01-sim.png',
    '02-sim.png',
    '03-sim.png',
    '04-sim.png',
    '05-nao.png',
    '06-nao.png',
    '07-sim.png',
    '08-sim.png',
    '09-nao.png',
    '10-sim.png'
];

let indiceBancoImgs = 1;
// let valor = document.getElementById("btnsim").getAttribute("value");
// console.log(valor);


function mudarPergunta() {
    if (indiceBancoImgs < 9) {
        indiceBancoImgs++;
        document.getElementById('imagem').src = "./assets/img/" + bancoDeImagens[indiceBancoImgs];
    } else {
    window.location.replace("resultado.html");
    }
}

// document.querySelectorAll('.botao').onclick = mudarPergunta();

function jogarNovamente () {
    window.location.replace("index.html");
}

const gabarito = [
    "sim",
    "sim",
    "sim",
    "sim",
    "nao",
    "nao",
    "sim",
    "sim",
    "nao",
    "sim"
];

let respostas = [];


