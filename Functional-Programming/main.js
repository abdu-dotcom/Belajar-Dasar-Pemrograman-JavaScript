// immutability

const user = {
    firstname: 'Harry',
    lastName: 'Protter',
}

const renameLastNameUser = (newLastName, user) => {
    return {...user, lastName: newLastName }
}

const newUser = renameLastNameUser('Potter', user);

console.log(newUser);