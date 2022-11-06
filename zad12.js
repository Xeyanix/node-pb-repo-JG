
// Aplikacja złożona jest z 1 pliku: zad12.js. Podczas uruchamiania możemy przekazać jej dodatkowy parametr który jest ścieżką do istniejącego na dysku folderu.
//  Zadaniem aplikacji jest wyświetlanie w konsoli nazw wszystkich plików i folderów znajdujących się bezpośrednio we wskazanym folderze.
// Uruchomienie z niewłaściwą liczbą parametrów powinno skutkować wyświetleniem komunikatu w konsoli. 
// Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v16.x/docs/api/fs.html , szukana funkcja ma przyrostek Sync)

// Przykładowe uruchomienie aplikacji:
// > node app.js C:\\code
// Wynik działania aplikacji:
// Pliki w folderze C:\\code:
// folder1
// folder2
// plik1.txt
// plik2.txt

// Przykładowe uruchomienie aplikacji:
// > node app.js
// Wynik działania aplikacji:
// > zbyt mało parametrów!

// Przykładowe uruchomienie aplikacji:
// > node app.js C:\\code C:\\apps
// Wynik działania aplikacji:
// > zbyt dużo parametrów!


const fs = require("fs");

const input1 = process.argv[2];
const input2 = process.argv[3];

fs.readdirSync(input1).forEach(file => {

    if (input2) {
        console.log('zbyt duzo parametrów')
    }

    else if (input1) {
        console.log(file);
    }

    else {
        console.log('za malo parametrów')
    }
});





