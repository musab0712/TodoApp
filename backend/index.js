const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
const { todo } = require("./db");

const app = express();

app.use(bodyParser.json());

app.post("/todo", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  await todo.create({
    title: title,
    description: description,
    completed: false,
  });
  res.json({
    msg: "Todo Created",
  });
});

app.get("/todo", async (req, res) => {
  const todos = await todo.find({});
  res.json({ todos });
});

app.post("/completed", async (req, res) => {
  await todo.update({ _id: req.body.id }, { completed: true });
  res.json({ msg: "Mark as Done" });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
