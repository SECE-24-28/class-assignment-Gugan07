const userSchema = require("../../models/userSchema.js");
const createUser = async (req, res) => {
    try {
         const response = await userSchema.create(req.body);    
         
         res.status(200).send({
            isError: false,
            message: "user created successfully",
            data: req.body
         })
    } catch (error) {
        res.status(500).send({
            isError: true,
            message: "unable to create user",
            data: null,
        })  
    } 
};

const getAllUsers = async (req, res) => {
    try {
        const response = await userSchema.find();
        res.status(200).send({
            isError: false,
            message: "users fetched successfully",
            data: response,

        });
    } catch (error) {
        res.status(500).send({
            isError: true,
            message: "unable to fetch users",
            data: null,
        }); 
    }
};

const updateUser = async (req, res) => {
    try {
        const response = await userSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send({
            isError: false,
            message: "user updated successfully",
            data: response,
        });
    } catch (error) {
        res.status(500).send({
            isError: true,
            message: "unable to update user",
            data: null,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const response = await userSchema.findByIdAndDelete(req.params.id);
        res.status(200).send({
            isError: false,
            message: "user deleted successfully",
            data: response,
        });
    } catch (error) {
        res.status(500).send({
            isError: true,
            message: "unable to delete user",
            data: null,
        });
    }
};

module.exports = {
    addUser: createUser,
    getUsers: getAllUsers,
    updateUser: updateUser,
    deleteUser: deleteUser,
};