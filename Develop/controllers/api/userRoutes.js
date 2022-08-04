const router = require('express').Router();
const { User } = require('./');

router.post('/login', async (req, res) => {
    try {
        const userData = await User.find

    }   catch (err) {
        res.status(400).json(err);
    }
})