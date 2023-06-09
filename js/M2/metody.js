// Метрод join - склеює всі елементи масиву
// const sumaElementiv = family.join("¬+-");
// console.log(sumaElementiv);


// Завдання перебрати символи і поменяти регістр на протилежний 1:49
// const string = 'JavaScript';

// Метод split варіант 1
// const letters = string.split('');
// let invertString ='';
// console.log(letters);
// for (const letter of letters) {
//     console.log(letter);
//     if (letter === letter.toLowerCase()) {
        // console.log(`${letter} це буква нижнього реєстру`);
//         invertString += letter.toUpperCase();

//     } else {
        // console.log(`${letter} це буква верхнього реєстру`);
//         invertString += letter.toLowerCase();
//     }
// }
// console.log(invertString);


// Метод split варіант 2
// const letters = string.split('');
// let invertString ='';
// console.log(letters);
// for (const letter of letters) {
//     console.log(letter);
//     letter === letter.toLowerCase()
//         ?
        // console.log(`${letter} це буква нижнього реєстру`);
//         invertString += letter.toUpperCase()
//         :
        // console.log(`${letter} це буква верхнього реєстру`);
//         invertString += letter.toLowerCase()
    
// }
// console.log(invertString);


// Метод split варіант 3
// const letters = string.split('');
// let invertString ='';
// console.log(letters);
// for (const letter of letters) {
   
//     invertString +=
//     letter === letter.toLowerCase()
        // ?
        // console.log(`${letter} це буква нижнього реєстру`);
//          letter.toUpperCase()
//         :
        // console.log(`${letter} це буква верхнього реєстру`);
//         letter.toLowerCase()
    
// }
// console.log(invertString);

//  Метод split Задача. Заголовок тексту перевести в нижній реєстр і з'єднати слова дифісами
const zaholovok = `Даний заголовок містить 6 слів`;
console.log(zaholovok);
const normZaholovok = zaholovok.toLowerCase();
console.log(normZaholovok);

let words = normZaholovok.split('');
console.log(words);
console.log(' лапки без пробілу');
words = normZaholovok.split(' ');
console.log(words);
console.log(' лапки з 1 пробілом');
words = normZaholovok.split('  ');
console.log(words);
console.log(' лапки з 2 пробілами');
words = normZaholovok.split('   ');
console.log(words);
console.log(' лапки з 3 пробілами');
const zjednText = words.join('-');
console.log(zjednText);


// Короткий варіант
// const zaholovok = `Даний заголовок містить 6 слів`;
// console.log(zaholovok.toLowerCase().split(' ').join('-'));

// Сума елементів 2 масивів Задача


// const kupivli = [25, 36, 47, 698, 25, 145, 24, 65, 96, 86, 356,];
// const kupivli2 = [2, 3, 4, 6, 2, 1, 2, 6, 9, 6, 3,];
// let vsyoho = 0;
// Перший варіант. Згідно Репети найгірший.
// for (let index = 0; index < kupivli.length; index++) {
//     total = total + kupivli[index];
// }
// for (let index = 0; index < kupivli2.length; index++) {
//     total = total + kupivli2[index];
// }
// console.log(total);

// Метод concat
// const suma = kupivli.concat(kupivli2);
// console.log(suma);
// for (let number of suma) {
//     vsyoho += number;
// }
// console.log(vsyoho);

// Метод splice
// Метод деструктивний 
// 
// const checkList = [
//     'check-1',
//     'check-2',
//     'check-3',
//     'check-4',
//     'check-5',
//     'check-6'
// ]
// Вмдалення елемента
// console.table(checkList);
// const checkToRemove = 'check-4';
// const index = checkList.indexOf(checkToRemove);
// console.log(index);
// checkList.splice(index, 1);
// console.table(checkList);

// Додавання елемента
// checkList.splice(2, 0, 45, 4545, 6565)
// console.table(checkList);
// checkList.splice(2, 3);
// console.table(checkList);
// checkList.splice(3, 0, 'check-7', 'check-8', 'check-9');
// console.table(checkList);
// ЗАміна елемента
// checkList.splice(2, 2, 45, 4545, 6565)
// console.table(checkList);
// checkList.splice(2, 3);
// console.table(checkList);
// checkList.splice(3, 0, 'check-7', 'check-8', 'check-9');
// console.table(checkList);

// 2:29 розказує як обновити картку
