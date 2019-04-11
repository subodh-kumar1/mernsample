const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Business = new Schema(
    {
        person_name:{
            type:String
        },
        biz_name:{
            type:String
        },
        gst_num:{
            type:Number
        }
    },
    {
        collection : "business"
    }

);
module.exports = mongoose.model('Business' , Business);