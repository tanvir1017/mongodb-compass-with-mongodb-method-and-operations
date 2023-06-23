const express = require("express");
const { default: mongoose } = require("mongoose");
const TodoSchema = require("../schemas/todoschema");
const router = express.Router();

// Creating module for each schema
const Todo = new mongoose.model("Todo", TodoSchema);

// get all the todo
router.get("/", async (req, res) => {
  const getAllTodo = await Todo.find();
  res.status(200).json({
    success: true,
    message: "Find all data successfully",
    getAllTodo,
  });
});

// get all completed todo
router.get("/completed", async (req, res) => {
  const findAllCompletedTodo = new Todo();
  const data = await findAllCompletedTodo.findCompleted();
  res.status(200).json({
    success: true,
    message: "active all data found successfully",
    data,
  });
});
// get all completed todo with callback
router.get("/completed-cb", (req, res) => {
  const findAllCompletedTodo = new Todo();
  findAllCompletedTodo.fundAllActiveWithCallback((err, data) => {
    res.status(200).json({
      success: true,
      message: "active all data found successfully",
      data,
    });
  });
});

// get a todo by id
router.get("/:id", async (req, res) => {});

// Post by todo
router.post("/", async (req, res) => {
  console.log(req.body);
  const newTodo = new Todo(req.body);
  const saveToDO = await newTodo.save();
  try {
    if (!saveToDO) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    } else {
      res.status(201).json({
        success: true,
        message: "Todo created and inserted successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `There was an error ${error}`,
    });
  }
});

// Post by multiple todo
router.post("/all", async (req, res) => {
  const saveAllTodos = await Todo.insertMany(req.body);
  saveAllTodos
    ? res.sendStatus(201).json({
        success: true,
        message: "All todos are saved",
      })
    : res.sendStatus(500).json({
        success: false,
        message: `There were a error while insertManyTodos ${err}`,
      });
});

// Update a todo
router.put("/:id", async (req, res) => {});

// delete a todo
router.delete("/:id", async (req, res) => {});

module.exports = router;
