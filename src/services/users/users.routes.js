const {Router} = require("express");
const usersControllers = require("./users.controllers");

const usersRoutes = Router();

usersRoutes.post("/register", usersControllers.addUser);
usersRoutes.post("/login", usersControllers.loginUser);
usersRoutes.get("/find-user", usersControllers.findUser);

module.exports = usersRoutes;
