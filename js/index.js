"use strict";

window.onload = function() {
    document.getElementById("botao").onclick = function() {
        calcular();
    }
};

function calcular() {
    let valor = document.getElementById("txtvalor");
    let parcelas = document.getElementById("txtparcelas");
    let resposta = document.getElementById("txtresult");

    let valorcompra = parseFloat(valor.value);
    let qtdparcelas = parseInt(parcelas.value);

    let valorfinal = 0;

    if (isNaN(valorcompra) || valorcompra <= 0) {
        resposta.value = "Digite um valor válido!";
        return;
    }

    if (isNaN(qtdparcelas) || qtdparcelas <= 0) {
        resposta.value = "Selecione um número de parcelas válido!";
        return;
    }

    let taxa = 0;

    switch (qtdparcelas) {
        case 1:
            valorfinal = valorcompra;
            break;
        case 2:
            taxa = 0.03;
            valorfinal = (valorcompra * (1 + taxa)) / qtdparcelas;
            break;
        case 4:
        case 6:
        case 8:
        case 10:
            taxa = 0.07;
            valorfinal = (valorcompra * (1 + taxa)) / qtdparcelas;
            break;
        default:
            resposta.value = "Número de parcelas não suportado!";
            return;
    }

    resposta.value = `${qtdparcelas}X R$ ${valorfinal.toFixed(2)}`;
}
