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
