// class 
function Mail() {
    this.from = 'pengirim@dicoding.com';
    this.contacts = []
    this.yourOtherProperty = 'the values';
}

Mail.prototype.sendMessage = function(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this.contacts.push(to); // menyimpan kontak baru
}
mail1.yourOtherProperty();
mail1.sendMessage('hello', 'penerima@dicoding.com');