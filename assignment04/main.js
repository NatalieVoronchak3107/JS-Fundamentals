/* 1. Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, 
які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, 
і коли одне з чисел або обидва більшого розміру за довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків. */

function sumSliceArray(arr, first, second) {

  if (typeof first !== "number" || typeof second !== "number") {
    throw new Error('First and second arguments must be numbers.');
  }
  if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
    throw new Error(
      'One of the arguments or both must be less than the length of an array'
    );
  }
  return arr[first] + arr[second];
}

const arr = [1, 2, 3, 4, 5];

try {
  const result = sumSliceArray(arr, 1, 3);
  console.log(result); 
} catch (error) {
  console.error(error);
}

try {
  const result = sumSliceArray(arr, 3, "5");
  console.log(result); 
} catch (error) {
  console.error(error); 
}

try {
  const result = sumSliceArray(arr, 3, 33);
  console.log(result); 
} catch (error) {
  console.error(error); 
}

/* 2. Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, 
якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому полі (виводиться 
повідомлення The field is empty! Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).
в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення 
назви та опису помилки. */

/*function checkAge() {

    try {
      const name = prompt('Please enter your name: ', '');
      if (!name) {
        throw Error('The field is empty! Please enter your name!');
      }
      const age = prompt('How old are you?', '');
      if (age < 18 || age > 70) {
        throw RangeError('Age must be between 18 and 70.');
      }
      if (!age) {
        throw Error('The field is empty! Please enter your age!');
      }
      const status = prompt('What is your status (admin / moderator / user): ', '');
      if (status !== 'admin' && status !== 'moderator' && status !== 'user') {
        throw EvalError('Invalid status input!');
      }
      if (!status) {
        throw Error('The field is empty! Please enter your status!');
      }
      alert('You can watch the movie!')
    } catch(error) {
      alert(`${error.name}: ${error.message}`);
      console.error(`${error.name}: ${error.message}`)
    }
  }

  checkAge(); */

/* 3. Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації. */

/* 4. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
Приклад роботи програми:
console.log(showMonthName(5));
May
console.log(showMonthName(14));
MonthException Incorrect month number */

/* 5. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids. 

Приклад роботи програми:
showUsers([7, -12, 44, 22]);
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} ] */
