// Цикл for!!!!!!!!!!!!!!!!!!!!!
// let i;
// for (i=30; i<12; i-=2) {
//     console.log(i);
// }
// console.log(`kinec`);

// // Задача 1 на for
// const employes=7;
// let totatlSalary=0;
// const minSalary=4500;
// const maxSalary=5000;
// for (let i=1; i<employes; i+=1) {
//     // console.log(i);
//     const salary = Math.round(Math.random()*(maxSalary-minSalary)+minSalary);
//     console.log(`Zarobitna palta ${i} robitnyka stanovyty ${salary}`);
//     totatlSalary +=salary;
// }
// console.log(`Vsyogo zarplata stanovyt ${totatlSalary}`);

// // Задача 2 для for
// const min = Number(prompt(`Vvedit minimalne znachennya`));
// const max = Number(prompt(`Vvedit maxymalne znachennya`));
// let total = 0;
// for (let i=min; i<max; i+=1) {
//     // console.log(i);
//     if (i%2===0){
//         console.log(`Parne chyslo ${i}`);
//        total +=i;
//     }
// }
// console.log(`Vsyoho ${total}`);


// // Задача 2 для for з виводом парних і не парних
// const min = Number(prompt(`Vvedit minimalne znachennya`));
// const max = Number(prompt(`Vvedit maxymalne znachennya`));
// let totalParni = 0;
// let totalNeparni = 0;
// for (let i=min; i<max; i+=1) {
//     // console.log(i);
//     if (i%2!==0){
//         console.log(`Ne parne chyslo ${i}`);
//         totalNeparni+=i;
       
//     }
//     else {console.log(`Parne chyslo ${i}`);
//        totalParni +=i;}
// }
// console.log(`Vsyoho ${totalNeparni}`);
// console.log(`Vsyoho ${totalParni}`);



// // Задача 2 для for з командою continue
// const min = Number(prompt(`Vvedit minimalne znachennya`));
// const max = Number(prompt(`Vvedit maxymalne znachennya`));
// let totalParni = 0;

// for (let i=min; i<max; i+=1) {
//     // console.log(i);
//     if (i%2!==0){
//         // console.log(`Ne parne chyslo ${i}`);
//         continue;
       
//     }
//    console.log(`Parne chyslo ${i}`);
//        totalParni +=i;
// }

// console.log(`Suma parnych ${totalParni}`);

// // Задача на if
// let balance = Number(prompt(`Skilky majesh €`));
// const payment = Number(prompt(`Vvedy sumu na jaku ty kupyv`));
// console.log(`Zahalna suma koshtiv, scho ty majesh stanovyt ${balance} € a chochesh profitkaty ${payment}`);
// if (payment <= balance) {
//     balance -= payment; 
//     console.log(`v tebe zalyshylosya ne mnoho ne malo, a ${balance} €`);
// } else {
//     console.log(`nema v tebe babulyosiv`);
// }
// console.log(`Operaciya zavershena`);


// // Задача на if по знижках
// let totalSpent = Number(prompt(`skilky mozh z vas vyzhaty?`));
// let payment = 651;
// let discount = 0;
// if(totalSpent<100){
//     console.log(`Vy zelenyy`);
// } else if (totalSpent >= 100 && totalSpent<=1000) {
//     console.log(`Vy bronzovyy pryzer i majete znyzhku 2%`);
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent<=5000) {
//     console.log(`Vy sribnyy pryzer i majete znyzhku 5%`);
//     discount = 0.05;
// }  
// else  {
//     console.log(`Vy zolotyy pryzer i majete znyzhku 10%`);
//     discount = 0.1;
// }
// payment -= payment * discount
// // payment = payment - payment * discount;
// console.log(`Oformlyujemo Vam prodazh na sumu ${payment} iz znyzhkoyu ${discount*100}%`);
// totalSpent += payment;
// console.log(`Vsyoho vy u nas kupyly na sumu ${totalSpent}`);
