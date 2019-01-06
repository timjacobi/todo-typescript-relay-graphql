import express from "express";
import express_graphql from "express-graphql";
import { readFileSync } from "fs";
import { buildSchema } from "graphql";
import path from "path";

const schema = buildSchema(readFileSync("./common/schema.graphql").toString());

const TODOS = [
  { id: 0, done: false, text: "Buy Milk" },
  { id: 1, done: true, text: "Clean Bathroom" }
];

const getTodos = () => TODOS;
const getTodoById = ({ id }: { id: number }) =>
  TODOS.find(todo => todo.id === id);

const rootValue = {
  counter: 0,
  todos: getTodos,
  todo: getTodoById
};

const app = express();
app.use(
  "/graphql",
  express_graphql({
    schema,
    rootValue,
    graphiql: true
  })
);
app.use(express.static(path.join(__dirname, "public")));
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
