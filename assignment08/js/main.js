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

const checkEmail = (email) => {
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegEx.test(email);
};

console.log(checkEmail("Qmail2@gmail.com"));
console.log(checkEmail("Qmail2-gmail.com"));
console.log(checkEmail(""));

/* 3. 
Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java” */

const str = "Java Script";
const regEx = /^(\w+)\s+(\w+)$/; // Вираз для знаходження двох слов у рядку
const output = str.replace(regEx, "$2, $1"); // Міняємо місцями два слова у рядку

console.log(output);

/* 4. 
Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999). */

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

/* 6. 
Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
Приклад роботи:
checkLogin('ee1.1ret3');
true 
//1.1, 3

checkLogin('ee1*1ret3');
false 
//1, 1, 3 */
