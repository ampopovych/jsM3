// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// Change code above this line


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Jamaica',
//   city : 'Kingston'
// }

// console.log(apartment);


// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line

//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName] : 'jqueryismyjam',

//   // Change code above this line
// };
// console.log(credentials);




// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   // console.log(key);
//   // Значення властивості з таким ключем
//   console.log(`${key} text ${book[key]}`);
// }






// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (key in apartment) {
// keys.push(key);
//   values.push(apartment[key]);
// }


// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4


// Задача 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
  
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }

//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// // Задача 17
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
  
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }

//   // Change code above this line
//   return totalSalary;
// }

// Задача 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (const iterator of products) {
//     // console.log(iterator);
//     if (iterator.name === productName) {
//         return console.log(iterator.price);
//     }
// }

//     return console.log(null);
//   // Change code above this line
// }

// getProductPrice("Radar");

// Задача 19



// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   let result = [];
//   for (const product of products) {
//     if (product[propName] === undefined) {
//       result = [];
//       return result;
//     } else {
//       result.push(product[propName]);
//     }
//   }
//   return result;
// }  
//   console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// ЗАдача 20
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
  let result = 0;
  for (const product of products) {
    console.log(product);
    if (product.name === productName) {
      result = product.price * product.quantity;
    }
  }

  return result;
  // Change code above this line
}

// console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Scanner"));