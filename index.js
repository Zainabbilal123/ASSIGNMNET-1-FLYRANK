const express = require('express')
const app = express();
const port = 3000;
let tasks = [
{
    id:1,
    title:"study node.js",
    done: false,


},
{
    id:2,
    title:"complete asisgnment",
    done: true


},
{
    id:3,
    title:"watch backend lecture",
    done: false,


},
]
app.get('/tasks',(req,res) => {
    res.status(200).json(tasks);
});
app.get('/tasks/:id',(req,res) => {
       const  id = parseInt(req.params.id);
    //    console.log(id)
       const task = tasks.find((task) => task.id == id);
    if(!task) {
        return res.status(404).json({
            error:`task${id} not found`
        })
    }
    res.status(200).json(task);
})
app.listen(port,()=> {
    console.log(`server running on port ${port}`)
})