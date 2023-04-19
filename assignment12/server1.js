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

