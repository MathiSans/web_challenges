import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance(chance.name());

export const server = createServer((request, response) => {
  if (request.url === "/chance") {
    response.statusCode = 200;
    response.end(`Hello, I am $(chance)`);
  } else if (request.url === "/fish") {
    response.statusCode = 200;
    response.end("I am... still a fish.");
  } else {
    response.statusCode = 404;
    response.end("I am not fish. I am dolphin. (404)");
  }
});
