//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let km;
let etá;
let result;


while(isNaN(km) || isNaN(etá)){
    km = parseInt(prompt('Inserire i km da percorrere'));
    etá = parseInt(prompt('Inserire la proprio etá'))
}

const basePrice = 0.21 * km;

if(etá < 18){
    result = (basePrice - (basePrice * 20 / 100)).toFixed(2);
    document.getElementById('testo').innerHTML = result;
}else if(etá >= 65){
    result = (basePrice - (basePrice * 40 / 100)).toFixed(2);
    document.getElementById('testo').innerHTML = result;
}else{
    result = basePrice.toFixed(2);
    document.getElementById('testo').innerHTML = result;
}