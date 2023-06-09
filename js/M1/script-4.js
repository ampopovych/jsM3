
// // Тернарний оператор
// let balance = prompt `Vvedit vash balance`;
// const msg = balance > 0 ? `Posytyvnyy balance` : `Nehatyvnyy balance`
// console.log(msg);


// Конструкція if
// let stars = Number(prompt(`Vvedit rejtyng hotelu vid 1 do 5`));
// let price ;
// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 50;
// } else if (stars === 3) {
//     price = 100;
// } else if (stars === 4) {
//     price = 150;
// } else if (stars === 5) {
//     price = 200;
// } else {
//     console.log(`Na zhal hoteliv z vyschym rejtyngom ne isnuje`);
// }
// console.log(price);


// // Конструкція if з або
// let stars = Number(prompt(`Vvedit rejtyng hotelu vid 1 do 5`));
// let price ;
// if (stars === 1 || stars === 2 ) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 100;
// } else if (stars === 5) {
//      price = 200;
// } else {
//      console.log(`Na zhal hoteliv z vyschym rejtyngom ne isnuje`);
//  }
//  console.log(price);

// // Конструкція Switch

// let stars = Number(prompt(`Vvedit rejtyng hotelu vid 1 do 5`));
// let price ;
// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 50;
//         break;
//     case 3:
//         price = 70;
//         break;
//     case 4:
//         price = 100;
//         break;
//     case 5:
//         price = 150;
//         break;
//     default:
//         console.log(`Na zhal hoteliv z vyschym rejtyngom ne isnuje`);
// }
// console.log(price);


// // Switch з командами або
//  let stars = Number(prompt(`Vvedit rejtyng hotelu vid 1 do 5`));
//  let price ;
//  switch (stars) {
//     case 1:
//     case 2:
//          price = 20;
//          break;
//     case 3:
//     case 4:
//         price = 70;
//         break;
//      case 5:
//          price = 150;
//          break;
//      default:
//          console.log(`Na zhal hoteliv z vyschym rejtyngom ne isnuje`);
//  }
//  console.log(price);


const option = Number(prompt(`Yak vy bazhajete otrymaty vashe zamovlennya: 1 - samovyviz, 2 - kurjer, 3 - poshta`));
switch (option) {
    case 1:
        console.log(`Vashe zamovlrnnya vas chekatyme vid zavtra z 8:00 ranku`);
        break;
    case 2:
        console.log(`Vashe zamovlrnnya vam dostavyt kurjer zavtra pislya 13:00`);
        break;
    case 3:
        console.log(`Vashe zamovlrnnya vam dostavyt poshta`);
        break;
    default:
        let phone = Number(prompt(`Vy ne vybraly sposib dostavky. Vvedit Vash nomer telefonu`))
        console.log(`My vam zatelefonujemo na vash nomer telefonu ${phone}`);
};