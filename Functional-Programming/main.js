// Impure Function 
/*
    Karena fungsi hitungLuasLingkaran membutuhkan nilai
    yang berada diluar dari fungsinya yaitu variable PI
*/
let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
    return PI * (jariJari * jariJari);
}