const express = require("express");
const router = express.Router();
const User = require('../models/user')

router.post('/register', async(req, res) => {
    const newuser = new User({name : req.body.name , email : req.body.email , password : req.body.password})
    try {
        const user = await newuser.save()
        res.send('User Registered Successfully')
    } catch (error) {
        return res.status(400).json({ error });
    }
});
router.post('/login', async(req, res) => {
    const { email , password } = req.body
    try {
        const user = await User.findOne({email : email, password : password})
        if(user) {
            const temp = {
                name : user.name,
                email : user.email,
                isAdmin : user.isAdmin,
                _id : user._id,
            }
            res.send(temp)
        }
        else {
            return res.status(400).json({ message : 'Login failed' });
        }
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/getallusers' , async(req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        return res.status(400).json({ error });
    }
})

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const result = await User.deleteOne({ _id: id });
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error });
    }
  });

module.exports = router