
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
  
var student = {
    name: " ",
    surname: " ",
    age: 0
};

for (var key in student) {
    console.log(key + " " + student[key]);
}
  
//Creare un array di oggetti di studenti.
  
var students = [{
    name: "Marco",
    surname: "Rossi",
    age: 22
    },
    {
    name: "Sefano",
    surname: "Verdi",
    age: 31
    },
    {
    name: "Maria",
    surname: "Bianchi",
    age: 18
    },
    {
    name: "Franco",
    surname: "Neri",
    age: 27
    }
  
];
  
//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato.
var newStudent = student;
newStudent.name = prompt("inserisci il tuo Nome");
newStudent.surname = prompt("inserisci il tuo Cognome");
newStudent.age = parseInt(prompt("inserisci la tua età"));
students.push(newStudent);
console.table(students);
  
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < students.length; i++) {
    var studentsList = students[i];
    console.log(studentsList.name + " " + studentsList.surname);
}
