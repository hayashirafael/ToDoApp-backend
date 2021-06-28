const express = require('express')
const cors = require('cors')
const server = express()
server.use(cors())
server.use(express.json()) //indicando que o servidor ira mandar e retornar comunicacao via .json

const TaskRoutes = require('./routes/TaskRoutes')
server.use('/task', TaskRoutes)

server.listen(3333, () => {
    console.log('API ONLINE')
})