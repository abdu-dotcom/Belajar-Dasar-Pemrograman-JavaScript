// bukan bentu Rekursif
/* Rekursif merupakan teknik pada sebuah function 
    yang memanggil dirinya sendiri.
*/

const notRekursif_countDown = notRekursif_start => {
    do {
        console.log(notRekursif_start);
        notRekursif_start -= 1;
    }
    while (notRekursif_start > 0);
}

console.log(`Bukan rekursif :`);
const notRekursif = notRekursif_countDown(10);

const rekursif_countDown = rekursif_start => {
    console.log(rekursif_start);
    if (rekursif_start > 0) rekursif_countDown(rekursif_start - 1);
}

console.log(`rekursif :`);
rekursif_countDown(10);