//iteracion y busqueda

// for each
//Ejecuta una función en cada elemento del array, pero NO devuelve nada.
const names = ["Alice", "Bob", "Charlie", "David"];
names.forEach((name) => {
  console.log(`Hola, ${name}`);
});
//con index
names.forEach((name, index) => {
  console.log(`(${index + 1}) Hola, ${name}`);
});

//map
//Recorre el array y devuelve un nuevo array con los valores transformados.
const prices = [10, 20, 30, 40];
const pricesWithTax = prices.map((price) => (price * 1.1).toFixed(2));
console.log(pricesWithTax);

//filter
//Recorre un array y devuelve un nuevo array con los elementos que cumplen cierta condición.
const ages = [12, 18, 25, 30, 40, 15, 17];
//const adults = ages.filter(age => age >= 20)
const adults = ages.filter((age) => {
  if (age >= 20) {
    console.log(`Edad permitida: ${age}`);
    return true;
  } else {
    console.log(`Edad rechazada: ${age}`);
    return false;
  }
});
console.log(adults);
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 88 },
];

const bestStudents = students.filter((student) => {
  if (student.grade >= 85) {
    console.log(`Estudiante destacado: ${student.name}`);
    return true;
  }
});
console.log("Lista de destacados:", bestStudents);
ƒ;

//find
//Recorre un array y devuelve el primer elemento que cumple cierta condición.
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
//const userFound = users.find((user) => user.id === 2);
const userFound = users.find((user) => {
  if (user.id === 2) {
    console.log(`Usuario encontrado: ${user.name}`);
    return true; // ✅ ¡Importante! Devuelve `true` para que `find` lo seleccione
  }
});
console.log(userFound);

//findIndex
//Recorre un array y devuelve el índice del primer elemento que cumple cierta condición.
const products = [
  { id: 101, name: "Laptop" },
  { id: 102, name: "Phone" },
  { id: 103, name: "Tablet" },
];
const productIndex = products.findIndex((product) => product.id === 102);
if (productIndex !== -1) {
  console.log(`Producto encontrado en el índice: ${productIndex}`);
} else {
  console.log("Producto no encontrado");
}
console.log(productIndex); // 1

//some
//Recorre un array y devuelve `true` si al menos un elemento cumple cierta condición.
const numbers = [5, 10, 15, 20];
const hayMayoresA18 = numbers.some((num) => num > 18);
console.log(hayMayoresA18); // true
const tasks = [
  { title: "Do laundry", completed: true },
  { title: "Buy groceries", completed: false },
  { title: "Clean room", completed: false },
  { title: "Finish project", completed: true },
];
const areCompletedTask = tasks.some((task) => {
  if (task.completed) {
    console.log(`${task.title} is completed`); //Importante: el primer `true` que se encuentre, detiene la búsqueda
    return true;
  }
  return false;
});
console.log(`Hay tareas completadas: ${areCompletedTask}`);

//every
//Recorre un array y devuelve `true` si todos los elementos cumplen cierta condición.
const allPositive = [2, 4, 6, 8].every((num) => num > 0);
console.log(allPositive); // true
const orders = [
  { id: 1, delivered: true },
  { id: 2, delivered: true },
  { id: 3, delivered: false },
  { id: 4, delivered: true },
];
const ordersDelivered = orders.every((order) => order.delivered);
if (ordersDelivered) {
  console.log("✅ Todas las órdenes fueron entregadas.");
} else {
  console.log("❌ No todas las órdenes fueron entregadas.");

  // 🔥 Mostramos cuáles no fueron entregadas
  const pendingOrders = orders.filter((order) => !order.delivered);
  pendingOrders.forEach((order) =>
    console.log(`🚨 Orden pendiente: ID ${order.id}`)
  );
}

//includes
//Verifica si un valor específico existe dentro de un array y devuelve true o false.

const fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("pear")); // false
isCharlieInList = users.includes('Charlie');
console.log(
  isCharlieInList
    ? '✅ CHARLIE ESTÁ EN LA LISTA'
    : '❌ CHARLIE NO ESTÁ EN LA LISTA'
);