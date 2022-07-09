// salah satu contoh gaya penulisan kode imperatif.
/*  
    Dimana proses pengisian nilai array baru (newNames) 
    berdasarkan array lama (names) dilakukan secara manual.
*/
const Imperatif_names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const Imperatif_newNamesWithExcMark = [];

for (let i = 0; i < Imperatif_names.length; i++) {
    Imperatif_newNamesWithExcMark.push(`${Imperatif_names[i]}!`);
}
console.log(`Output Imperatif: ${Imperatif_newNamesWithExcMark}`);

// gaya penulisan deklaratif
const Deklaratif_names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const Deklaratif_newNamesWithExcMark = Deklaratif_names.map((name) => `${name}!`);

console.log(`Output Deklaratif: ${Deklaratif_newNamesWithExcMark}`);