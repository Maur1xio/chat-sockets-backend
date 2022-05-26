const {Schema, model} = require('mongoose');

const usersSchema = new Schema(
    {
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true,
        },
        avatar : {
            type : String,
            default : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        }
    },
    {
        timestamps : true
    }
);

const userModel = model("User", usersSchema);

module.exports = userModel;