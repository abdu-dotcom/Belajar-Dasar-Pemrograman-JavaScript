// salah satu contoh gaya penulisan kode imperatif.
/*  
    Dimana proses pengisian nilai array baru (newNames) 
    berdasarkan array lama (names) dilakukan secara manual.
*/
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++) {
    newNamesWithExcMark.push(`${names[i]}!`);
}
console.log(newNamesWithExcMark);