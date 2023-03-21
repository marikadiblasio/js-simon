/**
 * Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
 */
//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
/**
 * Creo html con h1, div con messaggio e bottone, (form input per la parte successiva)
 * Prendo il div, genero i numeri, inserisco i numeri nel div
 * Creo conto alla rovescia che parte al click sul bottone e stampo il contdown
 */

//Scrivo la funzione per generare i numeri
function generateNum(){
    const numbers =[]; //creo array vuoto
    while (numbers.length < 5){ //finchè ci sono 5 elementi nell'array
        const number = getRndNumIncl(1, 100);//genero un numero tra 1 e 100
        if(!numbers.includes(number)){ //se questo numero non è già nell'array
            numbers.push(number);//lo inserisco nell'array
        }
    }
    return numbers //ritorno l'array pieno
}

function play(){
    //Numeri casuali
    const pcNumbers = document.getElementById('pcNumbers'); //prendo il div
    const numbers = generateNum();//genero i numeri
    pcNumbers.innerText = numbers; //inserisco i numeri nel div
    //Contdown
    const secondsBox = document.getElementById('seconds');//prendo lo span del countdown
    let seconds = secondsBox.innerText; //selezioni il contenuto
    const countdown = setInterval(() => { //avvio la timing function (ogni secondo)
        seconds--; //decremento i secondi
       secondsBox.innerText = seconds; //stampo a schermo i secondi
        if (seconds === 0){ //arrivati a 0 
            clearInterval(countdown); //blocco il contdown
            let message = document.querySelector('h2');//prendo l'h2
            message.innerText= `Inserisci i numeri che hai visto`;//cambio il contenuto dell'elemento
            pcNumbers.classList.add('d-none');//nascondo i numeri
        } 
    }, 1000);

}
const start = document.getElementById('start');
start.addEventListener('click', play);