const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const userController = require("../controllers/userController");

router.get("/all", (req, res) => userController.getUsers(req, res));

router.post("/register", bodyParser.json(), (req, res) => userController.register(req, res));

router.post("/login", bodyParser.json(), (req, res) => userController.login(req, res));

module.exports = router;