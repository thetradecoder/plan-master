import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function ShortPlanList(){
const [shortplans, setShortplans] =  useState([]);
const [open, setOpen]= useState(true);
useEffect(()=>{

    axios.get('http://localhost:5000/shortplan')
    .then(res=>{
        setShortplans(res.data.reverse());
    })
    .catch(err=>console.log(err))
});

function onChangeOpen(e){
    setOpen(open===true?false:true);

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

                {shortplans.filter(e=>e.open=open).map(e=>{
                    return (
                        
                        <div className="shadow p-3">                                        
                            <h4>Plan Title: {e.title}</h4>
                            <p>Details:{e.details} <br/> 
                            Plan Duration: {e.duration} months, Open date: {e.plandate?e.plandate.substring(0,10):e.plandate}, 
                            Start Date: {e.startdate?e.startdate.substring(0,10):e.startdate}, Deadline: {e.deadline?e.deadline.substring(0,10):e.deadline} </p>            
                        </div>
                    );
                })}
            </div>

        </div>

    );
}
