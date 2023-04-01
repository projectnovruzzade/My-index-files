// function output(nameT,times) {
//    for (let i = 0; i < times; i++) {
//          console.log(nameT)
//     }
// }

// function dordbucaq(a,n) {
//      let periHesablama = 2 * (a + n);
//      let saheHesablama = a * n

//      return `Perimetr: ${periHesablama} Sahə: ${saheHesablama}`;
// }
// let result = dordbucaq(4,6);
// console.log(result);

// xerite 0,50
// debilqe 51,100

// function oyun() {
//     let random = parseInt(Math.random() * 100);
    
//     if(random == 0 || random <= 50)
//     {
//         console.log("Xerite Seçən iştirakçı Qazandı.. Ədəd = ",random);
//     }
//     else if (random == 100 || random <= 99) 
//     {
//         console.log("Dəbilqə Seçən iştirakçı Qazandı.. Ədəd = ",random);
//     }
//     else {
//         console.log("Oyunda Xəta baş verdi !");
//     }
// }
// oyun();
function tamBolenler(number) {
    let result = [];
   for (let i = 2; i < number; i++) {
      if ( number % i == 0) // 'i' ise 2den basliyaraq 'number' ededine qeder sayir (ededler bizim daxil etidyim ('number') edede qeder devam edir ve hansi eded 'number'a tam bolunurse neticeni yazdirir)
      {
            result.push(i); // tam bolunen saylari 'result'a atir
      }
   }
   return result.toString();
} 

let netice = tamBolenler(15);
console.log(netice)




