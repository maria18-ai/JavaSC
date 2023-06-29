const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const oddNumbers =  randomNumbers.filter(number => {
    return number % 2 !== 0
})

console.log(oddNumbers);
