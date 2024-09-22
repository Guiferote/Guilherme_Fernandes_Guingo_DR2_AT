const valorEmReais = Number(prompt("Insira o valor em reais: "));

function converteReaisEmCentavos(valor){
    let valorEmCentavos = valor * 100;
    return valorEmCentavos;
}

const valorEmCentavos = converteReaisEmCentavos(valorEmReais);
alert("O seu valor em centavos é: " + valorEmCentavos);