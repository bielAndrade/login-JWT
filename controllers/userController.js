const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/User");
const validate = require("./validate")

const userController = {

    register: async (req, res) => {

        try {
            const {error} = validate.registerValidation(req.body);
            if(error) return res.status(400).send(error.message);

            const checkEmail = await userModel.findOne({email: req.body.email});
            if(checkEmail) return res.status(400).json({msg: "Email or password incorrect!"});

            const user = {
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password)
            }

            await userModel.create(user);

            res.json({msg: "Usuário criado com sucesso!"});
        } catch (error) {
            console.log(error)
        }

    },

    login: async (req, res) => {
        try {
            const {error} = validate.loginValidation(req.body);
            if(error) return res.status(400).send(error.message);


            const selectedUser = await userModel.findOne({email: req.body.email});
            if(!selectedUser) return res.status(400).json({msg: "Email or password incorrect!"});

            const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
            if(!passwordAndUserMatch) return res.status(400).json({msg: "Email or password incorrect!"});

            const tokenSecret = process.env.TOKEN_SECRET;
            const token = jwt.sign({_id: selectedUser.id, admin: selectedUser.admin}, tokenSecret);

            res.header("authorization-token", token)
            res.json({msg: "Usuário Logado com sucesso!"});
        } catch (error) {
            console.log(error);
        }
    },

    getUsers: async (req, res) => {
        try {
            const response = await userModel.find();

            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = userController;