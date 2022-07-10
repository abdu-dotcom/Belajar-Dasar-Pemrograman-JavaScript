try {
    // kode
    console.log("Awal blok try");
    errorCode;
    console.log("Akhir blok try");
} catch (error) {
    // error handling
    console.log("Terjadi error! - " + error.message);
} finally {
    console.log("Akan tetap dieksekusi");
}