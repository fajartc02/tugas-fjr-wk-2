//var judul loop
var judul = 'LOOPING PERTAMA';
var judul2 = 'LOOPING KEDUA';
//soal-1 (while) 
console.log(judul);
var angka = 2;

while (angka <= 20) {
    console.log(angka + ' - I love coding');
    angka++;
    angka += 1;
}
console.log(judul2);
var angka1 = 20;
while (angka1 >= 2) {
    console.log(angka1 + ' - I will bacome fullstack developer');
    angka1--;
    angka1 -= 1;
}

//soal-2(for)
console.log(judul);
for (var angka2 = 1; angka2 < 20; angka2++) {
    console.log(angka2 + ' - I love coding');
}
console.log(judul2)
for (var angka3 = 20; angka3 > 1; angka3--) {
    console.log(angka3 + ' - I will become fullstack developer');
}

//soal-3(Ganjil-Genap)
for (var hitung = 1; hitung < 100; hitung++) {
    if (hitung % 2 === 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}

//soal-3(counter-2)
for (var counter2 = 1; counter2 < 100; counter2++) {
    if (counter2 % 3 === 0 ) {
        console.log(counter2 + ' KELIPATAN ' + counter2)
    } else {
        console.log(' \" "\ ')
    }
}
//soal-3(counter-5)
for (var counter5 = 1; counter5 < 100; counter5++) {
    if (counter5 % 5 === 0 ) {
        console.log(counter5 + ' KELIPATAN ' + counter5)
    } else {
        console.log('')
    }
}//soal-3(counter-9)
for (var counter9 = 1; counter9 < 100; counter9++) {
    if (counter9 % 10 === 0 ) {
        console.log(counter9 + ' KELIPATAN ' + counter9)
    } else {
        console.log('')
    }
}