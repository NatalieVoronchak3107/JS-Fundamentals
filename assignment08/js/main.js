/* 1. 
Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
Приклад роботи:
upperCase('regexp'); 
"String's not starts with uppercase character"
upperCase('RegExp');
"String's starts with uppercase character" */

const upperCase = (str) => {
  if (str.charAt(0) === str.charAt(0).toUpperCase()) {
    return "String's starts with uppercase character";
  } else {
    return "String's not starts with uppercase character";
  }
};

console.log(upperCase("regexp"));
console.log(upperCase("RegExp"));

/* 2. 
Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
Приклад роботи:
checkEmail("Qmail2@gmail.com");
true */

const checkEmail1 = (email1) => {
  const emailRegEx1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegEx1.test(email1);
};

console.log(checkEmail1("Qmail2@gmail.com"));
console.log(checkEmail1("Qmail2-gmail.com"));
console.log(checkEmail1(""));

/* 3. 
Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java” */

const str = "Java Script";
const regEx = /^(\w+)\s+(\w+)$/; 
const output = str.replace(regEx, "$2, $1"); 

console.log(output);

/* 4. 
Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999). */

const validateCCNumber = (cardNumber) => {
  const regEx = /^([0-9]{4})-([0-9]{4})-([0-9]{4})-([0-9]{4})$/;
  return regEx.test(cardNumber);
};

console.log(validateCCNumber("9999-9999-9999-9999"));
console.log(validateCCNumber("999-999-999"));
console.log(validateCCNumber("99-99-99-99"));

/* 5. 
Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
Вимоги:
•  Цифри (0-9).
•  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
•  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
 •  Символ “-” не може повторюватися.

checkEmail('my_mail@gmail.com');
"Email is correct!"
checkEmail('#my_mail@gmail.com');
"Email is not correct!"
checkEmail('my_ma--il@gmail.com');
"Email is not correct!" */

const checkEmail2 = (email2) => {
  const emailRegEx2 = /^(([a-z0-9_-]+.)[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+).[a-z]{2,6})$/;
  return emailRegEx2.test(email2) ? "Email is correct!" : "Email is not correct!";
};

console.log(checkEmail2("my_mail@gmail.com"));
console.log(checkEmail2("#my_mail@gmail.com"));
console.log(checkEmail2("my_ma--il@gmail.com"));

/* 6. 
Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. 
Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
Приклад роботи:
checkLogin('ee1.1ret3');
true 
//1.1, 3

checkLogin('ee1*1ret3');
false 
//1, 1, 3 */

const checkLogin = (login) => {
    const regEx1 = /^[a-zA-Z0-9.]+$/;
    const regEx2 = /\d+\.\d+|\d+/g;

  if (login.length < 2 || login.length > 10 || !regEx1.test(login) || !isNaN(login[0])) {
    return false;
  }

  if (login.match(regEx2)) {
    return true;
  }
}

console.log(checkLogin("ee1.1ret3"));
console.log(checkLogin("ee1*1ret3"));
console.log(checkLogin("3e11ret3"));
console.log(checkLogin("ee1.1ret345678"));