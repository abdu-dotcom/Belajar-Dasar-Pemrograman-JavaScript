// InPure Function Example


// membuat object person baru dengan tambahan properti age dari objek person 
const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
}

const person = {
    name: 'Bobo'
}

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
})