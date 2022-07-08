// parameter birthday dapat berupa miliseconds ataupun date string
const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now(); // today menghasil nilai miliseconds saat ini

    const diff_ms = today - birtday.getTime(); // menghitung selish nilai miliseconds hari ini dan tanggal lahir 
    const diffDate = new Date(diff_ms);

    return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds

}
console.log(myAge('2001-05-12'));