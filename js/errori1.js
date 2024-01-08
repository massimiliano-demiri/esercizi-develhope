
// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

function performOperation(a, b, callback) {
if (isNaN(a) || isNaN(b)){
    callback(new Error("Uno dei due elementi non corrisponde ad un numero"), 'null');
} else {
    callback(null, (a+b))
}
}

function displayResult(error, data) {
    if (error){
        console.log("Non è possibile eseguire l'operazione");
    } else {
        console.log(data);
    }

}

performOperation(5, 'f', displayResult);

