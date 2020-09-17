import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'jquery/dist/jquery';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Todo = props=>{
    const [details, setDetails] = useState(props.todos.details);
    const [progress, setProgress] = useState(props.todos.progress);
    const [deadline, setDeadline] = useState(props.todos.deadline);
    const [open, setOpen] = useState(props.todos.open);   
    function onChangeDetails(e){
        setDetails(e.target.value);
    }
    function onChangeProgress(e){
        setProgress(e.target.value)
    }
    function onChangeDeadline(e){
        setDeadline(e);
    }
    function onChangeOpen(e){
        setOpen(e.target.value=="Closed"?false:true);
    }
   

    function onSubmitEditTodo(e){
        const updateData = {
            details, progress, deadline, open
        }
        e.preventDefault();
        axios.put(`http://localhost:5000/todos/update/${props.todos._id}`, updateData)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    };
    return (
                        
        <div className="shadow p-3">                 

            <h4 className="text-primary">{props.todos.title}</h4>
            <p>{props.todos.details}</p>
            <p>Progress: {props.todos.progress}</p>
            <p>Open date: {props.todos.plandate?props.todos.plandate.substring(0,10):props.todos.plandate}, 
            Start Date: {props.todos.startdate?props.todos.startdate.substring(0,10):props.todos.startdate},
            Deadline: {props.todos.deadline?props.todos.deadline.substring(0,10):props.todos.deadline},              
            Status: {props.todos.open==true?"Open":"Closed"}
            </p>
            <button className="btn btn-primary" data-toggle="collapse" data-target={`#planid${props.todos._id}`}>Edit</button>
            <div className="collapse" id={`planid${props.todos._id}`}>
                <form onSubmit={onSubmitEditTodo}>
                    <div className="form-group">
                        <label>Plan details: </label>
                        <textarea cols="50" rows="5" className="form-control" onChange={onChangeDetails}>{details}</textarea>
                    </div>
                    <div className="d-flex justify-content-start">
                    <div className="form-group">
                        <label>Progress: </label>
                        <input type="text" className="form-control" value={progress} onChange={onChangeProgress}/>
                    </div>
                    <div className="form-group">
                        <label>Deadline: </label><br/>
                        <DatePicker selected={new Date(deadline)} onChange={onChangeDeadline} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Open/Close: </label><br/>
                        <select selected={open} onChange={onChangeOpen} className="form-control">
                            <option>Open</option>
                            <option>Closed</option>
                        </select>
                    </div>
                    </div>
                    <button type="submit" className="btn btn-warning">Submit</button>
                </form>
            </div>
        </div>
    );

  
}

export default function Todos(){
const [todolist, setTodolist] =  useState([]);
const [filterbyopen, setFilterbyopen] = useState(true);

useEffect(()=>{

    axios.get('http://localhost:5000/todos')
    .then(res=>{
        setTodolist(res.data.reverse());
    })
    .catch(err=>console.log(err))
});
function onChangeFilterByOpen(e){
    setFilterbyopen(filterbyopen == true?false:true);
}

return (
<div className="container">
    <div>
        <select selected={filterbyopen} onChange={onChangeFilterByOpen} className="form-control">
            <option>Open plans</option>
            <option>Closed plans</option>
        </select>
    </div>
    <div>
    {todolist.filter(d=>d.open==filterbyopen).map(data=>{
    return <Todo todos={data} />
})} </div>
</div>

);

}
