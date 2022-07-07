// class 
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }

    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
}

const mail1 = new Mail();
mail1.sendMessage('hello', 'penerima@dicoding.com');