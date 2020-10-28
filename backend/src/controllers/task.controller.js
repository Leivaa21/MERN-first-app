const taskCtrl = {};

const task = require('../models/Task');

taskCtrl.getTasks = async (req, res) => {
    const tasks = await task.find();
    res.json(tasks)
}

taskCtrl.getTask = async (req, res) =>{     
    const task = await Task.findById(req.params.id);
    res.json(task)
}
taskCtrl.createTask = async (req, res) => {
    const {taskName} = req.body;
    const newTask = new task({taskName});
    await newTask.save();
    res.json('Task added!')
}

taskCtrl.deleteTask = async (req, res) => {
    const {id} = req.params
    await task.findByIdAndDelete(id);
    res.json('Task deleted!')
}

taskCtrl.updateTask = async (req, res) => {
    const {taskName} = req.body;
    await task.findOneAndUpdate(req.params.id, {taskName});
    res.json({message: 'Task updated!'})
}
module.exports = taskCtrl;