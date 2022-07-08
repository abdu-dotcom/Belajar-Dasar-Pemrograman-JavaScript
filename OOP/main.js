class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}


class WhatsApp extends Mail {
    // attribut
    constructor(author) {
        super(author);
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }

    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
    }
}

const wa1 = new WhatsApp('080110002222');
console.log(wa1.myProfile());
console.log(wa1.sendMessage('halo', '089000999888'));