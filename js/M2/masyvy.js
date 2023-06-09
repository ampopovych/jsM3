// const family = ['Andriy', `Viktoria`, "Anna-Sofia", 'Viktor', 'Anna', `Myron`, "Marianna"];
// family[0] = `Pompon`;
// console.table(family);
// const lastIndex = family.length - 1;
// console.log(lastIndex);

// // console.log(family[lastIndex]);
// // console.log(family[lastIndex-1]);


// Примітиви і складні типи 21:59
// let a = 13;
// let b = a;
// console.log(a);
// console.log(b);
// a = 24;
// console.log(a);
// console.log(b);
// b = a;
// console.log(a);
// console.log(b);


// !!!!!!!!!!!!!Складні типи Говорить після 27 хвилини до 33 пояснюючи що то посилання. Чоиму залишає старий масив?!!!!!!!!!!!!
// let a = [13,5,45,98,5];
// let b = a;
// console.log(a);
// console.log(b);
// a [1]= 24;
// console.log(a);
// console.log(b);
// a = [3, 5, 4, 9, 8, 5];
// console.log(a);
// console.log(b);

// Цикли For 34:37
// const family = ['Andriy', `Viktoria`, "Anna-Sofia", 'Viktor', 'Anna', `Myron`, "Marianna"];
// console.table(family);
// const lastIndex = family.length - 1;
// for (let i = 0; i <= lastIndex; i += 1) {
//     family[i] += ' Popovych';
// }
// console.table(family);



// For of цикли 38:45
// let member;
// for ( member of family) {
//   console.table(member+' Popovych');
// }

// Задача 1 рорахувати суму витрат
// const kupivli = [25, 36, 47, 698, 25, 145, 24, 65, 96, 86, 356,];
// 1 крок перебрати кожен елемент масиву
// 2 Зробити змінну загальноі суми до оголошення циклу
// 3 на кожній ітераціїї до загальної суми додати поточний елемент масиву
// let total = 0;
// for (let index = 0; index < kupivli.length; index++) {
//     total = total + kupivli[index];
// }
// console.table(`Всього ${total} euriv`);


// Використання for of
// for (let val of kupivli) {
    
//     total += val;
    
// }
// console.table(kupivli);
// console.table(`Всього ${total} euriv`);

// for (let index = 0; index < kupivli.length; index++) {
//     kupivli[index] = Math.round(kupivli[index] * 1.1);
//     total += kupivli[index];
// }
// console.table(kupivli);
// console.table(`Всього ${total} euriv`);

// Написання скрипта, де додаються всі парні цифри масиву
// 1 Оголошення масиву.
// 2 Оголошення змінної яка додає в себе всі парні числа.
// 3 Перебираємо масив від першого елементу до останнього.
// 4 В масиві ставимо умову ділення на 2 і якщо нема залишку після коми, тоді його сумуємо.
// 5 Якщо є значення після коми, то повертаємося на початок циклу.
// 6 Виводимо суму за межами масиву

// const kupivli = [25, 36, 47, 698, 25, 145, 24, 65, 96, 86, 356];
// let sumaParnych = 0;
// for (let i = 0; i < kupivli.length; i += 1) {
// Через індекс
    // kupivli[i] % 2 === 0 ? sumaParnych += kupivli[i] : '';
// }
// Через for of
// for (const number of kupivli) {
//     number % 2 ===0 ? console.table(`Parne chyslo ${sumaParnych += number}`):'';
// }
// console.log(sumaParnych);



// Перевірка, якщо ні
// for (const number of kupivli) {
//     if (number % 2 !== 0) {
//         continue
//     } else {
//         console.table(`Parne chyslo ${sumaParnych += number}`);
//     }
// }
// console.log(sumaParnych);

// 1:41 повертається до масивів   slice команда
const family = ['Andriy', `Viktoria`, "Anna-Sofia", 'Viktor', 'Anna', `Myron`, "Marianna"];
// let sumaElementiv = '';
// for (const member of family) {
//     sumaElementiv += member+`,`;
// }

// console.log(sumaElementiv.slice(0, sumaElementiv.length - 1));
// console.log(sumaElementiv);

// Метрод join - склеює всі елементи масиву
const sumaElementiv = family.join("¬+-");
console.log(sumaElementiv);