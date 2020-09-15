import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'jquery/dist/jquery';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function LongPlanList(){
const [longplans, setLongplans] =  useState([]);
const [open, setOpen]= useState(true);
useEffect(()=>{

    axios.get('http://localhost:5000/longplan')
    .then(res=>{
        setLongplans(res.data.reverse());
    })
    .catch(err=>console.log(err))
});

function onChangeOpen(e){
    setOpen(open===true?false:true);

};
function onSubmitEditPlan(e){
    e.preventDefault();

};

    return (
        <div>
            <div className="container">
                <div>
                    <select selected={open} onChange={onChangeOpen} className="form-control">
                        <option>Open plans</option>
                        <option>Closed plans</option>
                    </select>
                </div>

                {longplans.filter(e=>e.open=open).map(e=>{
                    return (
                        
                        <div className="shadow p-3">                                        
                            <h4 className="text-primary">{e.title}</h4>
                            <p>{e.details} </p>
                            <p>Progress: {e.progress}</p>
                            <p>Open date: {e.plandate?e.plandate.substring(0,10):e.plandate}, 
                            Start Date: {e.startdate?e.startdate.substring(0,10):e.startdate}, Deadline: {e.deadline?e.deadline.substring(0,10):e.deadline} </p>
                            <button className="btn btn-primary" data-toggle="collapse" data-target={`#planid${e._id}`}>Edit</button>
                            <div className="collapse" id={`planid${e._id}`}>
                                <form onSubmit={onSubmitEditPlan}>
                                    <div className="form-group">
                                        <label>Plan details: </label>
                                        <textarea cols="50" rows="5" className="form-control">{e.details}</textarea>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                    <div className="form-group">
                                        <label>Progress: </label>
                                        <input type="text" className="form-control" value={e.progress}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Deadline: </label><br/>
                                        <DatePicker selected={new Date(e.deadline)} className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Open/Close: </label><br/>
                                        <select selected={e.open} className="form-control">
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
                })}
            </div>

        </div>

    );
}
