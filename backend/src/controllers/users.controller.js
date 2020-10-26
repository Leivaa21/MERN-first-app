const userCtrl = {};

userCtrl.getUsers = (req, res) => res.json({message: []})

userCtrl.getUser = (req, res) => res.json({UserName: 'John Doe'})

userCtrl.createUser = (req, res) => res.json({message: 'User registered!'})

userCtrl.deleteUser = (req, res) => res.json({message: 'User deleted!'})

userCtrl.updateUser = (req, res) => res.json({message: 'User updated!'})

module.exports = userCtrl;