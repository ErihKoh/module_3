// task 1

// let message = "";
// const user = {
//   age: 20,
//   hobby: "html",
//   name: "Mango",
//   premium: true,
// };

// //Write code under this line

// user.mood = "happy";
// user["full time"] = true;
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// // Write code under this line
// for (const key of keys) {
//   message += `${key} : ${user[key]} \n`;
// }

// console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
// console.log(keys);

// task 2
// const countProps = function (obj) {
//   "use strict";
//   // Write code under this line
//   return Object.keys(obj).length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

// task 3

// const findBestEmployee = function (employees) {
//   "use strict";
//   // Write code under this line
//   const keys = Object.keys(employees);
//   let bestEmploye = "";
//   let bestValue = 0;
//   //   console.log(keys);
//   for (const key of keys) {
//     // console.log(key);
//     // console.log(employees[key]);
//     if (employees[key] > bestValue) {
//       bestValue = employees[key];
//       bestEmploye = key;
//     }
//   }
//   return bestEmploye;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// // 'lux'

// task 4

// const countTotalSalary = function (employees) {
//   "use strict";
//   // Write code under this line
//   let totalSalary = 0;
//   const salaryes = Object.values(employees);
//   for (const salary of salaryes) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// };

// //Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// // 500

// task 5

// function getAllPropValues(array, prop) {
//   "use strict";
//   // Write code under this line
//   const elements = [];
//   for (const element of array) {
//     // console.log(element);
//     for (const key in element) {
//       //   console.log("Key: ", element[key]);
//       if (key === prop) {
//         elements.push(element[key]);
//       }
//     }
//   }
//   return elements;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, "name"));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity"));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, "category"));
// //  []
// task 6

// function calculateTotalPrice(array, prop) {
//   "use strict";
//   // Write code under this line
//   let totalPrice = 0;
//   for (const element of array) {
//     // console.log(element);
//     if (element.name === prop) {
//       totalPrice = totalPrice + element.price * element.quantity;
//     }
//   }
//   return totalPrice;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, "Радар"));
// // 9080

// console.log(calculateTotalPrice(products, "Сканер"));
// // 10200

// console.log(calculateTotalPrice(products, "Захват"));
// // 2400

// console.log(calculateTotalPrice(products, "Дроид"));
// // 2800
