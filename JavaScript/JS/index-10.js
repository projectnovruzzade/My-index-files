// let list = [20,37,10,10,9,65,22]
let list = ["iphone 12","iphone 5","samsung s20","samsung a10"]
let cem = 0;

// !!!! listdeki her bir ededin kvadrat
// for(let i = 0; i < list.length; i++)
// {
//     console.log(list[i] ** 2)
// }

// for(let i of list) 
// {
//     console.log(i**2)
// }

// !!!!! Hansi ededler 5e bolunur
// for(let i = 0; i < list.length; i++)
// {
//    if (list[i] % 5 == 0) {
//        console.log(list[i])
//    }
// }




//  !!!!! Cut ededlerin toplanmasi
// for(let i = 0; i < list.length; i++) 
// {
//     if (list[i] % 2 == 0) {
//        cem = cem + list[i];
//     }
// }

// for (let i in list) {
//     if(list[i] % 2 == 0) {
//         cem = cem + list[i]
//     }
// }


// !!!! listdeki butun sozleri boyuk herf'le cixisa ver
// for (let i of list) {
//      saaa = i.toUpperCase();
//      console.log(saaa)
// }


// !!!! listin icine hansi sozden ne qeder var
// let miqdar = 0;
// for (let phone of list) {
//     if (phone.includes("samsung")) {
//         miqdar++;
//     }
// }


let students = [
    {"name": "Tunar",
        "surname": "Novruzzade",
        "points": [90,34,23]
    },

    {"name": "Sabir",
        "surname": "Eliyev",
        "points": [90,34,73]
    },

     {"name": "Gunay",
        "surname": "Ehmedzade",
        "points": [50,78,23]
    }
]

let eded = 0;
let ortalama = 0;
let sumPoints = 0;

for (let student of students) 
{
    for(let point of student.points)
     {
        sumPoints = sumPoints + point;
        eded++;
     }
     ortalama = sumPoints / eded;
     console.log(`Sagirdin adi ${student.name} sagirdin soyadi ${student.surname} sagirdin Ortalama bali ${ortalama.toFixed(1)}`)

}