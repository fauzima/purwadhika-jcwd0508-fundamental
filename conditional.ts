// ---IF---

let age: number = 0

if (age >= 17) {
    console.log("You can now create an ID card")
}
else if (age >= 13) {
    console.log("lel")
}
else {
    console.log("lmao")
}

// ---SWITCH---

const date: Date = new Date("2024-10-02")
const day: number = date.getDay()

// console.log(day)

switch (day) {
    case 0:
        console.log("Minggu")
        break
    case 1:
        console.log("Senin")
        break
    case 2:
        console.log("Selasa")
        break
    case 3:
        console.log("Rabu")
        break
    case 4:
        console.log("Kamis")
        break
    case 5:
        console.log("Jumat")
        break
    case 6:
        console.log("Sabtu")
        break
    default:
        console.log("Invalid!")
}

// ---BOOLEAN---

console.log(Boolean(""))

const x: number = 6
const y: number = 3

console.log(Boolean(x < 10 && y > 1))
console.log(Boolean(!(x == 10 || y == 1)))
console.log(Boolean(!(x == y)))

// ---TERNARY---

const str: string = "TypeScript"

if (str === "TypeScript") {
    console.log("TypeScript")
}   else {
    console.log("Not TypeScript")
}

console.log(str === "TypeScript" ? "TypeScript" : "Not TypeScript")

// ---SHORT-CIRCUITING---

const value: string = ""
const result: string = value && "Not Empty"
const results: string = value || "Empty"

console.log(result)
console.log(results)

// =====LOOP=====

// ---FOR---

for (let i = 0; i < 3; i++) {
    console.log(`Hello ke-${i}`)
}
for (let i = 8; i >= 0; i -= 2) {
    console.log(`Hello ke-${i}`)
}

// ---CONTINUE---

for (let i = 0; i < 5; i++) {
    if (i == 3) continue
    console.log(`Hello ke-${i}`)
}

// ---WHILE---

let whilenum: number = 1

while (whilenum <= 5) {
    console.log(`Hello ke-${whilenum}`)
    whilenum++
}

// ---BREAK---

let breaknum: number = 5

while (true) {
    console.log(`Hello ke-${breaknum}`)
    if (breaknum == 1) break
    breaknum--
}

// ---DO---

do { // whilenum lanjut nari WHILE
    console.log(`Hello ke-${whilenum}`)
    whilenum++
}   while (whilenum <= 10)

