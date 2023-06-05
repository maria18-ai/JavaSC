var resultado = function res () {
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let resp = document.getElementById('res')

    if (num1.value == 0 || num2.value == 0) {
        alert("[ERRO] Por favor, digite um valor valido.")
        return
    }

    let soma = Number(num1.value) + Number(num2.value)
    resp.innerHTML =`A soma foi ${soma}`
    return soma
}

function exibirResultado() {
    document.getElementById('resultado').innerHTML= resultado()
}