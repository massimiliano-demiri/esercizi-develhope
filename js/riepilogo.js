
// In questo esercizio dato un array di studenti:

// Utilizza forEach per stampare i nomi degli studenti.
// Utilizza find per trovare uno studente con un voto superiore a 90.
// Utilizza reduce per calcolare la media dei voti degli studenti.
// Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// Utilizza filter per trovare gli studenti con voti superiori a 85.

const studenti = [
{ nome: "Alice", voto: 95 },
{ nome: "Bob", voto: 88 },
{ nome: "Carol", voto: 76 },
{ nome: "David", voto: 92 },
{ nome: "Eve", voto: 84 },
];

studenti.forEach(student => {
    console.log(student.nome);
})

const sup_a_nov = studenti.find(student => student.voto > 90);
console.log(sup_a_nov);

const sum = studenti.reduce((a, student) => a + student.voto, 0);
console.log(sum/studenti.length);

const newa = studenti.map(student => {
    return {nome : student.nome.toUpperCase()}
});
console.log(newa);

const filtered = studenti.filter(student => student.voto > 85);
console.log(filtered);