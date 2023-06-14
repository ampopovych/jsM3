// const user = {
//     name: 'Andriy',
//     age: 46,
//     nucionality: 'ua',
//     languages: {
//         spanish: true,
//         ukranian: true,
//         francais: false,
//     },
//     seyHello() {
//         console.log(`Мене звати ${this.name} і мені ${this.age} років`);
//     },
//     iKnow() {
//         for (const key in this.languages) {
//             if (this.languages[key]) {
//                 console.log(key)
//             }
//         }
//     }
// }
// for (const key in user) {
    // console.log(key);
    //    console.log(user[key]);
// }
// user.city = 'Mizhgirya';
// console.log(user);
// delete user.city;
// console.log(user);
// Object.freeze(user);
// user.age = 41;
// console.log(user);
// user.seyHello()
// const user2 = Object.create(user);
// user2.name = 'Petro';
// user2.age = 30;
// user2.seyHello();
// user.iKnow()

// Задача по обслуговуванню рахунку
// const transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// } 
// Object.freeze(transaction);

// const account = {
    // Поточний баланс
    // balance: 0,
    // Історія транзакцій
//     transactions: [{
//   id: 16,
//   ammount: 120,
//   type: "deposit"
// },],
    //*  Метод створення та повернення об'єкту транзакції
    //* Приймає суму та тип транзакції
    // createTransaction(ammount, type) {
    //     return {
    //         id: Date.now(),
    //         ammount,
    //         type,
    //     }
    // },
    /* Метод, який відповідає за додавання суми до балансу
    * Приймає суму транзакції
    * Викликає метод createTransaction для створення об'єкта транзакцій
    * після чого додає його до історії транзакцій
    **/
    // deposit(ammount) {
    //     if (ammount <= 0) {
    //         return 'Error';
    //     }
    //     const item = this.createTransaction(ammount, transaction.DEPOSIT)
        // console.log(item);
    //     this.balance += ammount;
    //     this.transactions.push(item)
    // },
    /*Метод, який відповідає за зняття суми з балансу.
    *Приймає суму транзакції
   *Викликає createTransaction для створення об'єкта транзакції
  *після чого додає його до об'єкта транзакції.
 Якщо ammount більший ніж баланс виводить повідомлення, про неможливість здійснення операції тому що недостатньо коштів
 */
//     withdraw(ammount) {
//      if (ammount>this.balance || ammount <=0) {
//         return 'Недостатньо коштів'
//         }
//         const item = this.createTransaction(ammount, transaction.WITHDRAW)
//         console.log(item);
//         this.transactions.push(item);
//         this.balance -= ammount;
//  },
   // Метод повернення поточного балансу
//    getBalance() {
//        return this.balance
//     },
//    Метод, який шукає та повертає транзакції по id
    // getTransactionDetails(id) {
    //    for (const iterator of this.transactions) {
    //     if (iterator.id===id) {
    //         return iterator
    //     }
    //     }
    //     return 'Не існує';
    // },
    // Метод повертає кількість коштів певного типу транзакції з усієї історії транзакцій
//     getTransactionTotal(type) {
//         let sum = 0;
//         for (const iterator of this.transactions) {
//             if (iterator.type===type) {
//                 sum +=iterator.ammount
//             }
//         }
//         return sum;
//     },

// }
// account.deposit(10);
// account.deposit(20);
// account.deposit(30);
// account.deposit(40);
// console.log(account.withdraw(15));
// console.log(account);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(12));
// console.log(account.getTransactionTotal(transaction.DEPOSIT));




//  Друге заняття Рисіча, Деструктуризація об'єкта

const user = {
    name: 'Andriy',
    age: 46,
    nucionality: 'ua',
    languages: {
        spanish: true,
        ukranian: true,
        francais: false,
    },
};
const name = 'value';
const { age, name: userName } = user;
console.log('вік', age);
console.log(name);
console.log(userName);
