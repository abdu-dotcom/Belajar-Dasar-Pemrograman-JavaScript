class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

// Task 2
class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true);
        this.name = name;
    }
    eat() {
        return `${this.name} sedang makan!`;
    }
}

class Eagle extends Animal {
    constructor(name, age) {
        super(name, age, false);
        this.name = name;
    }
    fly() {
        return `${this.name} sedang terbang!`;
    }
}
const myRabbit = new Rabbit('Labi', 2);
const myEagle = new Eagle("Elo", 4);

console.log(myRabbit.eat());
console.log(myRabbit.isMammal);
console.log(myEagle.fly());
console.log(myEagle.isMammal);