// membuat object bernama mail
const mail = {
    from: "pengirim@dicoding.com",
    sendMessage: function(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
}

// menampilkan data form dari object mail
console.log(mail.from);
mail.sendMessage('apakabar', 'penerima@dicoding.com');