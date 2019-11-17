const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')

const records = require("./routes/records");
app.use(express.json());
app.use(cors())
app.use("/api/records", records);



mongoose
  .connect("mongodb://localhost/StudentManagementSystem")
  .then(() => console.log("successfully connected to mongodb "))
  .catch(err => console.error("error in connecting with mongodb "));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
