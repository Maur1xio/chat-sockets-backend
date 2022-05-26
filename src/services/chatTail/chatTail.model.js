const {Schema, model} = require("mongoose");


const chatTailSchema = new Schema(
    {
        chats: [
            {
                type: Schema.Types.ObjectId,
                ref: "Chat"
            }
        ], 
        user :{
            type : Schema.Types.ObjectId,
            ref : "User"
        }
    }
);

const chatTailModel = model("ChatTail", chatTailSchema);

module.exports = chatTailModel;