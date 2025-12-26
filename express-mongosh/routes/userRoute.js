const express = require("express");
const {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
} = require("../controller/userController.js");

const router = express.Router();

const controller = require("./controller/userController.js");
router.get("/users", getAllUsers);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
router.post("/adduser", createUser);

module.exports = router;
