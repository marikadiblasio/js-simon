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
    //Reset
    const btn = document.getElementById('userNumbers');//prendo bottone invia
    const userNumsBox = document.querySelectorAll('input[type=number]'); //prendo array di input
    for (let x of userNumsBox.values()) {
    x.value = '';}
    let seconds = 30;
    btn.classList.add('d-none');//nascondo i numeri
    let message = document.querySelector('h2');//prendo l'h2
    message.innerHTML = `Osserva i numeri qua sotto: hai <span id="seconds">30</span> secondi per memorizzarli`;
    let result = document.querySelector('h3');
    result.innerText = "";
    //Numeri casuali
    const pcNumbers = document.getElementById('pcNumbers'); //prendo il div
    pcNumbers.classList.remove('d-none');
    const numbers = generateNum();//genero i numeri
    pcNumbers.innerText = numbers; //inserisco i numeri nel div
    //Contdown
    const secondsBox = document.getElementById('seconds');//prendo lo span del countdown
    seconds = secondsBox.innerText; //selezioni il contenuto
    const countdown = setInterval(() => { //avvio la timing function (ogni secondo)
        seconds--; //decremento i secondi
        if (seconds === 0){ //arrivati a 0 
            clearInterval(countdown); //blocco il contdown
            //let message = document.querySelector('h2');//prendo l'h2
            message.innerText= `Inserisci i numeri che hai visto`;//cambio il contenuto dell'elemento
            pcNumbers.classList.add('d-none');//nascondo i numeri
            btn.classList.remove('d-none');//rendo visibile il form i numeri
        } else {
       secondsBox.innerText = seconds; //stampo a schermo i secondi
        }
    }, 1000);
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
/**
 * Prendo il bottone
 * attacco eventlistener
 * prendo score
 * prendo i numeri inseriti se numbers.includes(numeri inseriti) incremento score e stampa a schermo score e numeri giusti - stesso h3?)
 */
    //const btn = document.getElementById('userNumbers');//prendo bottone invia
    //userNumsBox = document.querySelectorAll('input[type=number]'); //prendo array di input
    
    btn.addEventListener('submit', function(e){
        e.preventDefault();//
        let score = 0;
        let rightNums = [];
        result.innerText="";
        for (let x of userNumsBox.values()) {//prendo il valore di ogni nodo della lista
            if (numbers.includes(parseInt(x.value))) { //prendo il valore di ogni input della lista
                score++; //aumento il punteggio
                rightNums.push(x.value);//inserisco i numeri nella variabile
            }  
        }
        if(rightNums.length === 0){
            result.innerText =`Mi dispiace, non hai ricordato alcun numero!`
        }else{
        result.innerText += `Hai ricordato i seguenti numeri: ${rightNums}. In totale hai ricordato ${score} numeri`;
        }
    })}
const start = document.getElementById('start');
start.addEventListener('click', play);
