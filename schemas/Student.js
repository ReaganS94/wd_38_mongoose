const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    minLength: [2, "min length is 2 chars"],
    maxLength: [100, "max length is 100 chars"],
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please use a valid email",
    ],
  },
});

module.exports = mongoose.model("Student", studentSchema);
