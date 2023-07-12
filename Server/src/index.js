const http = require("http");
const fs = require("fs");
const data = require("./utils/data");
const PORT = 3001;
const URL = "localhost";

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    if (url.includes("/rickandmorty/character")) {
      let id = url.split("/");
      id = id[id.length - 1];
      const character = data.find((character) => character.id === Number(id));
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(character));
    }
  })
  .listen(PORT, URL);
