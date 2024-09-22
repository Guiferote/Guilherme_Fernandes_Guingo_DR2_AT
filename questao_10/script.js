const idadeUsuario = Number(prompt("Insira a sua idade aqui: "));
let respostaUsuarioPremium = prompt("Você é um usuario premium?" + "\n" + "Responda com Sim ou Não").toLowerCase();
let isPremium

if(respostaUsuarioPremium === "sim"){
    isPremium = true;
}
else if(respostaUsuarioPremium === "não"){
    isPremium = false;
}
else{
    alert("Responda apenas com sim ou não");
}

const isAcessoConcedido = (idadeUsuario >= 21 && isPremium? true: false);

if(isAcessoConcedido){
    console.log("Acesso concedido: " + isAcessoConcedido + "\n" + "Seja bem vindo!");
}
else{
    console.log("Acesso concedido: " + isAcessoConcedido + "\n" + "Sinto muito :(");
}
console.log(isAcessoConcedido);