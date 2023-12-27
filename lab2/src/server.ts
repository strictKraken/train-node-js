import * as http from "node:http";
import process from "node:process";
import Router from "./router";

process.on("SIGINT", () => {
  server.close((error) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }
  });
});

const PORT = process.env.PORT || 3500;

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", `https://${req.headers.host}`);
  // Router.routes(url, req.method);
  res.end();
});

server.listen(PORT, () => console.log(`Server running on port  ${PORT}`));
