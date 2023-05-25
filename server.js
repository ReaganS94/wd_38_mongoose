const express = require("express");
const cors = require("cors");
const app = express();
require("colors");
require("dotenv").config();
const connectDB = require("./dbinit");
const student = require("./routes/student");

connectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//my routes
app.use("/students", student);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`.rainbow);
});
