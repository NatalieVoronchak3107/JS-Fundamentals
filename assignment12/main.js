/* 1. Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. 
Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, 
тип операційної системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу
 директорію і назву файлу сервера (використати модуль path).*/

 const http = require("http");
 const os = require("os");
 const path = require("path");
 
 const server = http.createServer((req, res) => {
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
 
 server.listen(5000, "localhost", () => {
     console.log("Server is running at http://localhost:5000");
 });
 
 