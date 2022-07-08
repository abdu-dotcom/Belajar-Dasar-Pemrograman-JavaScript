// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
const myDate = new Date();

const year = myDate.getFullYear()
const month = myDate.getMonth()
const date = myDate.getDate()
const hour = myDate.getHours()
const minutes = myDate.getMinutes()
console.log(`${hour}:${minutes}`, date, month, year);