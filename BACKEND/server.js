const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyparser.json());
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb connected");
})


const studentRouter = require("./routes/students.js");
app.use("/student",studentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port number: ${PORT}`);
})
