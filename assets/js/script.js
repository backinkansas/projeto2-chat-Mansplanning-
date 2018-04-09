let acertos = 0;
let bancoDeImagens = ['./assets/img/02-sim.png', './assets/img/03-sim.png', './assets/img/04-sim.png', './assets/img/05-nao.png', './assets/img/06-nao.png', './assets/img/07-sim.png', './assets/img/08-sim.png', './assets/img/09-nao.png', './assets/img/10-sim.png']
let i;
let btnsim = document.getElementById('btnsim');


let mudarPergunta = function () {
    for (i in bancoDeImagens) {
        document.getElementById('imagem').src = bancoDeImagens[i];
    }
};
