const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/adduser', async (req, res) => {
    try {
        const { firstname, lastname, address, mobile } = req.body
        
        const user = new User({
            firstname, lastname, address, mobile
        })
        const savedUser = await user.save()
        res.json(savedUser);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router