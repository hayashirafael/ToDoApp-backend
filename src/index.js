const express = require('express')
const server = express()
server.use(express.json()) //indicando que o servidor ira mandar e retornar comunicacao via .json

const TaskRoutes = require('./routes/TaskRoutes')
server.use('/task', TaskRoutes)

server.listen(3000, () => {
    console.log('API ONLINE')
})