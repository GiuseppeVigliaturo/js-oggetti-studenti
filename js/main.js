// Oggetti
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Creo un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.

var studente = {
  "nome": "Giuseppe",
  "cognome": "Vigliaturo",
  "eta": 25
}
console.log(studente);

// Stampo a schermo attraverso il for in tutte le proprietà.
for (var dati in studente) {

console.log(studente[dati]);
}

// Creo un array di oggetti di studenti.

var arrayStudent = [{
  "nome": "giacomo",
  "cognome": "poretti",
  "eta": 52
},

 {
  "nome": "aldo",
  "cognome": "baglio",
  "eta": 53
},

{
  "nome": "giovanni",
  "cognome": "storti",
  "eta": 58
}];

;

// Ciclo su tutti gli studenti e stampo per ognuno nome e cognome
for (var i = 0; i < arrayStudent.length; i++) { //controllami tutto l'array
  console.log(arrayStudent[i].nome + " " + arrayStudent[i].cognome );
}


//  Do la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var name = prompt('Inserisci un nome');
var surname = prompt('Inserisci un cognome');
var age = prompt("Inserisci un'età");

//ora li pusho nell'array 
arrayStudent.push(
  {
    'nome' : name,
    'cognome' : surname,
    'età' : age
  }
);
