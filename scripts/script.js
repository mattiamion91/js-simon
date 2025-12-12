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

//chiedo all'utente di inserire i 5 numeri che deve avere memorizato

//verifico che i numeri inseriti siano corretti

//do risposta al giocatore