const express = require('express')
const router = express.Router() //identificar as rotas que estao chegando

const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middleware/TaskValidation')
const MacAddressValidation = require('../middleware/MacAddressValidation')

router.post('/', TaskValidation, TaskController.create) //rota por onde chegarao as novas tasks
router.put('/:id', TaskValidation, TaskController.update)
router.get('/:id', TaskController.show)
router.get('/filter/all', MacAddressValidation, TaskController.all)
router.delete('/:id', TaskController.delete)
router.put('/:id/:done', TaskController.done)
router.get('/filter/late', MacAddressValidation, TaskController.late)
router.get('/filter/today', MacAddressValidation,TaskController.today)
router.get('/filter/week', MacAddressValidation, TaskController.week)
router.get('/filter/month', MacAddressValidation, TaskController.month)
router.get('/filter/year', MacAddressValidation, TaskController.year)

module.exports = router;
