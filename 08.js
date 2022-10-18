// Rozszerzenie zadania 4.
//  Aplikacja powinna wczytać jedną liczbę z pliku a.txt, drugą liczbę z pliku b.txt.
// Na tych liczbach należy wykonać operacja dodawania, odejmowania, mnożenia i dzielenia a wyniki wszystkich działań zapisać w pliku wynik.txt, 
// każdy wynik w osobnej linii. Należy wykorzystać moduł Core'owy File system 
// (https://nodejs.org/dist/latest-v16.x/docs/api/fs.html , szukana funkcja ma przyrostek Sync)


const calc = require("./math.js");
const fs = require("fs");


// for reading file 'q.txt'
const a = fs.readFileSync('./a.txt', { encoding: 'utf8', flag: 'r' });
const aAsNumber = Number(a);

// for reading file 'b.txt'
const b = fs.readFileSync('./b.txt', { encoding: 'utf8', flag: 'r' });

console.log("Dodawanie a+b= " + calc.add(a, b));
console.log("Odejmowanie a-b= " + calc.sub(a, b));
console.log("Mnożenie a*b= " + calc.mul(a, b));
console.log("Dzielenie a/b= " + calc.div(a, b));


// zapisanie do wynik.txt
let data = "";
data += "\nDodawanie a+b= " + calc.add(a, b);
data += "\nOdejmowanie a-b= " + calc.sub(a, b);
data += "\nMnozenie  a*b= " + calc.mul(a, b);
data += "\nDzielenie  a*b= " + calc.div(a, b);


fs.writeFileSync("wynik.txt", data);

