const route = require('express').Router()

let todolist = [
    {task : "Alpha-1", done : "No"},
    {task : "Alpha-2", done : "Yes"},
    {task : "Alpha-3", done : "Yes"},
    {task : "Alpha-4", done : "No"}
]

route.get('/', (req,res) => res.send(todolist))
route.post('/', (req,res) => {
    todolist.push({
        name: req.body.task,
        done: req.body.done
    })
    res.send(todolist)
})
route.get('/:id', (req,res) => res.send(todolist[req.params.id]))

route.delete('/:id', (req,res) => {
    
})
module.exports = route