import { coffeeStack as Cs, isCoffeeMachineReady } from "./state.js";

const makeCoffee = (type, miligrams) => {
    if (Cs[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}
makeCoffee("robusta", 80);

console.log(Cs);
console.log(isCoffeeMachineReady);