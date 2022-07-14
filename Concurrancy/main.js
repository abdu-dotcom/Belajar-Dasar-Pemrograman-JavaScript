// function makeExpresso
function makeEspresso() {
    // mengecek ketersediaan kopi
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value)
            return brewCoffee();
        })
        .then((value) => {
            console.log(value);
        })
        .catch((rejectedReason) => {
            console.log(rejectedReason);
        })
}

const state = {
        stock: {
            coffeeBeans: 250,
            water: 1000
        },
        isCoffeeMachineBusy: false
    }
    // function mengecek ketersedia alat kopi
const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    })
}

// function mengecek ketersedia kopi
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    })
}

// function untuk memcampurkan kopi dan air lalu menghidangkannya ke dalam gelas
const brewCoffee = () => {
        console.log("Membuat kopi Anda...");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Kopi sudah siap!");
            }, 2000);
        })
    }
    // menjalankan function makeExpresso
makeEspresso();
// Concurrency