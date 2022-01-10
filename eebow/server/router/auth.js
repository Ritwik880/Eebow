const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello auth`);

});

router.post('/register', async (req, res) => {

    const { name, email, phone, password, cpassword } = req.body;

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "plz fill all the data" });
    }

    try {

        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "passwords are not matching" });

        }
        else {
            const user = new User({ name, email, phone, password, cpassword });

            // const userRegister = await user.save();
            await user.save();


            res.status(201).json({ message: "user registered success" });

        }

        // if (userRegister) {
        //     res.status(201).json({ message: "user registered success" });
        // }
        // else {
        //     res.status(500).json({ error: "failed to register" }));
        //     }

    } catch (err) {
        console.log(err);

    }
    // console.log(req.body.name);
    // res.json({ message: req.body });
    // res.send('this is register page');
});

router.post('/login', async (req, res) => {
    // console.log(req.body);
    // res.json({message:"aawesome"})
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "plz fill the login data" });
        }
        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Creditionals" });

            }
            else {

                res.json({ message: "User login successfully" });
            }

        } else {
            res.status(400).json({ error: "Invalid Creditionals" });

        }
        // console.log(userLogin);


    } catch (err) {
        console.log(err)

    }
})
module.exports = router;