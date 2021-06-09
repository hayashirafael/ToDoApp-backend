const mongoose = require('../config/database');
const Schema = mongoose.Schema //representacao de informar a ser apresentada

const TaskSchema = new Schema ({
    macAddress: {type: String, required: true}, //required: obrigatorio
    type: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    when: {type: Date, required: true},
    done: {type: Boolean, default: false},
    created: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Task', TaskSchema)