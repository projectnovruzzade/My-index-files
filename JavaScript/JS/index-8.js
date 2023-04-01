let names = {
    "name": "Tunar",
    "surname": "Novruzzade",
    "age": 13,
    "country": "Azerbaijan",
}

let crops = {
    "crop_id": 5,
    "crop_header": "Iphone 13 Pro",
    "crop_price": 2599,
}

let crops_2 = {
    "crop_id": 6,
    "crop_header": "Iphone 13 Pro Max",
    "crop_price": 2799,
}

let check = `Məsullarınızın Toplam Qiyməti ${crops.crop_price + crops_2.crop_price}`;
console.log(check)