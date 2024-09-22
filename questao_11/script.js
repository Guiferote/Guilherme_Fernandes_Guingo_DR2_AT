const valorDoProduto = Number(prompt("Insira aqui o valor do produto: "));
const produtoEstaEmPromocao = (prompt("O produto está em promoção?" + "\n" + "Responda sim caso esteja"));
const isPromocao = (produtoEstaEmPromocao === "sim"? true: false);

function categorizaValorProduto(valorDoProduto, isPromocao){
    let categoria;

    if(valorDoProduto < 200 && !isPromocao){
        categoria = "Barato";
        return categoria;
    }
    else if(valorDoProduto > 200 && valorDoProduto << 3000 && isPromocao ){
        categoria = "Moderado";
        return categoria;
    }
    else if(valorDoProduto > 3000){
        categoria = "Caro";
        return categoria;
    }
    else{
        return;
    }
}

function mostraMensagemCategoria(categoria){
    if(categoria){
        alert("A categoria do seu produto é: " + categoria);
    }
    else{
        alert("O produto não se encaixa em nenhuma categoria");
    }
}


let categoria = categorizaValorProduto(valorDoProduto, isPromocao);

mostraMensagemCategoria(categoria);