const router = require('express').Router();
const Todos = require('../models/todos.model.js');

router.route('/').get((req, res)=>{
    Todos.find({})
    .then(data=>{res.json(data)})
    .catch(err=>console.log(err));
});


router.route('/add').post((req, res)=>{
    const {username, title, details, progress, startdate, deadline, duration, open }=req.body;
    const todo = new Todos({username, type:"todos", title, details, progress, plandate:new Date(), startdate, deadline, duration, open});
    todo.save()
    .then(()=>res.send('Todo Added'))
    .catch(err=>res.send(err))
});

router.route('/update/:id').put((req, res)=>{
    Todos.updateOne({_id:req.params.id}, req.body)
    .then(data=>res.send('updated'))
    .catch(err=>res.send(err))
});


module.exports = router;