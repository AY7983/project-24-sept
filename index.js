const express = require('express');
const path = require('path');
const router = require('./routes/route');
const connect = require('./connection');
const common = require('./helper/common');
const app = express();
connect();

app.use(express.static('public'));
app.use(express.json())
app.use(router);
// common.createAdmin();
app.set('view engine',"ejs")
app.set('views',path.resolve('./views'))
app.listen(3000,(err)=>{
    if(err){
        console.log(err)

    }else{
        console.log("server is running on 3000")
    }
})