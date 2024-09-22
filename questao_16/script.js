function imprimeRetangulo(largura, altura){
    for(let i = 0; i < altura; i++){
        console.log("*".repeat(largura));
    }
}

imprimeRetangulo(10, 5);

const larguraTeste = Number(prompt("Insira os proprios parametros para teste!!!" + "\n" + "Largura:"));
const alturaTeste = Number(prompt("Insira os proprios parametros para teste!!!" + "\n" + "Altura:"));

imprimeRetangulo(larguraTeste, alturaTeste);