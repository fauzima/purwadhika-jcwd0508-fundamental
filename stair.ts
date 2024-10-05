const n: number = 5
let asterisk: string = ""
for (let i = 1; i <= n; i++) {
    asterisk += "*"
    // console.log(`${asterisk}`) // or
    console.log("*".repeat(i))
} 

for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i))
}