const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortPlanSchema = new Schema({
    username: {type:String},
    type:{type:String},
    title: {type:String},
    details: {type:String},
    progress: {type:String},
    plandate: {type:Date},
    startdate: {type:Date},
    deadline: {type:Date},
    duration: {type:Number},
    open:{type:Boolean}
}, {timestamps:true});

const shortPlan = mongoose.model('shortPlan', shortPlanSchema);


module.exports = shortPlan;

