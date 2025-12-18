// --- CONFIGURAZIONE ---
const SETTINGS = {
    totalNumbers: 5,
    min: 1,
    max: 50,
    time: 5
};

// --- ELEMENTI DOM ---
const countdownEl = document.getElementById('countdown');
const numbersListEl = document.getElementById('numbers-list');
const formEl = document.getElementById('answers-form');
const inputsContainer = document.getElementById('inputs-container');
const resultEl = document.getElementById('result');

// --- LOGICA DEL GIOCO ---

// 1. Genera numeri unici
const secretNumbers = [];
while (secretNumbers.length < SETTINGS.totalNumbers) {
    const n = Math.floor(Math.random() * SETTINGS.max) + SETTINGS.min;
    if (!secretNumbers.includes(n)) secretNumbers.push(n);
}

// 2. Mostra numeri a schermo
secretNumbers.forEach(num => {
    numbersListEl.innerHTML += `<h2>${num}</h2>`;
});

// 3. Timer e Transizione
let timer = SETTINGS.time;
const interval = setInterval(() => {
    timer--;
    countdownEl.innerText = timer;

    if (timer === 0) {
        clearInterval(interval);
        startGamePhase();
    }
}, 1000);

// 4. Passaggio alla fase di input
function startGamePhase() {
    document.getElementById('game-area').classList.add('d-none');
    formEl.classList.remove('d-none');

    // Crea gli input dinamicamente
    for (let i = 0; i < SETTINGS.totalNumbers; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'form-control mb-2 text-center';
        input.required = true;
        inputsContainer.appendChild(input);
    }
}

// 5. Verifica Risultati
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const userGuesses = Array.from(inputsContainer.querySelectorAll('input'))
                             .map(input => parseInt(input.value));

    const guessed = userGuesses.filter(n => secretNumbers.includes(n));
    
    showFinalResult(guessed);
});

function showFinalResult(correctOnes) {
    formEl.classList.add('d-none');
    const isWin = correctOnes.length === SETTINGS.totalNumbers;
    
    resultEl.innerHTML = `
        <div class="alert ${isWin ? 'alert-success' : 'alert-info'}">
            <h3>${isWin ? 'Campione!' : 'Poteva andare meglio'}</h3>
            <p>Hai indovinato ${correctOnes.length} numeri su ${SETTINGS.totalNumbers}.</p>
            <p>I numeri erano: ${secretNumbers.join(' - ')}</p>
            <button onclick="location.reload()" class="btn btn-outline-dark btn-sm">Rigioca</button>
        </div>
    `;
}