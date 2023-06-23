const mongoose = require("mongoose");

// defining a schema
const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isCompleted: {
    type: Boolean,
  },
});

// Instance method
TodoSchema.methods = {
  findCompleted: function () {
    return mongoose.model("Todo").find({ status: "active" });
  },
  fundAllActiveWithCallback: function (cb) {
    return mongoose.model("Todo").find({ isCompleted: true }, cb);
  },
};

// Static method

module.exports = TodoSchema;
