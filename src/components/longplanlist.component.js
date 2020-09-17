import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'jquery/dist/jquery';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Plan = props=>{
    const [details, setDetails] = useState(props.plans.details);
    const [progress, setProgress] = useState(props.plans.progress);
    const [deadline, setDeadline] = useState(props.plans.deadline);
    const [open, setOpen] = useState(props.plans.open);   
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
   

    function onSubmitEditPlan(e){
        const updateData = {
            details, progress, deadline, open
        }
        e.preventDefault();
        axios.put(`http://localhost:5000/longplan/update/${props.plans._id}`, updateData)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    };
    return (
                        
        <div className="shadow p-3">                 

            <h4 className="text-primary">{props.plans.title}</h4>
            <p>{props.plans.details}</p>
            <p>Progress: {props.plans.progress}</p>
            <p>Open date: {props.plans.plandate?props.plans.plandate.substring(0,10):props.plans.plandate}, 
            Start Date: {props.plans.startdate?props.plans.startdate.substring(0,10):props.plans.startdate},
            Deadline: {props.plans.deadline?props.plans.deadline.substring(0,10):props.plans.deadline},              
            Status: {props.plans.open==true?"Open":"Closed"}
            </p>
            <button className="btn btn-primary" data-toggle="collapse" data-target={`#planid${props.plans._id}`}>Edit</button>
            <div className="collapse" id={`planid${props.plans._id}`}>
                <form onSubmit={onSubmitEditPlan}>
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

export default function Plans(){
const [longplanlist, setLongplanlist] =  useState([]);
const [filterbyopen, setFilterbyopen] = useState(true);

useEffect(()=>{

    axios.get('http://localhost:5000/longplan')
    .then(res=>{
        setLongplanlist(res.data.reverse());
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
    {longplanlist.filter(d=>d.open==filterbyopen).map(data=>{
    return <Plan plans={data} />
})} </div>
</div>

);

}
