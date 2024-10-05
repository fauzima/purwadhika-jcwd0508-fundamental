let pesan: string = "Hello World"
let pesanUpper: string = pesan.toUpperCase()

// console.log(pesan.replace("e", "a")) //replace cuma paling depan aja, kalo mau semuanya mesti diulang beberapa kali atau mesti pake replace all
// console.log(pesan.replace("o", "a").toUpperCase()) // replaceAll udah depreciated, alternatif pake regex tapi diajarinnya nanti

// console.log(pesan.concat(pesanUpper))

const firstName: string = "John" // pesannya Hello David, Welcome to Purwadhika!
// console.log(`Hello ${firstName}, Welcome to Purwadhika!`) // Template literals pengganti concat
console.log("Hello " + firstName + ", Welcome to Purwadhika") // alternatif lain lagi