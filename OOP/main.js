// class 
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = []
    }

    sendMessage(msg, to, from) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        // from disini merujuk ke `from` paramater, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this.contacts.push(to);
    }
}

const mail1 = new Mail();
mail1.sendMessage('hello', 'penerima@dicoding.com', 'aku@gmail.com');
console.log(mail1.from);
console.log(mail1.contacts);