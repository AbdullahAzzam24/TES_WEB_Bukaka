// var angka = "1,3,5,7,9,11,13,15";

// -------------- nomor 1 -------------- //
for(i=1; i<16; i+=2){
  console.log(i);
}

// -------------- nomor 3 -------------- //
var number = [20,10,100,30,15,5];

//asc
number.sort(function (g,h) {
  return g-h;
});
console.log(number.join ());

//desc
number.sort(function (g,h) {
  return h-g;
});
console.log(number.join ());


//menambah angka 180 
number.splice(6, 0, 180);
console.log(number.join());


//menghapus angka 30
delete number[1];
console.log(number.join());

// -------------- nomor 4 -------------- //
var perulangan = ["Aku", "Suka", "Makan", "Nasi", "Padang"]
var text = "";
var i;
for (i = 0; i < perulangan.length; i++) {
 text += perulangan[i];
}
console.log(text);