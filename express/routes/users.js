const express = require("express");
const router = express.Router();
const User = require("../models/User");


// router.get("/", async (req, res) => {
//     try{
//         const users = await User.find();
//         res.json(users);
//     }catch(err){
//         res.json({message: err});
//     }
// });

router.get("/", async (req, res) => {
    try {
        const username = req.body.username;
        const user = await User.findOne({username});
        if (req.body.username === user.username && req.body.password === user.password) {
            res.json(user);
        } else {
            res.json("fail");
        }
    } catch(err) {
        res.json({message: "fail"});
    }
})

router.post("/", async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        userType: 1
    })
    try{
        const savedPost = await user.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

router.delete("/:userid", async (req, res) => {
    try{
    const removedUser = await User.remove({_id: req.params.userid});
    res.json(removedUser);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;