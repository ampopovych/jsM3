// Властивість length
// const message = 'V cyomu ryadku 26 symvoliv';
// console.log('V cyomu ryadku', message.length, 'symvoliv');

// // Зшивання рядків
// const firstName = 'Shoni';
// const lastName = 'Kaiser';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);
// const room = 234;
// const condition = 'VIP'
// const welcomeMsg = 'Гість ' + fullName + ' Вас поселено в '+ condition + ' кімнату за номером ' + room;
// console.log(welcomeMsg);


// // Шаблонні рядки
// const firstName = 'Shoni';
// const lastName = 'Kaiser';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);
// const room = 234;
// const condition = 'VIP'
// // const welcomeMsg = 'Гість ' + fullName + ' Вас поселено в '+ condition + ' кімнату за номером ' + room;
// const welcomeMsg = `Гість ${fullName} Вас поселено в ${condition} кімнату за номером ${room}`;
// console.log(welcomeMsg);

// Нормалізація з методом toLowerCase() нижній реєстр та toUpperCase із пешою великою буквою
// let brand = prompt(`Vvedit marku`);
// brand = brand.toLowerCase();
// console.log(brand[0].toUpperCase()+brand.slice(1).toLowerCase());

// Метод includes()
const string1 = `купує`;
const string2 = `живі`;
let text1 = `Продавець продає, а Покупець купує у нього 800 (вісімсот) тільних (чистопородних породи симентал, підтверджені родоводом) телиць великої рогатої худоби (далі: живі тварини) за ціною закупівлі, зазначеною в фактурах та згідно з Договором на умовах, що пунктом призначення живих тварин є Казахстан.`;
let text2 = `Продавець заявляє, що обрані Покупцем ЖИВІ тварини будуть утримуватися на карантині на території Продавця, окремо від інших його тварин з метою ветеринарного огляду, проведення тестів необхідних для офіційного ветеринарного сертифікату, до відправки цих тварин, що зазначено в пункті 1`;
let text3 = `Кількість та вартість тварин вказуються у Специфікації до цього Договору (на кожну партію окремо). Форма Специфікації міститься у Додатку № 1 до цього Договору.`;
text1 = text1.toLowerCase();
text2 = text2.toLowerCase();
text3 = text3.toLowerCase();
console.log(text1.includes(string1));
console.log(text1.includes(string2));
console.log(text2.includes(string1));
console.log(text2.includes(string2));
console.log(text3.includes(string1));
console.log(text3.includes(string2));

// Тернарний оператор
let balance = prompt `Vvedit vash balance`;
const msg = balance > 0 ? `Posytyvnyy balance` : `Nehatyvnyy balance`
console.log(msg);