const numeroCentro = Number(prompt("Insira o numero que será a base: "));
const distancia = Number(prompt("Insira o numero para a distancia: "));

function geraNumeroAleatorio(centro, distancia){
    
    const min = centro - distancia;
    const max = centro + distancia;
    let numeroAleatorio;

    console.log("teste");
    numeroAleatorio = Math.round(Math.random() * (max - min) + min);
    return numeroAleatorio;

    
    
}

console.log(geraNumeroAleatorio(numeroCentro, distancia));

console.log(Math.random());