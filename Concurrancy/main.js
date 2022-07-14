// object stock
const stock = {
    coffeBeans: 250,
    water: 1000,
}

// function checkStock
/*
    checkStock() merupakan fungsi yang mengembalikan promise
    dan akan menghasilkan resolve() dengan membawa nilai 
    "Stok cukup. Bisa membuat kopi".
*/
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    })
}

// function handle success
/*
    Lalu kita mendeklaraasikan fungsi handleSuccess() dan 
    handleFailure yang mencetak nilai dari parameternya.
*/
const handleSuccess = resoluvedValue => {
    console.log(resoluvedValue);
}

// function handle failure 
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

/*
    Kemudian kita memanggil method .then() dari checkStock.
    isi paramaternya .then() dengan dua fungsi handler yang telah 
    kitabuat sebelumnya.
*/
/* 
    Paramater pertama berisi fungsi handleSuccess untuk menangani
    kondisi ketika promise berstatus resolve. parameter kedua berisi 
    funsi handleFailure yang menangani ketika promise bertatus reject
*/
checkStock().then(handleSuccess).catch(handleFailure);