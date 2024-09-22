const truthy1 = 1;
const truthy2 = "Abacate";
const truthy3 = Infinity;

const falsy1 = "";
const falsy2 = 0;
const falsy3 = null;

console.log()

function booleficaVariaveis(variavel){
    const variavelBooleficada = Boolean(variavel);
    return variavelBooleficada;
}

function mostraMensagem(variavel){
    console.log("O valor " + "-- " + variavel + " --" + " Quando convertido para booleano é: " + booleficaVariaveis(variavel));

}

console.log("Primeiro as variaveis truthy");

mostraMensagem(truthy1);
mostraMensagem(truthy2);
mostraMensagem(truthy3);

console.log("Agora as variaveis falsy");

mostraMensagem(falsy1);
mostraMensagem(falsy2);
mostraMensagem(falsy3);