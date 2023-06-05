function contar() { //função chamada no 'onclick' 
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    // ^ variaveis de atribuição de valores

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'

    } else {
       res.innerHTML = 'Contando: <br> '
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       /* ^ atribuindo o valor de Number (número), porque eles são atribuidos primeiramente
       como String (texto)*/
       
       if (p <= 0 ) {
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
       }

        if ( i < f) {
       for(let c = i; c <= f; c += p) {
        res.innerHTML += `${ c } \u{1F449}` 
       } // contagem crescente 
    } 
    
    else {
        for (let c = i; c >= f; c-= p) {
            res.innerHTML += `${c} \u{1F449}`
        }                          //^emoji
    } // contagem decrescente 
       res.innerHTML += `\u{1F3C1}`
    }  
}