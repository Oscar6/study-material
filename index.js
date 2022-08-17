let saveBtn = document.getElementById("save-el")
let countBtn = document.getElementById("count-el")
let snacks = 0

function increment() {
    snacks += 1
    countBtn.textContent = snacks
}

function save() {
    let snacksCount = snacks + " - "
    saveBtn.textContent += snacksCount
    countBtn.textContent = 0
    snacks = 0
}

