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
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
  // Change code below this line
  // let result = 0;
  // for (const product of products) {
  //   console.log(product);
  //   if (product.name === productName) {
  //     result = product.price * product.quantity;
  //   }
  // }

  // return result;
  // Change code above this line
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Scanner"));

//  Задача 31

// function multiply(...args) {
  // console.log(args); // масив усіх аргументів
//   let total = 0
//   for (const iterator of args) {
//     total += iterator;
//   }
//   return total;
// }

// console.log(multiply(1, 2));
// console.log(multiply(1, 2, 3));
// console.log(multiply(1, 2, 3, 4));

// Задача 32

// function addOverNum(...args) {
//   let total = 0;

//   for (let i = 1; i < args.length; i += 1) {
//     if (args[0] < args[i]) {
//       total += args[i];
//     }
//   }
//   return total;
  // Change code above this line
// }
// console.log(addOverNum(5, 15, 27));
// console.log(addOverNum(5, 15, 27, 45, 6, 54));
// console.log(addOverNum(4, 5, 10, 15, 20, 25));


// Задача 33
// Change code below this line
// function findMatches(firstArg, ...args) {
//   const matches = []; // Don't change this line
//   for (const iterator of firstArg) {
//     if (firstArg.includes(iterator)) {
//       matches.push(iterator);
//     }
//   }
  // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));



//  Задача 35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
    // Change code below this line
    // const index = this.books.indexOf(oldName);
    // this.books.splice(index, 1, newName);
    // Change code above this line
//   },
// };

// Задача 39  не працює в мене

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
    // Change code below this line
//     for (i = 0; i < this.potions.length; i += 1) {
//   if (potionName===this.potions[i]) {
//     console.log('Книжку, яку треба видалити ', potionName)
//     this.potions.splice(i, 1);
//   }

// }
// return this.potions
    // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));



// Задача 40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
    // Change code below this line
// for (i = 0; i < this.potions.length; i += 1) {
//   if (oldName===this.potions[i]) {
    // console.log('Книжку, яку треба видалити ', potionName)
//     this.potions.splice(i, 1, newName);
//   }

// }
// return this.potions

    // Change code above this line
//   },
// };

// Задача 41

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    return this.potions.push(newPotion);
    
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];

      if (potionName === name) {
        potions.splice(i, 1);
       
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        break;
      }
    }
    
    // Change code above this line
  },
};

console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.getPotions());