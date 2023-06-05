// RECUSIVIDADE
function fatorial (n) { // uma função chamando ela mesma
    if (n== 1) {
        return 1
    } else {
        return n* fatorial(n-1)

    }
}
console.log(fatorial(5))
//o fatorial de um numero pode ser calculado em base de outro
// 5! = 5 x !4