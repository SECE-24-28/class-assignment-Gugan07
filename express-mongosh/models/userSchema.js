const mongoose = require("mongoose");

new mongoose.Schema({
    fName:String,
    email:String,
    phone:Number,
});

module.exports = mongoose.model("User",userSchema);
module.exports = userSchema;
