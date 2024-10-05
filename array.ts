// ---ARRAYS---

const arr: Array<string> = ["A", "B", "C"]
const arr2: string[] = new Array("A", "B", "C") 

console.log(arr)
console.log(arr2)
console.log(arr.length)

arr.push("D") // nambah di belakang
console.log(arr)

arr.unshift("E") // nambah di depan
console.log(arr)

arr.pop() // ngapus di belakang
console.log(arr)

arr.shift() // ngapus di depan
console.log(arr)

arr.splice(1, 1) // ngapus index ke-n
console.log(arr)

arr.splice(1, 0, "Z", "p") // nambah index ke-n
console.log(arr)

// ---SORTING---

const numarr: number[] = [1, 3, 2, 100, 21, 2.1]

numarr.sort((a, b) => a - b) // ascending sort
console.log(numarr)

numarr.sort((a, b) => b - a) // descending sort
console.log(numarr)

numarr.sort() // numerical sort
console.log(numarr)

arr.sort() // alphabetical sort
console.log(arr)

arr.sort().reverse() // reverse alphabetical sort
console.log(arr)

const oddnum: number[] = numarr.filter(item => item % 2 == 1).sort((a, b) => a - b) // odd number filter
console.log(oddnum)

const evennum: number[] = numarr.filter(item => item % 2 == 0).sort((a, b) => a - b) // even number filter
console.log(evennum)

console.log(oddnum. find(item => item == 3))
console.log(oddnum. findIndex(item => item == 21))
console.log(oddnum. includes(3))

const str: string = "kasur rusak"

console.log(str.split("").reverse().join(""))

const newarr: number[] = [10, 20, 30, 40, 50]

newarr.forEach((a, b) => {
    console.log(a, b)    
})

const newarr2: number[] = newarr.map(a => a += 5)
console.log(newarr2)

const newarr3: number[] = []
newarr.forEach(a => {
    newarr3.push(a + 5)
})

console.log(newarr3)

for (let i of newarr) {
    console.log(i)
}

// ---FUNCTION---

// function decleration; berlaku di semua tempat.
function reversestr(input: string) {
    return input.split("").reverse().join("")
}

console.log(reversestr("Hello World"))

function greeting(name: string) { // name is a parameter.
    const hello: string = "Ciao"
    return `${hello} ${name}`
}

console.log(greeting("David")) // David is an argument.

function multiply (a: number, b: number = 1) { // default parameter.
    return a * b
}

console.log(multiply(5, 2))
console.log(multiply(5))

// function expression; berlaku hanya pada di line di bawah function ditulis.
const sum = function (a: number = 0, b: number = 0, ...others: number[]) { // ...others is a rest parameter.
    console.log(others)
    return a + b
}

console.log(sum(3, 10, 1, 2, 3, 4, 5))

function myfunc (a: string, b: string, ...others: string[]) {
    console.log("a", a)
    console.log("b", b)
    console.log("others", others)
    return
}
 myfunc("s", "d")

 function getmessage(firstname: string) { // nested function
    function sayhello() {
        return `Hello, ${firstname}. `
    }
    function welcomemessage() {
        return `Welcome to Purwadhika!`
    }
    return sayhello() + welcomemessage()
}

console.log(getmessage("David"))

function countdown(fromnumber: number) { // recursive function
    console.log(fromnumber)
    
    let nextnumber: number = fromnumber - 1
    
    if (nextnumber > 0) {
        countdown(nextnumber)
    }
}

countdown(20)

