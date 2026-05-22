const express = require("express");

const router = express.Router();    // router reference. 

const loginController =require("../controller/loginController");

router.post(
    "/signUp",
    loginController.signUp
);

router.post(
    "/signIn",
    loginController.signIn
);



module.exports = router;