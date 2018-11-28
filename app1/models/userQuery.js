const pool = require('../config/database');


//find  email
// module.exports.findEmail = (email,callback)=>{
//   const qry = "select * from employee where email=?";
//
//   pool.query(qry,[email],(err,result) => {
//     if(err) throw err;
//     if(result[0] == null){
//       callback(null,false);
//     }else{
//       callback(null,result[0]);
//     }
//   });
// }




//find user function
module.exports.findUser = (company,email,password,callback) => {
  const qry1 = "select * from company where companyName=? AND companyEmail=? AND password =?"
  const qry2 = "select * from employee e, company c where e.companyID = c.companyID AND c.companyName=? AND e.email =? AND e.password=?"

  pool.query(qry1,[company,email,password],(err,result) =>{
    if(err) throw err;
    var AdminData = result[0];
    if(AdminData == null){
      //user is not an admin
      pool.query(qry2,[company,email,password], (err,result) => {
        if (err) throw err;
        var data = result[0];
        if(data==null){
          //no user found
          callback(null,null);
        }
        else{
          //user found- log as employee
          callback(null,result[0]);
        }
      });
    }
    else{
    //  user found- log in as Admin
      callback(null,result[0]);
    }
 });
}
