//task 01
let a = 3;
let b =  4;
let c = 5;

if (a < b || b < c) {
  console.log('The statement is accurate');
} else {
  console.log('The statement is unvalid');
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