
// Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
// Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.

function sumx(...arguments){
    return arguments.reduce((a, argument)=> a + argument, 0);
}

console.log(sumx(3, 4));
