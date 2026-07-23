const express = require('express')
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const app = express();
app.use(express.json());
const swaggerOptions = {
    definition : {
        openai: "3.0.0",
        info: {
            title: "task management API",
            version:"1.0.0",
            description:"simple crud api using express.js"
        }
    },
    apis:["./index.js"]
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);

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
/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     description: Returns all tasks
 *     responses:
 *       200:
 *         description: List of all tasks
 */
/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task found
 *       404:
 *         description: Task not found
 */
app.get('/tasks',(req,res) => {
    res.status(200).json(tasks);
});
/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update a task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               done:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       404:
 *         description: Task not found
 */

 app.put('/tasKs/:id',(req,res)=> {
 const id = parseInt(req.params.id)
 const task = tasks.find(task => task.id == id);
 if(!task){
     return res.status(404).json({
         error:`task ${id} not found`
    })
 }
 const {title,done} = req.body;
 if(!title) {
      return res.staus(400).json({
        error:"title is required"
     })
 }
 task.title = title;
 res.status(200).json(task)})
/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 */
app.delete('/tasks/:id',(req,res)=> {
    const id = parseInt(req.params.id)
    const taskIndex = tasks.findIndex(task => task.id == id);
    if(taskIndex === -1){
        return res.status(404).json({
            error:`task ${id} not found`
        })
    }
    tasks.splice(taskIndex,1)
    
    res.status(200).json({
        message:"task deleted successfully"
    });
})
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
app.post('/tasks',(req,res) =>{
    const {title} = req.body
    if (!title){
        return res.status(400).json({
error:"title is required"
        })
    }
     const newtask = {
         id: tasks.length +1,
        title: title,
        done: false

    }
    tasks.push(newtask);
    res.status(201).json(newtask)

 })
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
)
app.listen(port,()=> {
    console.log(`server running on port ${port}`)
})