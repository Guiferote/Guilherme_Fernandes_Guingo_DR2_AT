const diaDaSemanaEmNumero = Number
(prompt(
    "Escolha um dia da semana utilizando numeros de 1 a 7" + "\n" +
    "Considere 1 para segunda e 7 para domingo"
));

function retornaDiaDaSemanaPorExtenso(diaSemana){
    switch (diaSemana) {
        case 1:
            return "Segunda";
        break;

        case 2:
            return "Terça";
        break;

        case 3:
            return "Quarta";
        break;

        case 4:
            return "Quinta";
        break;

        case 5:
            return "Sexta";
        break;

        case 6:
            return "Sabado";
        break;

        case 7:
            return "Domingo";
        break;
        
    
        default:

            return;

            break;
    }
}


function mostraDiaSemana(diaPorExtenso){
    if(diaPorExtenso){
        console.log("O seu dia por extenso é: " + diaPorExtenso + "!!!");
    }
    else{
        console.log("Insira apenas numeros de 1 a 7 por favor!");
    }

}

const diaPorExtenso = retornaDiaDaSemanaPorExtenso(diaDaSemanaEmNumero);
mostraDiaSemana(diaPorExtenso);