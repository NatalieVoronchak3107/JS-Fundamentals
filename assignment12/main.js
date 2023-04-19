/* 1. Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. 
Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, 
тип операційної системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу
 директорію і назву файлу сервера (використати модуль path).*/

 const http = require("http");
 const os = require("os");
 const path = require("path");
 
 const server1 = http.createServer((req, res) => {
     const uptimeMinutes = Math.floor(os.uptime() / 60);
     const serverFileName = path.basename(__filename);
 
     res.writeHead(200, { "Content-Type": "text/html" });
     res.write("<h1>System Information</h1>");
     res.write(`<p>User name: ${os.userInfo().username}</p>`);
     res.write(`<p>OS type: ${os.type()}</p>`);
     res.write(`<p>System uptime: ${uptimeMinutes} minutes</p>`);
     res.write(`<p>Current working directory: ${process.cwd()}</p>`);
     res.write(`<p>Server file name: ${serverFileName}</p>`);
     res.end();
 });
 
 server1.listen(5000, "localhost", () => {
     console.log("Server is running at http://localhost:5000");
 });

 /* 2.
Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports. 
Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:*/

const http = require("http");
const os = require("os");
const { greetUser } = require("./personalmodule");

const server2 = http.createServer((req, res) => {
  const username = os.userInfo().username;
  const greeting = greetUser(username);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<h1>${greeting}</h1>`);
  res.end();
});

server2.listen(3000, "localhost", () => {
  console.log("Server is running at http://localhost:3000");
});

