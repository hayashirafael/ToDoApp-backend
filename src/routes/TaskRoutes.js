const express = require('express')
const router = express.Router() //identificar as rotas que estao chegando

const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middleware/TaskValidation')

router.post('/', TaskValidation, TaskController.create) //rota por onde chegarao as novas tasks

module.exports = router;
