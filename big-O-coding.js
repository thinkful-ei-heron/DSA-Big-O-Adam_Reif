// 11. Tower of Hanoi




// 12. Iterative versions of previous checkpoint

    // 1. Counting Sheep
const countSheep = function(num) {
    for (let i = num; i >= 0; i--) {
        if (i <= 0) {
            return (`All sheep jumped over the fence`)
        }
        console.log(`${i}: Another sheep jumps over the fence`)
    }
}
console.log(countSheep(3))
// Linear time O(n)


    // 2. Power Calculator
const powerCalculator = function(base, exponent) {
    let power = 1
    let i = 1
    if (exponent < 0) {
        return 'exponent should be >=0'
    }
    while (i <= exponent) {
        power = power * base
        i++
    }
    return power
    
}
console.log(powerCalculator(10, 3))
// Linear time O(n)


    // 3. Reverse String
const reverseString = function(string) {
    let newString = ''
    for (let i = string.length; i >= 0; i--) {
        newString = newString + string.charAt(i)
    }
    return newString
}
console.log(reverseString('hello'))
// Linear time O(n)

    // 4. nth Triangular Number
const nthTriNumber = function(n) {
    let triNumber = 0
    for (let i = 1; i <= n; i++) {
        triNumber = triNumber + i
    }
    return triNumber
}
console.log(nthTriNumber(6))
// Linear time O(n)


    // 5. String Splitter
const strSplitter = function(string) {
    let returnArray = []
    let toPush = ''
    let separator = '/'
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === separator) {
            returnArray.push(toPush)
            toPush = ''
        }
        else {
            toPush = toPush + string.charAt(i)
        }
    }
    returnArray.push(toPush)
    return returnArray
}
console.log(strSplitter('02/20/2020'))
// Linear time O(n)


    // 6. Fibonacci
const fibonacci = function(num) {
    let sequence = []
    if (num <= 0) {
        return 0
    }
    for (let i = 1; i <= num; i++) {
        let toPush = null
        if (i === 1) {
            toPush = 1
        }
        if (i === 2) {
            toPush = 1
        }
        if (i > 2) {
            toPush = sequence[i - 2] + sequence[i - 3]
        }
        sequence.push(toPush)
    }
    return sequence
}
console.log(fibonacci(7))
// Linear time O(n)


    // 7. Factorial
const factorial = function(n) {
    let result = 1
    for (let i = n; i > 0; i--) {
        if (i === 1) {
            result = result
        }
        result = result * i
    }
    return result
}
console.log(factorial(5))
// Linear time O(n)
