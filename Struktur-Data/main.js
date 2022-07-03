// Object 
const user = {
    key1: "value",
    key2: "value2",
    key3: "value3"
};

const _character = {
    name: "Luke Skywalker",
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    species: "Human",
    "Hair color": "Blond",
    "home world": "Tattoonie"
}

//Mengakses object menggunakan dot
console.log(`Halo, nama saya ${_character.firstName} ${_character.lastName}`)
console.log("================================");
//Mengakses object menggunakan bracker
console.log(`Saya berasal dari ${_character["home world"]}`)
console.log("================================");

//Mengubah nilai properti di dalam object menggunakan assignment operator(=)
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);
console.log("================================");
console.log(_character);
console.log("================================");

// Error
// spaceship = { name: "New Millenium Falcon" };

// Delete isi object 
delete spaceship.manufacturer;
console.log(spaceship);