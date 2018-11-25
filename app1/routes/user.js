const express = require("express");
const router = express.Router();
const passport = require('passport');
//const User = require('../models/userQuery');


router.get('/login',(req,res) =>{
  res.send("hello login");
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/user/login',failureFlash: true}),
  (req,res)=>{
    res.json({text:"you are logged in"});
  });








// router.post("/login", (req,res) => {
//   const company = req.body.company;
//   const email = req.body.email;
//   const password = req.body.password;
//
 // User.findUser(company,email,password, (err,user) =>{
 //   if(err) throw err;
 //   if(user ==null){
 //     res.json({
 //       status : false,
 //       "user" : "No user found"});
 //   }else{
 //     res.json(user);
 //     //load the relevant profile of the user or admin
 //    }
 // });
//
//
// });

module.exports = router;
