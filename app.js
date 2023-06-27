require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter")
const connection = require("./db/connection");

const app = express();
connection();

app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
})