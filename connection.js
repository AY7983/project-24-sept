const mongoose = require('mongoose')



function connection(req,res){
     try{
         const connect = mongoose.connect('mongodb://localhost:27017/project-24')
         console.log('mongodb connected successfully')
     }catch(err){
        console.log(err)
     }
}


module.exports=connection