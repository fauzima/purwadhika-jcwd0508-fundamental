
// ---------------------------------------------------------------------------------------
const length: number = 5
const width: number = 3

const area: number = length * width

console.log(area)

// ---------------------------------------------------------------------------------------
const perimeter: number = (length + width) * 2

console.log(perimeter)

// ---------------------------------------------------------------------------------------
const radius: number = 5
const pi: number = 3.14159265359

const diameter: number = radius * 2
const circumference: number = pi * diameter
const areacirc: number = pi * (radius ** 2)

console.log(diameter)
console.log(circumference.toFixed(4))
console.log(areacirc.toFixed(4)) 

// ---------------------------------------------------------------------------------------
const a1: number = 80
const a2: number = 65

const a3: number = 180 - a1 - a2

console.log(a3)

// ---------------------------------------------------------------------------------------
const days: number = 400

const ayear: number = 365
const amonth: number = 30

const ym: number = days % ayear
const year: number = (days / ayear) - (ym / ayear)
const month: number = (ym / amonth) - ((ym % amonth) / amonth)
const day: number = (ym % amonth)

console.log(year.toFixed(0) + " year, " + month.toFixed(0) + " month, " + day.toFixed(0) + " day")

// ---------------------------------------------------------------------------------------
const date1: Date = new Date("2022-01-20")
const date2: Date = new Date("2022-01-22")

const diff: number = ((date1.getTime() - date2.getTime()) ** 2) ** 0.5
const diffdays: number = diff / (1000 * 3600 * 24)

console.log(diffdays)