// -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.

function checkAge(age){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (age > 18){
                resolve("Ok");
            } else {
                reject("Not Ok");
            }

        }, 2000);
    });
}

const check = checkAge(19).then((data)=>{
    console.log("Maggiorenne");
})
.catch((data)=>{
    console.log("Minorenne")
});