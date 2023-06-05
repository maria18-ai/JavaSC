let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#selnum')
let res = document.querySelector('div#res')
let valores = [] //vetor onde vão ficar os números digitados no input 

function inNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return  true
    } else {
        return false
    }
} /* função para saber se o valor digitado segue as normas */

function inLista (n , l) {
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}  /* função para saber qual valor já foi listado*/

function adicionar () { //criação da lista 
   if (inNumero(num.value) && !inLista(num.value , valores)) {
    valores.push(Number(num.value)) // 'push' acresenta os números digitados no vetor 
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    //criação dos valores na lista
   } else {
    window.alert('[ERRO] Valor invalida ou já encontrado na lista.')
   }
   num.value = ''
   num.focus() //focar o mouse no input 
}

function finalizar () { // criação das informações finais 
    if (valores.length == 0 ) {
        window.alert('[ERRO] Digite um valor para continuar')
    } else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0 

        for (let pos in valores) { //achar menor e maior (!sintax com erro!)
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram cadastrados ${tot} valores</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores foi ${soma}</p>`
        res.innerHTML += `<p>A media dos valores foi ${media}</p>`
    }
        

}