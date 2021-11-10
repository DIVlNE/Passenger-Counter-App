// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let resetButton = document.querySelector("#reset-btn")

function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - " 
    saveEl.textContent += countStr
}

function reset() {
    count = 0;
    document.getElementById('count-el').innerHTML = 0;
}
