// Pure Function Example
/*
    Karena fungsi hitungLuasLingkaran tidak membutuhkan nilai
    yang berada diluar dari fungsinya
*/

// membuat object person baru dengan tambahan properti age dari objek person 
const createPersonWithAge = (age, person) => {
    return {...person, age }
}

const person = {
    name: 'Bobo'
}

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
})