// ---EVEN OR ODD---

const num1: number = 3

const result1: number = num1 % 2

console.log(result1 == 0 ? "Even" : "Odd")

if (result1 == 0) {
    console.log(`${num1} is an even number`)
}
else if (result1 !== 0) {
    console.log(`${num1} is an odd number`)
}

// ---PRIME---

const num2: number = 1
let result2: boolean = true

if (num2 == 1) {
    result2=false
} else if (num2 < 1) {
    for (let i = 2; i <= num2/2; i++) {
        if (num2 % i == 0) {
            result2 = false
            break
        }
    }
}

if (result2) {
    console.log ((`${num2} is a prime number`))
}   else {
    console.log ((`${num2} is not a prime number`))
}

// ---SUM---

const num3: number = 8
let result3: number = 0
let desc3: string = ""

for (let i = 1; i <= num3; i++) {
    result3 += i
    if (i == 1) {
        desc3 += "1"
    } else {
        desc3 += ` + ${i}`
    }
}

console.log(result3)
console.log(`${desc3} = ${result3}`)


// ---FACTORIAL---

const num4: number = 6
let result4: number = 1
let desc4: string = ""

for (let i = 1; i <= num4; i++) {
    result4 *= i
    if (i == 1) {
        desc4 += "1"
    } else {
        desc4 += ` * ${i}`
    }
}
console.log(result4)
console.log(`${desc4} = ${result4}`)

// ---FIBONACCI---

const num5: number = 10
let n1: number = 0
let n2: number = 1
let n3: number = n2

for (let i = 1; i <= num5; i++) {
    n3 = n1 + n2
    n1 = n2
    n2 = n3
}
console.log(n1)
console.log(n2)
console.log(n3)