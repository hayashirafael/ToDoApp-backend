const { response } = require('express');
const TaskModel = require('../model/TaskModel')
const { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth } = require('date-fns')

const current = new Date()
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

    async update(req, res) {
        await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error)
        })
    }

    async all (req, res) {
        await TaskModel.find({macAddress: {'$in': req.body.macAddress}})
        .sort('when')
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error)
        })
    }

    async show (req, res) {
        await TaskModel.findById(req.params.id)
        .then(response => {
            if(response) {
                return res.status(200).json(response)
            }else {
                return res.status(404).json({error: 'tarefa não encontrada'})
            }
        })
        .catch(error => {
            return res.status(500).json(error)
        })
    }

    async delete(req, res) {
        await TaskModel.deleteOne({'_id': req.params.id})
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async done(req, res) {
        await TaskModel.findByIdAndUpdate(
            {'_id': req.params.id},
            {'done': req.params.done},
            {new: true})
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
        
    }

    async late(req, res) {
        await TaskModel
        .find({
            'when': {'$lt': current},
            'macAddress': {'$in': req.body.macAddress}
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error)
        })
    }

    async today(req, res) {
        await TaskModel
        .find({
            'macAddress': {'$in': req.body.macAddress},
            'when': {'$gte': startOfDay(current), '$lt': endOfDay(current)}
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error)
        })
    }

    async week(req, res) {
        await TaskModel
        .find({
            'macAddress': {'$in': req.body.macAddress},
            'when': {'$gte': startOfWeek(current), '$lte': endOfWeek(current)}
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error)
        })
    }

    async month(req, res) {
        await TaskModel
        .find({
            'macAddress': {'$in': req.body.macAddress},
            'when': {'$gte': startOfMonth(current), '$lte': endOfMonth(current)}
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error)
        })
    }

}

module.exports = new TaskController();