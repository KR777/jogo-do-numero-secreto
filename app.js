/*let titulo =  document.querySelector("h1");
titulo.innerHTML = "Jogo do Número Secreto";

let paragrafo =  document.querySelector("p");
paragrafo.innerHTML = "Escolha um Número entre 1 e 10:";
*/

let listaDenumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.1});
}
function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um Número de 1 a 10");
    

}
    exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value; // value retorna o input
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Parabéns! Você acertou o Número Secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela("p", "O Número Secreto é menor!");
        } else {
            exibirTextoNaTela("p", "O Número Secreto é maior!");
        }
        tentativas++
        limparCampo();

        
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosnaLista = listaDenumerosSorteados.length;

    if (quantidadeDeElementosnaLista == numeroLimite){
        listaDenumerosSorteados = [];
    }

    if (listaDenumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDenumerosSorteados.push(numeroEscolhido);
        console.log(listaDenumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}