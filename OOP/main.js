// class 
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = []
        this.yourOtherProperty = 'the values';
    }

    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to);
    }
}

const mail1 = new Mail();
mail1.yourOtherProperty();
mail1.sendMessage('hello', 'penerima@dicoding.com');