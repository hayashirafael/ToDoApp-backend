const TaskModel = require('../model/TaskModel')

class TaskController {
    async create(req, res) {
        const task = new TaskModel(req.body);
        await task
                .save()
                .then(response => {
                    return res.status(200).json(response); //Caso de certo, retornara status 200(OK)
                })
                .catch(error => {
                    return res.status(500).json(error) //Caso de errado, retorna status 500(condicao inesperada)
                    
                })
    }
}

module.exports = new TaskController();