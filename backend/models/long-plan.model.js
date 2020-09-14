const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const longPlanSchema = new Schema({
    username:{type:String},
    type:{type:String},
    title:{type:String},
    details:{type:String},
    progress:{type:String},
    plandate:{type:Date},
    startdate:{type:Date},
    deadline: {type:Date},
    duration:{type:Number},
    open:{type:Boolean}
}, {timestamps:true});

const longPlan = mongoose.model('longPlan', longPlanSchema);

module.exports = longPlan;

