let contador = 0;
let posicao;
let progresso = 0;

function atualizarContador(){
    contador++;
    document.getElementById('contador').textContent = contador + "s";

    progresso = (contador/10)*100;
    document.getElementById('progresso').style.width = progresso + '%';

    if(contador === 10){
        pausarContador();
    }
}

function iniciarContador(){
    

    if(contador === 10){
        reiniciarContador();
    }else{
        posicao = setInterval(atualizarContador, 1000);    
    }
}

function pausarContador(){
    clearInterval(posicao);
}

iniciarContador();

document.getElementById('btnPause').addEventListener('click', pausarContador);

function reiniciarContador(){
    pausarContador();
    contador = 0;
    progresso = 0;
    document.getElementById('contador').textContent = contador;
    document.getElementById('progresso').style.width = '0'
}

document.getElementById('btnIniciar').addEventListener('click',iniciarContador);
document.getElementById('btnReiniciar').addEventListener('click',reiniciarContador);