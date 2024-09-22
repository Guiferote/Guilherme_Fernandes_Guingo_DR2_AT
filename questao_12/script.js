const anoAtual = Number(prompt("Insira aqui o ano atual: "));
const mesAtual = Number(prompt("Insira aqui o mês atual: "));
const idade = Number(prompt("Insira aqui a sua idade: "));
const mesesAteAniversario = Number(prompt(
    "Insira aqui quantos meses faltam para o seu aniversario:" + 
    "\n" + "Caso o seu aniversário já tenha passado, utilize números negativos!"));

const anoNascimento = anoAtual - idade;

//professor, essa parte na questão deveria ser feita em if/else mas não faz sentido para o codigo
//farei apenas a adição dos valores

const mesNascimento = mesAtual + mesesAteAniversario;

alert("O ano de nascimento é " + anoNascimento + " e o mês de nascimento é " + mesNascimento);