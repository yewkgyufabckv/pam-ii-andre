const testeImparpar = (n) => {
    let calculoTeste = n % 2

    if (calculoTeste == 1) {
        return "Número Impar"
    } else {
        return "Número Par"
    }
}

console.log(testeImparpar(17))
console.log(testeImparpar(64))
console.log(testeImparpar(1500))