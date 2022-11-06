
// ZADANIE 9 - ZALICZENIE 

// Obsługa parametrów wejściowych. Aplikacja złożona jest z 1 pliku: app.js. 
// Podczas uruchamiania aplikacji możemy przekazać jej dodatkowy parametr, który zostanie wyświetlony po komunikacie hello.
//  Gdy podanych będzie więcej parametrów, wtedy ignorujemy wszystkie prócz pierwszego. 
// Gdy nie będzie podanych żadnych parametrów aplikacja wyświetla hello world. Należy wykorzystać globalną zmienną: process.

const input = process.argv[2];

let text; 

if (input) {
    text = 'hello ' + input;
} else {
    text = 'hello world';
}
console.log(text); 



