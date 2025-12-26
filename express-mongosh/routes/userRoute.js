const express = require("express");
const controller = require("./controller/userController.js");
const router = express.Router();

router.post("/adduser", controller.addUser);

module.exports = router;
