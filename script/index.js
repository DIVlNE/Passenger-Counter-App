// document.getElementById("count-el").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// camelCase
let countEl = document.getElementById("count-el") // pass in arguments

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


