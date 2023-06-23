const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routerhandler/todoRouter");

// Express app initialization
const app = express();
app.use(express.json());

// connecting mongodb with mongoose locally with compass
mongoose
  .connect("mongodb://127.0.0.1:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.use("/todo", todoHandler);

// Error handling
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({ error: err });
}

// Listening to port
app.listen(3000, () => {
  console.log("Listening on the port of 3000");
});
