//task 01
let a = 3;
let b =  4;
let c = 5;

if (a < b || b < c) {
  console.log("The statement is accurate");
} else {
  console.log("The statement is unvalid");
}

//task 02
let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + "" + y;
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = (x - y) * "result";
console.log(res4); // NaN
console.log(typeof res4); // "number"

//task 03
let isAdult = prompt("Are you of legal age? (please enter 'yes' or 'no')");

if (isAdult === 'yes') {
  console.log("You have reached your legal age");
} else if (isAdult === 'no') {
  console.log("You are a minor");
} else {
  console.log("Your answer is unvalid");
}

//task 04
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

let counts = {};
let maxCount = 0;
let mostCommon;
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  counts[num] = (counts[num] || 0) + 1;
  if (counts[num] > maxCount) {
    maxCount = counts[num];
    mostCommon = num;
  }
}

let data = mostCommon;
let newArr = [mostCommon];
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] === mostCommon) {
    arr.splice(i, 1);
  }
}
console.log(data); // 5
console.log(arr); // [4, 2, 1, 6, 3, 2]
console.log(newArr); // [5]

//task 05
const a = prompt("Enter the length of side 'a'");
const b = prompt("Enter the length of side 'b'");
const c = prompt("Enter the length of side 'c'");

// Перевіряємо чи введені дані коректні
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log('Incorrect data');
} else {
  // Обчислюємо півпериметр
  const p = (a + b + c) / 2;

  // Обчислюємо площу за формулою Герона
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3);

  // Виводимо площу трикутника
  console.log(`The area of triangle is equal to ${area}`);

  // Перевіряємо чи трикутник є прямокутним за теоремою Піфагора
  const isRightTriangle = a * a + b * b === c * c ||
    a * a + c * c === b * b ||
    b * b + c * c === a * a;

  // Виводимо результат перевірки
  if (isRightTriangle) {
    console.log('This is a right-angled triangle');
  } else {
    console.log('This is not a right-angled triangle');
  }
} 

//task 06
//solution 01
let time = new Date().getHours();

if (time >= 23 || time < 5) {
  console.log("Good Night!");
} else if (time >= 5 && time < 11) {
  console.log("Good Morning!");
} else if (time >= 11 && time < 17) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Evening!");
}
*/


//solution 02
let time = new Date().getHours();

switch (true) {
  case (time >= 23 || time < 5):
    console.log("Good Night!");
    break;
  case (time >= 5 && time < 11):
    console.log("Good Morning!");
    break;
  case (time >= 11 && time < 17):
    console.log("Good Afternoon!");
    break;
  default:
    console.log("Good Evening!");
}
