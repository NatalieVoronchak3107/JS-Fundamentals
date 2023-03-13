//task 01
// на HTML-сторінці додаємо наступний скрипт
<script>alert('Nataliia');</script>;

//task 02
console.log("Voronchak");

//task 03
const myFavoriteSport = "tennis";
let myFavoriteSeason = "summer";

console.log(myFavoriteSport);
console.log(myFavoriteSeason);

myFavoriteSeason = myFavoriteSport;

console.log(myFavoriteSport);
console.log(myFavoriteSeason);

//task 04
const myObject = {
  String: "Greetings from Nataliia",
  Number: 7,
  Boolen: true,
  Undefined: undefined,
  Null: null,
};

console.log(myObject);

//task 05
const isAdult = confirm("Are you of legal age?");

console.log("Used has answered:", isAdult);

//task 06
const firstName = "Nataliia";
const lastName = "Voronchak";
const group = "JS Fundamentals";
const yearOfBirth = 1989;
const isMarried = true;

console.log(yearOfBirth);
console.log(isMarried);
console.log(firstName + " " + lastName + " from " + group);

const nullVar = null;
const undefinedVar = undefined;

console.log(typeof nullVar);
console.log(typeof undefinedVar);

//task 07
let login = prompt("Please enter your login:");
let email = prompt("Please enter your email:");
let password = prompt("Please enter your password:");

alert("Dear " + login + ", your email is " + email + ", your password is " + password + ".");

//task 08
const seconds_In_Hour = 60 * 60;
const seconds_In_Day = seconds_In_Hour * 24;

// Kількість днів в місяці
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let daysInMonth = new Date(year, month, 0).getDate();

// Kількість секунд в годині, добі та місяці
let secondsInHour = seconds_In_Hour;
let secondsInDay = seconds_In_Day;
let secondsInMonth = seconds_In_Day * daysInMonth;

console.log("Seconds in one hour: " + secondsInHour);
console.log("Seconds in one day: " + secondsInDay);
console.log("Seconds in one month: " + secondsInMonth);
