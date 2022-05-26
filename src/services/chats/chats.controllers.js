const chatModel = require("./chats.model");

const chatsControllers = {};

chatsControllers.findChatOrCreate = async function(req,res){
    const {user1, user2} = req.body;

    try {   
        const chat = await chatModel.findOne(
            {
                users : {
                    $all : [user1, user2]
                }
            }
        );

        if(!chat){
            const newChat = await chatModel(
                {
                    isAGroupChat : false,
                    users : [user1, user2],
                    adminUser : user1
                }
            );

            return res.status(200).json(newChat);
        }

    } catch (error) {
        return res.status(500).json({
            ok : false, 
            message : "Error al buscar el chat",
        })
    }

}

module.exports = chatsControllers;