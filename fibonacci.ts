const num5: number = 15
let n1: number = 0
let n2: number = 1
let n3: number = n1 + n2

for (let i = 1; i <= num5; i++) {
    n3 = n1 + n2
    n1 = n2
    n2 = n3
    console.log(n1)
}
console.log(n1)
console.log(n2)
console.log(n3)