const detectTriangle = (a, b, c) => {
    // TODO 3

    if (a === b && b === c) {
        return 'Segitiga sama sisi';
    }

    if (a === b || a === c || b === c) {
        return 'Segitiga sama kaki';
    }

    return 'Segitiga sembarang';
};

let result = detectTriangle('a', 3, 5);
// console.log(result);


// TODO 1 :
class ValidationError {
    constructor(message) {
        this.name = "ValidationError";
        this.msg = message;
    }
}

function validateNumberInput(a, b, c) {
    if (typeof(a) != "number") {
        return `Argumen pertama bukan number`;
    }
    if (typeof(b) != "number") {
        return `Argumen kedua bukan number`;
    }
    if (typeof(c) != "number") {
        return `Argumen ketiga bukan number`;
    }
}

validateNumberInput('a', true, 2);