//🔥 1. Métodos de iteración y búsqueda
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ✅ `forEach` → Recorre el array pero NO devuelve nada
numbers.forEach(num => console.log(`Number: ${num}`));

// ✅ `map` → Crea un nuevo array con cada elemento transformado
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// ✅ `filter` → Retorna un nuevo array con los elementos que cumplen una condición
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// ✅ `find` → Retorna el primer elemento que cumple la condición
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

// ✅ `findIndex` → Retorna el índice del primer elemento que cumple la condición
const indexOfFirstEven = numbers.findIndex(num => num % 2 === 0);
console.log(indexOfFirstEven); // 1 (posición del número 2)

// ✅ `some` → Devuelve `true` si al menos un elemento cumple la condición
const hasGreaterThanFive = numbers.some(num => num > 5);
console.log(hasGreaterThanFive); // true

// ✅ `every` → Devuelve `true` si TODOS los elementos cumplen la condición
const allGreaterThanZero = numbers.every(num => num > 0);
console.log(allGreaterThanZero); // true

// ✅ `includes` → Devuelve `true` si el array contiene el valor especificado
console.log(numbers.includes(5)); // true
console.log(numbers.includes(20)); // false

//🔥 2. Métodos de reducción y transformación
// ✅ `reduce` → Reduce un array a un solo valor
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 55 (suma de todos los números)

// ✅ `sort` → Ordena el array (IMPORTANTE: cambia el array original)
const sortedNumbers = [...numbers].sort((a, b) => b - a); // Orden descendente
console.log(sortedNumbers); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ✅ `reverse` → Invierte el orden de los elementos
const reversedNumbers = [...numbers].reverse();
console.log(reversedNumbers); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


//Métodos para modificar arrays
const fruits = ["apple", "banana", "cherry", "date"];
// ✅ `slice` → Retorna una copia parcial del array SIN modificar el original
const someFruits = fruits.slice(1, 3);
console.log(someFruits); // ['banana', 'cherry']
console.log(fruits); // ['apple', 'banana', 'cherry', 'date'] (original intacto)

// ✅ `splice` → Modifica el array original (elimina o agrega elementos)
fruits.splice(2, 1, "grape"); // Reemplaza 'cherry' con 'grape'
console.log(fruits); // ['apple', 'banana', 'grape', 'date']