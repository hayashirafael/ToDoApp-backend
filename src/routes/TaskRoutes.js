const express = require('express')
const router = express.Router() //identificar as rotas que estao chegando

const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middleware/TaskValidation')


router.post('/', TaskValidation, TaskController.create) //rota por onde chegarao as novas tasks
router.put('/:id', TaskValidation, TaskController.update)
router.put('/:id/:done', TaskController.done)
router.delete('/:id', TaskController.delete)

router.get('/:id', TaskController.show)
router.get('/filter/late/:macAddress', TaskController.late)
router.get('/filter/today/:macAddress', TaskController.today)
router.get('/filter/week/:macAddress', TaskController.week)
router.get('/filter/month/:macAddress', TaskController.month)
router.get('/filter/year/:macAddress', TaskController.year)
router.get('/filter/all/:macAddress', TaskController.all)

module.exports = router;

