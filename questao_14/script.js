function comparaStringCaseInsensitive(strA, strB){
    strA = strA.toLowerCase();
    strB = strB.toLowerCase();

    return (strA = strB? true: false);
}

console.log(comparaStringCaseInsensitive("Teste", "teste"));
console.log(comparaStringCaseInsensitive("TEstE", "teSTe"));
console.log(comparaStringCaseInsensitive("TESTE", "teste"));
console.log(comparaStringCaseInsensitive("TeStE", "tEsTe"));