/* 1. Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
приклад:
const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]*/

/*const arr = [5, 3, 4, 5, 6, 7, 3];

function compact(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
const newArr = compact(arr);
console.log(newArr);

/* 2. Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
 - початкове значення
 - кінцеве значення
а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9] */

/*let arr = createArray(2, 9);

function createArray(start, end) {
  let newArr = [];
  for (let i = start; i <= end; i++) {
    newArr.push(i);
  }
  return newArr;
}

console.log(arr)

/* 3. Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д. */

function setNumbersinRange(a, b) {
  for (let i = a; i <= b; i++) {
    for (let j = a; j <= i; j++) {
      console.log(i);
    }
  }
}

setNumbersinRange(3, 6);

/* 4. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500. 
randArray(5);  // [399,310,232,379,40] */

function randArray(k) {
    const randNumber = [];
    for (let i = 0; i < k; i++) {
      randNumber.push(Math.floor(Math.random() * 500) + 1);
    }
    return randNumber;
}

const result= randArray(5);
console.log(result);

/* 5. Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
let arrNew = funcName(arr);
 /* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 
*/

const arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];

function splitArrayByType (arr) {
    const arrNumbers = [];
    const arrStrings = [];

    arr.forEach((el) => {
        if (Array.isArray(el)) {
            const [numbers, strings] = splitArrayByType(el);
            arrNumbers.push(...numbers);
            arrStrings.push(...strings);
        } else if (typeof el === 'number') {
            arrNumbers.push(el);
        } else {
            arrStrings.push(el);
        }
    });
    return [arrNumbers, arrStrings];
};

const arrNew = splitArrayByType(arr);
console.log(arrNew);

/* 6. Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання. */

function calc(a, b, op) {
    if (op === 1) return a - b;
    if (op === 2) return a * b;
    if (op === 3) return a / b;
    if (op === 4) return a + b;
}

const answer1 = calc(6, 4, 1);
const answer2 = calc(3, 4, 2);
const answer3 = calc(12, 4, 3);
const answer4 = calc(3, 4, 4);

console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);

/* 7. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true */
