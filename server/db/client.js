const { Client } = require ('pg')

const todolist = 'todolist'
const client = new Client (`postgres://localhost:5432/${todolist}`)

module.exports=client