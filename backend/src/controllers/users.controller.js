const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}

userCtrl.getUser = async (req, res) =>{     
    const user = await User.findById(req.params.id);
    res.json(user)
}
userCtrl.createUser = async (req, res) => {
    const {userName, password} = req.body;
    const newUser = new User({userName, password});
    await newUser.save();
    res.json('User registered!')
}

userCtrl.deleteUser = async (req, res) => {
    const {id} = req.params
    await User.findByIdAndDelete(id);
    res.json('User deleted!')
}

userCtrl.updateUser = async (req, res) => {
    const {userName,password} = req.body;
    await User.findOneAndUpdate(req.params.id, {
        userName,
        password        
    });
    res.json({message: 'User updated!'})
}
module.exports = userCtrl;