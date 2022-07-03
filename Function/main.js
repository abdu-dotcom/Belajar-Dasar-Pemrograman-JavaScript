// Mengembalikan hasil perkalian a * b
function multiply(a, b) {
    return a * b;
}

let result = multiply(3, 4);
console.log(result);

// Menghasilkan text Good Morning!
function greetingMoring() {
    console.log("Good Morning!");
}

greetingMoring();


// bentuk express function 
const greeting = function(name, language) {
    if (language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}
console.log(greeting('Ron', 'English'));


// ====================== Function Paramater ==================

/* Jika paramaeter dari fungsi adalah sebuah object, kita juga bisa
memanfaatkan destructuring object untuk mendapatkan nilainya */

// object user
const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kyle',
};

function introduce({ displayName, fullName }) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

// ====================== Default Paramaters ==================
function exponentsFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber} ^${exponent} = ${result}`);
}

exponentsFormula(3);

// ====================== Rest Paramater ==================

/* Rest paramaeter ditulis menggunaak three consecutive dots (...) */
function sum(...numbers) {
    let result = 0;
    numbers.forEach(number => {
        result += number;
    });
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

// ====================== Arrow Function ==================

// Regular function
function sayHello(greet) {
    console.log(`${greet}!`)
}

// function expression 
const sayFirstName = function(name) {
    console.log(`Nama saya ${name}`);
}

// function expressiond dengan satu paramaeter
const sayLastName = name => {
    console.log(`Nama saya ${name}`);
}

// function expressiond tanpa paramater
const sayName = () => {
    console.log(`Nama saya ${name}`);
}

/* function yang hanya terdiri dari satu baris, kita bisa 
    menghapus tanda kurung kurawal.*/

const say = name => console.log(`Nama saya ${name}`);
say("Leila");

const sayAll = () => console.log("Selamat Pagi semuanya!");
sayAll();

// ====================== Variable Scrope ==================

// global variable, dapat diakses pada parent() dan child()
const a = 'a';

function parent() {
    /* local variable, dapat diakses pada parent() dan child(),
        tetapi tidak dapat diakses  di luar dari fungsi tersebut.*/
    const b = 'b';

    function child() {
        // local variable, dapat diakses hanya pada fungsi child();
        const c = 'c';
    }
}

// ====================== Closure ==================
function init() {
    // variabel local 
    var name = 'Obi Wan';

    // inner function
    function greet() {
        console.log(`Hallo, ${name}`);
    }

    return greet;
}

let myFunction = init();
myFunction();