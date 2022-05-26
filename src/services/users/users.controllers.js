const createToken = require("../../helpers/createToken");
const userModel = require("./users.model");

const usersControllers = {};

usersControllers.addUser = async function(req,res){
    try {
        let newUser = new userModel(req.body);

        newUser = await newUser.save();

        const token = createToken({id : newUser._id});

        return res.status(201).json({
            ok : true,
            data : {
                user : newUser,
                token
            }
        });


    } catch (e) {
        return res.status(500).json({
            ok : false,
            message : "Error in database",
        });
    }
}

usersControllers.loginUser = async function(req,res){
    const {email,password} = req.body;

    try {
        const user = await userModel.findOne({email});

        if(!user) return res.status(401).json({
            ok : false, 
            msg : "User no exist"
        });

        if(user.password !== password) return res.status(401).json({
            ok : false, 
            msg : "Password incorrect"
        });


        const token = createToken({id : user._id});

        return res.json({
            ok : true,
            data : {
                user,
                token
            }
        });

    }

    catch (e) {
        return res.status(500).json({
            ok : false,
            msg : "Error in database"
        });
    }
}
usersControllers.findUser = async function(req,res){


    const {word = "", id = ""} = req.query;
    console.log(word, id);
    
    const user = await userModel.find({
        $and : [
            {
                $or : [
                    {name : {$regex : word,$options : 'i'}},
                    {email : {$regex : word,$options : 'i'}}
                ]
            },
            {
                _id : {$ne : id}
            }
        ]
    });

    res.json(user);

}




module.exports = usersControllers;