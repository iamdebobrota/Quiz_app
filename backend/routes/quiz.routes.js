const {Router} = require("express")
const TaskModel = require("../models/quiz.model")
const taskRouter = Router();

taskRouter.get("/quiz", async (req, res) => {
    const userId = req.params.userId
    const tasks = await TaskModel.find({ userId })
    res.send(tasks)
})

taskRouter.post("/quiz", async (req, res) => {
    const userId = req.params.userId
    let payload = {
        ...req.body,
        userId
    }
    const task = await new TaskModel(payload)
   
    task.save((err, success) => {
        if(err){
            return res.status(500).send({message : "something went wrong"})
        }
        // console.log(success);
        return res.status(201).send(success)
    })
})

taskRouter.delete("/quiz/:_id", async (req, res)=>{
    let id= req.params._id;
    let dele;
    try{
        dele = await TaskModel.findByIdAndDelete(id)
    }
    catch(err){
        console.log("err");
    }
    
    if(dele){
                return res.status(200).json({message: "Detele successfuly"})
    }
            return  res.status(500).send({message: "Error occured"})
    })
    

    taskRouter.put("/quiz/:_id", async (req, res)=>{
        let id= req.params._id;
    let {title, note,label } = req.body;
    var prod;
        try{
            prod = await TaskModel.findByIdAndUpdate(id,{
                title, note, label
            })
             prod = await prod.save()
        }catch(er){
            console.log(er);   
         }
    if(prod){
       return res.status(200).send(req.body)
    }
                return res.status(500).json({message: "error occured"})
    })

module.exports = taskRouter;

