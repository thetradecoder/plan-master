import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component.js';
import ShortPlanList from './components/shortplanlist.component.js';
import LongPlanList from './components/longplanlist.component.js';
import AddPlans from './components/addplans.component.js';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <h6 className="text-center">Plan master- a roadmap for ultimate goals</h6>     
      </div>
      <Route path='/plan-master/' exact component={AddPlans}></Route>
      <Route path="/plan-master/shortplan" component={ShortPlanList}></Route>
      <Route path="/plan-master/longplan" component={LongPlanList}></Route>
    </Router>
  );
}
export default App;
