const Signup = require('../models/Signup');
const bcrypt = require('bcrypt');
const saltRound = 10;

async function createAdmin(){
  try{
      let password = bcrypt.hashSync('12345',saltRound);
      let userSchema = {
        firstname: 'Admin',
        email: 'admin@rdec.in',
        password: password,
        usertype: 1
      }
      let user = new Signup(userSchema);
      await user.save();
      console.log("Admin has been created sucessfully");
  }catch(err){
    console.log(err,'err');
  }
}
module.exports = {
  createAdmin
}