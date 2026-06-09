const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const userService = require("./services/userService");
const app = express();

connectDB();

app.use(express.json());
// http://localhost:3000/api/users/*
app.use("/api/users",userRoutes);

userService.createAdminUser("admin@gmail.com","admin@123","admin");
app.listen(3000, () => {
    console.log("Server Running On Port 3000");
});