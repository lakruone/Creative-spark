// const LocalStrategy = require("passport-local").Strategy;
// const bcrypt = require ("bcryptjs");
// const User = require('../models/userQuery');
// const pool = require('./database');
//
// module.exports = (passport) =>{
//   passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField : 'password',
//     passReqToCallback : true
//   },(req,email,password,done) =>{
//
//     //check email
//     User.findEmail(email, (err,user) =>{
//       if(err) throw err;
//       if(user ==false){
//           //user not found
//         return done(null,false,req.flash('notify', 'User Not Found'));
//       }
//
//       //check password
//       if(password ==user.password){
//         return done(null,user);
//       }else{
//         return done(null,false,req.flash('notify', 'Password Incorrect'));
//       }
//
//
//           // bcrypt.compare(password,user.password, (err,isMatch)=> {
//           //   if(err) throw err;
//           //   if(isMatch){
//           //     return done(null,user);
//           //   }else{
//           //     //password incorrect
//           //     return done(null,false);
//           //     }
//           // });
//
//
//       });
//
//   }));
//
//   passport.serializeUser((user, done)=> {
//     done(null, user.empID);
//   });
//
//   passport.deserializeUser(function(id, done) {
//   pool.query("select * from employee where empID = "+empID,function(err,rows){
//     done(err, rows[0]);
//   });
// });
// }
