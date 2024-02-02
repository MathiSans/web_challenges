import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/api/fish/1") {
    response.statusCode = 200;
    response.end("I am fish.");
  } else if (request.url === "/api/fish/2") {
    response.statusCode = 200;
    response.end("I am... also fish");
  } else {
    response.statusCode = 404;
    response.end("I am not fish. I am dolphin. (404)");
  }
});
