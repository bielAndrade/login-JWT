const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");

router.get("/", auth, (req, res) => {
    if(req.user.admin){
        res.send("Access Conceded!");
    } else {
        res.status(401).json({msg: "Not admin: Access Denied!"});
    }
})

module.exports = router;