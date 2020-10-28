const { Router } = require('express');
const router = Router();

const { getTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/task.controller')

router.route('/')
    .get(getTasks)
    .post(createTask)

router.route('/:id')
    .get(getTask)
    .put(updateTask)
    .delete(deleteTask)

module.exports = router;