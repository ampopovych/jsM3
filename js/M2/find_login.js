//  Задача пошуку логіна
// const logins = ['dlndvsf58', 'bksdSR65sdF', 'petro','kjbvd35DFGsdf', 'dsfg85458FSDfd', '5247sdfg547DF'];
// const loginToFind = 'ptetro';
// let message;
// for (let i = 0; i < logins.length; i++) {
//     // console.log(logins[i]);
//     if (loginToFind===logins[i]) {
//         message = `Ваш логін ${loginToFind} є правильним`;
//         break;
//     }
//         message = `нема такого логіну`;
// }
// console.log(message);


// Другий варіант задачі
const logins = ['dlndvsf58', 'bksdSR65sdF', 'petro','kjbvd35DFGsdf', 'dsfg85458FSDfd', '5247sdfg547DF'];
const loginToFind = 'petro';
// let message = `нема такого логіну`;
// for (let i = 0; i < logins.length; i++) {
//     // console.log(logins[i]);
//     if (loginToFind===logins[i]) {
        // message = `Ваш логін ${loginToFind} є правильним`;
//         continue;
//     }
// }
// console.log(message);


// for (const login of logins) {
//     if (loginToFind===login) {
//         message = `Ваш логін ${loginToFind} є правильним`;
//         continue;
//     }
// }
// console.log(message);

// Includes() Метод пошуку в масиві
const message=  logins.includes(loginToFind) ? console.log(`Ваш логін ${loginToFind} є правильним`): console.log(`нема такого логіну`);