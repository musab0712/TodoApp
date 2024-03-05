const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://musabhassan1999:WebDev@cluster0.4zg9xhx.mongodb.net/TodoApp"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
