var row1 = 5;

for (var i=1; i<=row1; i++) {
    console.log('*');
}
    console.log('\n')

//nested loop(barisan bintang)
var row2 = 5;
for (var i=1; i<=row2;i++) {
  var bintang ='';
    for (var j=1; j<=row2; j++) {
        bintang += '*';
    }
    // var row2 = 0;
      console.log(bintang);
}
    console.log('\n')

//nested loop(barisan tangga bintang)
var row3 = 5;
for (var i=1; i<=row2;i++) {
  var bintang ='';
    for (var j=1; j<=i; j++) {
        bintang += '*';
    }
      console.log(bintang);
}