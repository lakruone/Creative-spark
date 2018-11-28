const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/adminQuery');

//company home
router.get('/',(req,res) =>{
  res.send("Company home - Not designed yet");
});

//go to company profile
router.get('/profile/:companyName',(req,res) =>{
  const companyName =  req.params.companyName;
  User.companyDetails(companyName, (err,result) =>{
    if(err) throw err;
    if(result){
      res.json(result);
    }
  });
});


//registering the company
router.post("/register", (req,res) => {
  const companyName = req.body.companyName;
  const companyEmail = req.body.companyEmail;
  var password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  let errors =[];

  if(password != confirmPassword){
    errors.push({text :"password do not match"});
  }

  if(password.length < 4){
    errors.push({text:"password must be atleast 4 charactors"})
  }

  if(errors.length > 0){
    //send other details in the form back to the page
    errors.push({
      companyName :companyName,
      companyEmail : companyEmail,
      password : password,
      confirmPassword : confirmPassword
    })
    res.json(errors,);
  }else{
    User.checkEmail(companyEmail, (err, status) =>{
      if(err) throw err;
      if(status ==true){
        res.json({text :"Email already registered"});
      }else{
          bcrypt.genSalt(10,(err,salt) =>{
            bcrypt.hash(password,salt, (err,hash) =>{
              if(err) throw err;
             password = hash;

             //save data in to the database
             User.saveCompany(companyName,companyEmail,password);
             res.json({"data" :"company registered successfully"});
             //res.send("passed")
            });
          });

        }
    });
  }




});



module.exports = router;
