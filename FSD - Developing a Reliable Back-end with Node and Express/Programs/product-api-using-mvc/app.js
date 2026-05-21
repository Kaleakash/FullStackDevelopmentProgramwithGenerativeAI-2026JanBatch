//require("dotenv").config();

const express = require("express");

const { connectDB } =require("./config/db");

const productRouter =require("./router/productRouter");

const app = express();

app.use(express.json());

connectDB();

// http://localhost:5000/api/product/*
app.use("/api/product", productRouter);

//const PORT = process.env.PORT || 5000;

app.listen(5000, () => {

    console.log(`Server Running On Port 5000`);
});