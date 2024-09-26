const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamps');

const signupSchema = mongoose.Schema({
     firstname:{type:String},
     lastname:{type:String},
     mobileno:{type:String},
     aadharCardno:{type:String},
     countrycode:{type:String},
     email:{type:String},
     password:{type:String},
     usertype : {type:Number,default:2,enum:[1,2]},
     createdAt: Date,
     updatedAt: Date
})

signupSchema.plugin(timestamps,{ index: true});
module.exports=mongoose.model('Signup',signupSchema)