const express = require("express");

const {
  createStudent,
  getAllStudents,
  getOneStudent,
  updateStudent,
  deleteOneStudent,
} = require("../controllers/student");

const api = express.Router();

api.route("/").get(getAllStudents).post(createStudent);
api
  .route("/:id")
  .get(getOneStudent)
  .put(updateStudent)
  .delete(deleteOneStudent);

module.exports = api;
