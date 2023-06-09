const squareDigits = num => {
    let numArr = num.toString().split('')
    for (let i = 0; i < numArr.length; i++) {
        numArr[i] = numArr[i] * numArr[i]
    }
    return +numArr.join('')
}

console.log(squareDigits(9119)) // 811181