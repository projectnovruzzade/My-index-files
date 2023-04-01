let cem = 900;
// cem = cem.toPrecision(3); //Ededin ne qeder gosterilmesini 
// let ortalama = Math.round(cem); //ededi yuvarlasdirir(normal)
// let ortalama = Math.ceil(cem); //ededi yuvarlasdirir(1 eded yuxari)
// let ortalama = Math.floor(cem); //ededi yuvarlasdirir(1 eded asagi)
// cem = Math.random() * 11;
// let yuvarlasma = Math.round(cem);
// let tamEded = parseInt(cem);
let kok = Math.sqrt(cem);
let sa = Number.isInteger(kok);



if (sa == false) {
    console.log("bu eded number deyil");
}

else if (sa == true) {
    console.log(`Bu ededin koku ${kok}'dir`);
}

else {
    console.log("ERROR" * 10)
}

