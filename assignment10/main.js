//1. Напишіть код, щоб він працював

let names = {
  first: "Tom",
  second: "Sam",
  third: "Ray",
  fourth: "Bob",
};

let { first: f, third: x, fifth = "Name №5" } = names;

console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"

//2. Напишіть код, щоб він працював

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

let {
  names: [, name2, , name4],
  ages: [, age2, , age4],
} = data;

console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

/*3. Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
Якщо параметри типу Number відсутні, повертає число 0.*/

function mul(...args) {
  let result = 1;
  let hasNumber = false;

  for (let arg of args) {
    if (typeof arg === "number") {
      result *= arg;
      hasNumber = true;
    }
  }

  return hasNumber ? result : 0;
}

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

/*4. Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().
let server = {
   data: 0,
   convertToString: function (callback) {
      callback((function () {
         return this.data + "";
      }).bind(this));
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return (function (callback) {
         this.result = callback();
      }).bind(this);
   }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string" */

let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => this.data + "");
  },
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};

client.calc(123);
console.log(client.result);
console.log(typeof client.result);

/*5. Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, 
ключами якого є значення з першого масиву, а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.
Приклади використання функції:
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span" */

function mapBuilder(keysArray, valuesArray) {
  let resultMap = new Map();
  for (let i = 0; i < keysArray.length; i++) {
    resultMap.set(keysArray[i], valuesArray[i]);
  }
  return resultMap;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size);
console.log(map.get(2));

/* 6. За допомгою коду у нижче створюється масив, використовуючи цикл, до масиву записуються три функції. Логіка функцій проста, в консоль виводиться значення 
лічильника на момент створення функції.
На вигляд код виглядає логічним, але, якщо запустити цей код без змін, в консоль буде виведено двічі число 3.
Використовуючи механізм замикання, внесіть у код зміни, щоб у консоль вивелися число 0 та число 2(відповідно до виклику). 
var arr = [];

for (var i = 0; i <= 2; i++) {
   arr[i] = function () {
      console.log(i);
   };
}

arr[0](); // 0
arr[arr.length - 1](); // 2 */

let arr = [];

for (let i = 0; i <= 2; i++) {
  arr[i] = (function (curentIndex) {
    return function () {
      console.log(curentIndex);
    };
  })(i);
}

arr[0]();
arr[arr.length - 1]();
