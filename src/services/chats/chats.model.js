const {Schema, model} = require("mongoose");


const chatSchema = new Schema(
    {
        isAGroupChat : {
            type : Boolean,
            default : false,
        },
        name : {
            type : String,
        },
        users : [{
            type : Schema.Types.ObjectId,
            ref : "User"
        }],
        adminUser : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        lastMessage : {
            type : Schema.Types.ObjectId,
            ref : "Message"
        }
    },
    {
        timestamps : true
    }
)

const chatModel = model("Chat", chatSchema);

module.exports = chatModel;