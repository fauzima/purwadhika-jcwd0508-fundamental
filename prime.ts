// ---PRIME---

const num2: number = 17
let result2: boolean = true

if (num2 == 1) {
    result2=false
} else if (num2 > 1) {
    for (let i = 2; i <= num2/2; i++) {
        if (num2 % i == 0) {
            result2 = false
        }
        console.log(i)
    }
}

if (result2) {
    console.log ((`${num2} is a prime number`))
}   else {
    console.log ((`${num2} is not a prime number`))
}

// -----------

let divider: number = 0

for (let i = 1; i <= num2; i++) {
    if (num2 % i == 0) {
        divider++
    }
    console.log(i)
    console.log(divider)
}

if (divider == 2) {
    console.log ((`${num2} is a prime number`))
}   else {
    console.log ((`${num2} is not a prime number`))
}