//slice
//Crea una copia parcial del array sin modificar el original.
//array.slice(startIndex, endIndex);

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const favoriteFruits = fruits.slice(1, 4);
console.log(favoriteFruits); // ["Banana", "Cherry", "Date"]

const numbers = [10, 20, 30, 40, 50, 60, 70];
const chosenNumbers = numbers.slice(1, 5);
console.log(`🔢 Array original: ${numbers.join(' - ')}`);
console.log(`🎯 Números seleccionados: ${chosenNumbers.join(' - ')}`);

//splice
//Permite agregar, eliminar o reemplazar elementos en un array.
//array.splice(startIndex, deleteCount, itemToAdd1, itemToAdd2, ...);

const animals = ['Dog', 'Cat', 'Elephant', 'Lion'];
console.log("📌 Antes del cambio:", animals);
// Eliminamos "Elephant" y agregamos "Tiger"
animals.splice(2, 1, "Tiger");
console.log("✅ Después del cambio:", animals);

animals.splice(2, 2, "Tiger");

const fruits2 = ["Apple", "Banana", "Orange", "Mango"];
console.log(`antes del cambio`, fruits2)
fruits2.splice(2,1,"Grapes")
console.log(`despues del cambio`, fruits)
fruits.splice(0,1,)
console.log(fruits)