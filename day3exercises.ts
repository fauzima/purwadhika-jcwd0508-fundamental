// ---01. MULTIPLICATION TABLE--- done

const num1: number = 9

for (let i = 1; i <= 10; i++) {
    console.log(`${num1} x ${i} = ${num1 * i}`)
}

// ---02. PALINDROME CHECKER--- done

const str2: string = "madam"
const lower: string = str2.toLowerCase()
const rvrs: string = lower.split("").reverse().join("")

console.log(lower === rvrs ? `${str2} is a palindrome` : `${str2} is not a palindrome`)

// or

let rvrs1: string = ""

for (let i = lower.length - 1; i >= 0; i--) {
    rvrs1 += lower.charAt(i)
}

console.log(lower === rvrs1 ? `${str2} is a palindrome` : `${str2} is not a palindrome`)

// or

const str2a: string = "Kasur haji Ijah rusak."
const lettersonly: string = str2a.toLowerCase().replaceAll(",","").replaceAll(".","").replaceAll(" ","")
const rvrs2: string = lettersonly.split("").reverse().join("")

console.log(lettersonly)
console.log(rvrs2)

console.log(rvrs2 === lettersonly ? `${str2a} is a palindrome` : `${str2a} is not a palindrome`)

// ---03. CM TO KM CONVERTER--- done

const num3: number = 123456

// console.log (num3 + " cm = " + num3/100000 + " km")
console.log (`${num3} cm = ${num3/100000} km`)

// ---04. NUMBER TO CURRENCY CONVERTER--- done

const num4: number = 654321

console.log(num4.toLocaleString("id-ID", { style: 'currency', currency: 'IDR'}))

// or

const numstr: string = num4.toString()
let count: number = 0

let res4: string = ""

for (let i = numstr.length - 1; i >= 0; i--) {
    if (count % 3 == 0 && count > 0) {
        res4 = "." + res4
    }
    res4 = numstr.charAt(i) + res4
    count++
    console.log(res4)
}

console.log(`Rp ${res4},00`)

// ---05. REMOVE A CERTAIN STRING FROM A STRING--- done

const str5: string = "Hello World"

console.log(str5.replaceAll("ell",""))

// ---06. CAPITALIZE EVERY FIRST LETTERS OF EACH WORDS IN A STRING--- done

const str6: string = "the quick brown fox jumps over a lazy dog"
const cap1: string = str6.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

console.log(cap1)

// or

let cap2: string = ""

for (let i = 0; i < str6.length; i++) {
    if (i == 0 || str6.charAt(i - 1) == " ") {
        cap2 += str6.charAt(i).toUpperCase()
    } else {
        cap2 += str6.charAt(i).toLowerCase()
    }
}

console.log(cap2)

// ---07. SWAP CASE OF EVERY CHARACTERS IN A STRING--- done

const str7: string = "The QuiCk BrOwN Fox"
let swap1: string = ""

str7.split("").map(letter => {
    if (letter == letter.toUpperCase()) {
        swap1 += letter.toLowerCase()
    } else {
        swap1 += letter.toUpperCase()
    }
})

console.log(swap1)

// or

let swap2: string = ""

for (let i = 0; i < str7.length; i++) {
    if (str7.charAt(i) == str7.charAt(i).toUpperCase()) {
        swap2 += str7.charAt(i).toLowerCase()
    } else {
        swap2 += str7.charAt(i).toUpperCase()
    }
}

console.log(swap2)

// ---08. FIND THE LARGEST OF TWO GIVEN INTEGERS--- done

const num8a: number = 12
const num8b: number = 42

if (num8a < num8b) {
    console.log(`${num8a} is smaller than ${num8b}`)
} else if (num8a > num8b) {
    console.log(`${num8a} is bigger than ${num8b}`)
} else if (num8a == num8b) {
    console.log(`${num8a} is equal to ${num8b}`)
}

// ---09. CONDITIONAL STATEMENT TO SORT THREE NUMBERS---

const num9a: number = 42
const num9b: number = 18
const num9c: number = 27

// ---10. DATA TYPE CHECKER--- done

const inp10:any = "Hello"

const disp10 = typeof(inp10)

if (typeof(inp10) == "string" ) {
    console.log(`${inp10} (${disp10}) --> 1`)
} else if (typeof(inp10) == "number" ) {
    console.log(`${inp10} (${disp10}) --> 2`)
} else {
    console.log(`${inp10} (${disp10}) --> 3`)
}

// ---11. CHANGE A CERTAIN STRING FROM A STRING--- done

const str11: string = "An apple a day keeps the doctor away"

console.log(str11.replaceAll("A", "*").replaceAll("a", "*"))

// or

console.log(str11.replace(/a/gi, "*")) // regEx

const letter: string = "Hello@ Stu?dent Purwa4dhika"
console.log(letter.replace(/[a-zA-Z\s]/g, ""))