const pool = require('../config/database');

//save company register data in database
module.exports.saveCompany = (companyName,companyEmail,password) => {
  const qry = "insert into company (companyName,companyEmail,password) values (?,?,?)";


  pool.query(qry,[companyName,companyEmail,password], (err,result) => {
    if (err) throw err;
    else{
      console.log("data inserted successfully");

      return;
    }
  });
}

//checkEmail - Email alredy registered or not
module.exports.checkEmail =(companyEmail, statusCallback) =>{
  const qry = "select * from company where companyEmail=?";

  pool.query(qry,[companyEmail], (err,result) => {
    if (err) throw err;

    if(result[0]==null){
      //email not registered
      statusCallback(null,false);
    }else{
      //email already registered
        statusCallback(null,true);
      }
  });

}
