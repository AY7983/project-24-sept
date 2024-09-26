const { render } = require('ejs');
const bcrypt = require('bcrypt');
const Signup = require('../models/Signup');
const saltRound = 10;

function loginpage(req,res){
  try{
    res.render('login')
  }catch(err){
    console.log(err)
  }
}
function signuppage(req,res){
   try{
    res.render('signup')
   }catch(err){
    console.log(err)
   }
}

async function signupSubmit(req,res){
 try{
      let hashedPassword = bcrypt.hashSync(req.body.password, saltRound);  //save pass in encrpyt form.
      let customer = await new Signup(req.body)
      console.log(customer);
      customer.password = hashedPassword;
      await customer.save()
      res.render('login')
 }catch(err){
    console.log(err)
 }
}
async function doLogin(req,res){
  try{
       console.log(req.body);
       let user = await Signup.findOne({ email : req.body.username });
       if(!user){
        res.end('<h2>No User Found</h2>');
       }else{
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(isMatch){
          if(user.usertype === 1){
            res.render('welcomeadmin');
          }else{
            res.render('welcomeuser');
          }
          res.render('welcomeuser');
        }else{
          res.end("Wrong Password");
        }
       }
  } catch(err){
    console.log(err);
  }
}


module.exports = {
  loginpage,
  signuppage,
  signupSubmit,
  doLogin
}