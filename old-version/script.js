//creo un countdown di 30 secondi

const countdown = document.getElementById('countdown'); //seleziono l'elemento
console.log(countdown);

let seconds = 30; //imposto la variabile da cui partirá il conteggio

countdown.innerText = seconds //gestisco la variabile secondi aggiorrnata in pagina

const clock = setInterval(() => {  //

    if (seconds === 0) { //SE i secondi sono ungali a 0...

        clearInterval(clock); //interrompo la ripetizione temporale

    } else { //Altrimenti... 

        seconds = seconds - 1; //decremento di 1 secondo

        countdown.innerText = seconds //inserisco in pagina output agironato secondi

    }

}, 1000)

//genero 5 numeri casuali che non si ripetono e rimangono visibili per 30 secondi

const generatedArray = (getArrRandomNumInRangeMaxEl(1, 50, 5)); //numeri generati con le funzioni
const displayArray = document.getElementById('display-array'); // seleziono il mio array generato
for (i = 0; i < generatedArray.length; i++) { //ciclo tutti nomi contenuti nell'array

    displayArray.innerHTML += `<h2>${generatedArray[i]}</h2>` //stampo e creo in pagina deli nuovi <li> con all'interno i numeri generati
    console.log(generatedArray[i]); //stampo in console i nomi separati

}

setTimeout(function () { //imposto un timeout che...
    displayArray.classList.add("d-none"); //mi aggiunga la classe BS al mio div e lo nascond...
}, 31000); // dopo 30sec


//chiedo all'utente di inserire i 5 numeri che deve avere memorizato

const playerNumbers = document.getElementById('player-numebers') //seleziono il mio elemento
setTimeout(function () { //imposto un timeout che...
    playerNumbers.classList.remove("d-none"); //mi tolgie la classe BS al mio div e lo fa apparire...
}, 31000); // dopo 30sec

//seleziono il form

const form = document.querySelector('form');

//elaborazione

playerNumbers.addEventListener('submit', (e) => {
    e.preventDefault() //blocco comportamento base del form

    console.log("submit") //check evento submit

    //seleziono campi input

    const firstGuess = document.getElementById('first-guess')
    const secondGuess = document.getElementById('second-guess')
    const thirdGuess = document.getElementById('third-guess')
    const fourthGuess = document.getElementById('fourth-guess')
    const fifthGuess = document.getElementById('fifth-guess')
})

//verifico che i numeri inseriti siano corretti

//do risposta al giocatore






//funzioni

function getArrRandomNumInRangeMaxEl(minNum, maxNum, totNum) { //funzione cre generi un array di numeri casuali in un determinato range

    const randomArr = []; //arr vuoto in cui verrano pushiati i numero generati

    while (randomArr.length < totNum) { //uso un cilo while che esegue il codice fino a che la condizione non é false

        const randomNum = getRandomNumberInRange(minNum, maxNum); //imposto costante che genera un numero invocando la funzione creta

        if (!randomArr.includes(randomNum)) { //SE il numero generato NON fa gia parte dell'arr allora lo pusho dentro l'arr

            randomArr.push(randomNum);
        }

    }

    return randomArr
}

function getRandomNumberInRange(min, max) { //funzione che miritorni un numero random tra due valori dati

    return Math.floor(Math.random() * (max - min + 1)) + min;
}