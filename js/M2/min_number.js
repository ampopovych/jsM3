const numbers = [45, 68, 5, 68, 88, 48, 658, 15, 65, 35];
let minNumber = numbers[0];
for (const number of numbers) {
        minNumber >= number ? minNumber = number : '';
        
}
console.log(minNumber);