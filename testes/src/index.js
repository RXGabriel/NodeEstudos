const express = require("express");
const app = express();

app.get("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  const params = request.params;
  console.log(params);
  return response.json(["Curso Novo", "Curso 2", "Curso 3", "Curso 4"]);
});

app.path("/courses/:id", (request, response) => {
  return response.json(["Curso Novo", "Curso 2", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso Novo", "Curso 2", "Curso 4"]);
});

app.listen(3333);
