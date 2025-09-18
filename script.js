// Part 2: Scope demo
let globalVar = "I'm global!";

function showScopeDemo() {
    let localVar = "I'm local!";
    document.getElementById('scopeResult').textContent =
        `Global: ${globalVar} | Local: ${localVar}`;
}

// Part 2: Function with parameters and return value
function calculateSum(a, b) {
    return a + b;
}

function calculateAndShow(x, y) {
    const result = calculateSum(x, y);
    document.getElementById('calcResult').textContent =
        `Sum: ${result}`;
}

// Part 3: Animate box with JS
function animateBox(boxId) {
    const box = document.getElementById(boxId);
    box.classList.add('animate');
    setTimeout(() => box.classList.remove('animate'), 1000);
}

// Part 3: Modal popup animation
function toggleModal() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('show');
}