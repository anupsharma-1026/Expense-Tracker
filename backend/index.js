const express = require("express");
const app = express();
const conn = require("./db");



const cors = require("cors");


app.listen(2000, () => {
    console.log("server is start");
})
app.use(cors());
app.use(express.json());
app.use("/expense",require("./routes/Expense"))
// connection data base

conn.connection.on("connected", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected MongoDb");
    }
})