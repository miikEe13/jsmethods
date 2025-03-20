//sort
//Ordena un array alfabéticamente o numéricamente (de menor a mayor o viceversa).

const numbers = [4, 2, 8, 1, 5];
numbers.sort((a, b) => a - b); // Ascendente
console.log(numbers); // [1, 2, 4, 5, 8]

const scores = [78, 92, 85, 65, 99, 71];

scores.sort((a, b) => a - b);
console.log(scores);
console.log(`📊 Puntajes ordenados: ${scores}`);
console.log(`🏆 Puntaje más alto: ${scores[scores.length - 1]}`);
console.log(`🎯 Puntaje más bajo: ${scores[0]}`);

//reverse
//Invierte el orden de los elementos de un array.
const letters = ["A", "B", "C", "D"];
letters.reverse();
console.log(letters); // ["D", "C", "B", "A"]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
days.reverse();
console.log(`📆 Días en orden inverso: ${days.join(" → ")}`);
console.log(`🌟 Primer día: ${days[0]}`);
console.log(`🔚 Último día: ${days[days.length - 1]}`);

//reduce
//reduce un array a un solo valor aplicando una función acumuladora en cada elemento.
const result = array.reduce((accumulator, currentValue) => {
  // lógica para acumular valores
  return nuevoAcc;
}, valorInicial);

//suma de todos los números
const numbers3 = [10, 20, 30, 40];
const sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum); // 100

//usamos un objeto como acc para contar cuántas veces aparece cada fruta.
const fruits = ["apple", "banana", "orange", "apple", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);

//Convertir un array en un objeto
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});
console.log(usersById);
// { 1: {id: 1, name: "Alice"}, 2: {id: 2, name: "Bob"}, 3: {id: 3, name: "Charlie"}

//Encontrar el número más grande
const maxNumber = numbers.reduce((acc, number) => {
    console.log(`Current acc: ${acc}, Current number: ${number}`);
    return number > acc ? number : acc; // 🔥 Si `number` es mayor, lo asignamos a `acc`
}, 0);
console.log(`Max number: ${maxNumber}`);

//contar cuantas veces se repite una palabra
const words = ["apple", "banana", "apple", "orange", "banana", "apple", "grape", "grape", "banana"];
const countWourds = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) +1
    return acc
}, {})
console.log(countWourds)


const numbers4 = [10, 20, 30, 40];
const sum2 = numbers4.reduce((acc, number) => {
  return acc + number; // 🔥 Acumulamos la suma de los números
}, 0);
console.log(sum2); // 100

const squaredNumbers = numbers.reduce((acc, number) => {
    acc.push(number ** 2); // 🔥 Agregamos el cuadrado del número
    return acc; // 🔥 Retornamos el array modificado
  }, []);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]