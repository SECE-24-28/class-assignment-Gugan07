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

module.exports = {
    createUser,

};