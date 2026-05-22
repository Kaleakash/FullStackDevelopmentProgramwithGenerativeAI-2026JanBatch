require("dotenv").config();

const express = require("express");

const { connectDB } =require("./config/db");

const productRouter =require("./router/productRouter");
const loginRouter = require("./router/loginRouter");

const app = express();

app.use(express.json());

connectDB();
//let abcValue = process.env.abc;
//console.log("Abc value "+abcValue)

// http://localhost:5000/api/product/*

app.use("/api/product", productRouter);

// http://localhost:5000/api/product/*

app.use("/api/login",loginRouter);

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {

    console.log(`Server Running On Port ${PORT}`);
});