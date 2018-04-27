//TUGAS-1
var shoutOut = 'Halo Function';
function print(shoutOut) {
    return shoutOut;
}

console.log(print(shoutOut)) // Menampilkan "Halo Function!" di console

//TUGAS-2
function calculateMultiply(angka1, angka2) {
    return angka1 * angka2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

//TUGAS-3
function processSentence(nama, tahun, alamat, hobi) {
    return "Nama saya " + nama + ',' + " umur saya " + tahun + " tahun, " + " alamat saya di " + alamat + ', ' + 'dan saya punya hobby yaitu ' + hobi + '!'
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"