const route = require('express').Router()

let todolist = [
    {task : "Alpha-1"},
]

route.get('/', (req,res) => res.send(todolist))
route.post('/', (req,res) => {
    todolist.push({
        task : req.body.task,
    })
    res.send(todolist)
})
route.get('/:id', (req,res) => res.send(todolist[req.params.id]))

module.exports = route