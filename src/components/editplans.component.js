import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default function EditPlans(){
    const [username] = useState("");
    const [title] = useState("");
    const [startdate] = useState("");
    const [deadline] = useState("");
    const [open] = useState("");
    const [details] = useState("");
    const [progress] = useState("");



    function onSubmitEditPlan(e){
        e.preventDefault();
    }
    return (
        <div>
            <div className="container">
                <h3 className="text-center">Edit plans</h3>
                <form onSubmit={onSubmitEditPlan}>
                    <div className="d-flex justify-content-between">
                        <p>Username: {username}</p>
                        <h4>{title}</h4>
                        <div className="form-group">
                            <label>Start Date:</label><br/>
                            <DatePicker selected={startdate} className="form-control"/>
                        </div>
                        
                        <div className="form-group">
                            <label>Deadline:</label><br/>
                            <DatePicker selected={deadline} className="form-control"/>
                        </div>
                        
                        <div className="form-group">
                            <label>Open/Close: </label>
                            <select selected={open} className="form-control"></select>     
                        </div>                        
                    </div>
                    <div className="form-group">
                        <label>Details:</label>
                        <textarea rows="5" cols="50" className="form-control">{details}</textarea>
                    </div>
                    <div className="form-group">
                        <label>Progress:</label>
                        <input type="text" className="form-control" value={progress}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    );
}
