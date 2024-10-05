// ---EXAMPLE---

function maximum(input: number[]) {
    let value: number = 0
    for (let i = 0; i < input[i]; i++) {
        if (value < input[i]) {
            value = input[i]
        }
    } return value
}

console.log(maximum([10, 55, 79, 32]))

// ---01. NUMBER PYRAMID---

function pyramid(n: number) {
    let a: string = ""
    for (let i = 1; i <= n; i++) {
        let b: string = ""
        for (let j = 1; j <= i; j++) {
            b += `${j}`
        }
        if (i !== n) b += '\n'
        a += b
    }
    return a
}

console.log (pyramid (5))