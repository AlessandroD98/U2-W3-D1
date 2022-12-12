/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// console.log("----------------ESERCIZIO 1----------------");

// function area(l1, l2) {
//   return l1 * l2;
// }
// let result = area(2, 4);
// console.log("L'area è" + " " + result);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// console.log("----------------ESERCIZIO 2----------------");

// function crazySum(num1, num2) {
//   if (num1 !== num2) {
//     return num1 + num2;
//   }
//   if (num1 === num2) {
//     return (num1 + num2) * 3;
//   }
// }

// let result = crazySum(3, 2);
// console.log(result);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

// console.log("----------------ESERCIZIO 3----------------");

// function crazyDiff(num) {
//   if (num <= 19) {
//     return Math.abs(num - 19);
//   }
//   if (num > 19) {
//     return (num - 19) * 3;
//   }
// }

// let result = crazyDiff(4);
// console.log(result);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// console.log("----------------ESERCIZIO 4----------------");

// function boundary(n) {
//   if ((n >= 20 && n <= 100) || n === 400) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let result = boundary(19);
// console.log(result);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// console.log("----------------ESERCIZIO 5----------------");

// function epify(str) {
//   let arr = str.split(" ");
//   if (arr[0] !== "Epicode") {
//     return "Epicode" + " " + str;
//   } else {
//     return str;
//   }
// }

// let frase = epify("Epicode se vuoi divenatre web developer!");
// console.log(frase);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// console.log("----------------ESERCIZIO 6----------------");

// function check3and7(n) {
//   if (n % 3 === 0 && n % 7 === 0) {
//     return "Divisibile per 3 e per 7";
//   }
//   if (n % 3 === 0 || n % 7 === 0) {
//     return "Divisibile per 3 o 7";
//   } else {
//     return "Non divisibile per 3 o 7";
//   }
// }

// console.log(check3and7(14));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// console.log("----------------ESERCIZIO 7----------------");

// function reverseString(str) {
//   let newstr = str.split("");
//   console.log(newstr);
//   let rstr = newstr.reverse();
//   console.log(rstr);
//   let fstr = rstr.join("");
//   console.log(fstr);
// }

// finalrevers = reverseString("Alessandro");
// console.log(finalrevers);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// console.log("----------------ESERCIZIO 8----------------");

// function upperFirst(string) {
//   const words = string.split(" ");

//   let upparole = [];

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];

//     const firstletter = word.charAt(0).toUpperCase();
//     const otherletters = word.slice(1);
//     const pgrande = firstletter + otherletters;

//     upparole.push(pgrande);
//   }
//   console.log(upparole.join(" "));
// }

// console.log(upperFirst("ciao come va?"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("----------------ESERCIZIO 9----------------");

function cutString(string) {
  let lettersarr = string.split("");
  console.log("primo array", lettersarr);
  let firsandlastremoved = lettersarr.slice((start = 1), (end = lettersarr.length - 1));
  console.log("rimosse inizio e fine", firsandlastremoved);
  let result = firsandlastremoved.join("");
  return result;
}

console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("----------------ESERCIZIO 10----------------");
