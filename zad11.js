const calc = require("./math.js");
const fs = require("fs");

// for reading file 'a.txt'
let a = fs.readFileSync("./a.txt", { encoding: "utf8", flag: "r" });

a = Number(a);

// for reading file 'b.txt'
let b = fs.readFileSync("./b.txt", { encoding: "utf8", flag: "r" });

b = Number(b);

// zapisanie do wynik.txt
let data = "";
data += "\nDodawanie a+b= " + calc.add(a, b);
data += "\nOdejmowanie a-b= " + calc.sub(a, b);
data += "\nMnozenie  a*b= " + calc.mul(a, b);
data += "\nDzielenie  a*b= " + calc.div(a, b);

fs.writeFileSync("wynik.txt", data);


const input1 = process.argv[2];
const input2 = process.argv[3];
const input3 = process.argv[4];

if (process.argv.length > 4) {
    console.log("zbyt duzo parametrów");
} else if (process.argv.length === 4) {

    let text1 = fs.readFileSync(input1, "utf8");
    let text2 = fs.readFileSync(input2, "utf8");

    console.log("a:", text1, "\nb:", text2,
        "\nDodawanie a+b= " + calc.add(a, b),
        "\nOdejmowanie a-b= " + calc.sub(a, b),
        "\nMnożenie a*b= " + calc.mul(a, b),
        "\nDzielenie a/b= " + calc.div(a, b)
    );
} else {
    console.log("za malo parametrów");


}

