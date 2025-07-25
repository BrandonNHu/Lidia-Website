const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const server = http.createServer(async (req, res) => {
  try {
    const templatePath = path.join(__dirname, "public/templates/index.html");
    const data = await fs.readFile(templatePath, "utf8");
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end(data);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("content-type", "text/html");
    res.end("<h1>Internal Server Error</h1>");
  }
});

server.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Secure server running at http://${process.env.HOST}:${process.env.PORT}/`,
  );
});
