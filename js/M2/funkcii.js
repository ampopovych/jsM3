// Конспект
// function multiply() {
  // Тіло функції
//   console.log("Це лог на момент виклику функції multiply");
// }

// 2. Виклики функції multiply
// multiply(); // 'Це лог на момент виклику функції multiply'
// multiply(); // 'Це лог на момент виклику функції multiply'
// multiply();

// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }
// multiply(5,3,2);
// function multiply(x, y, z) {
//   console.log("Код до return виконується звичайним чином");

  // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log("Цей лог ніколи не виконається, він стоїть після return");
// }

// Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result);

// 15:58 починає говорити про return
// function fn() {
//     console.log(1);

//     console.log(2);

//     console.log(3);
//     return
// }
// console.log(fn())
// 33:36 ПОЧИНАЄ ПРАКТИКУВАТИ З ФУНКЦІЯМИ В ФУНКЦІЯХ

// --Задача яка шукає однакові елементи в масиві

// function getCommonElements(array1, array2) {
  // Change code below this line
  
  
//  let newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
    // Change this line
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;

 // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// Задача 1 рорахувати суму витрат
// function calculateTotalPrice(order) {
//   let total = 0;
  // Change code below this line

//   for (let i = 0; i < order.length; i++) {
//     total  += order[i];
// }
//   for (const number of order) {
//   total  += number;
// }
  // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice( [25, 36, 47, 698, 25, 145, 24, 65, 96, 86, 356]));
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// Вивести масив з парними числами від старту до кінця

// const chysla = (25, 36);
// let newArray = [];
// for (let i = 0; i < chysla.length; i += 1) {
// Через індекс
//   chysla[i] % 2 === 0
//     ?
//     newArray.push(chysla[i]): '';
// }

// console.log(newArray);

// function getEvenNumbers(start, end) {
  // const numbers = [];
  // // Change code below this line
  // for (let i = start; i <= end; i += 1) {
  //   i % 2 === 0
  //     ?
  //     numbers.push(i)
  //     : '';
  //   ;
  // }
  
  // return numbers;
// }
  
// console.log(getEvenNumbers(1, 3));
// console.log(getEvenNumbers(14, 17));


// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//        return number;
//     }

//   }

  
//   // Change code above this line
// }


// 32 завдання 2 модуля

function includes(array, value) {
  // Change code below this line
for (let i = 0; i < array.length; i++) {
  if (array[i]===value) {
    return true
  }
  
  }
  return false
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
console.log(includes());
