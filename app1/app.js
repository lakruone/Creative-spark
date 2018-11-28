const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require('cors');
//const passport = require('passport');
//const flash = require('express-flash-messages');
//const session = require('express-session');

const user = require('./routes/user');
const employee = require('./routes/employee');
const admin = require('./routes/admin');

//session middleware
// app.use(session({ cookie: { maxAge: 60000 },
//                   secret: 'woot',
//                   resave: false,
//                   saveUninitialized: false}));

//use express flash messages
//app.use(flash());

//use passport
// require('./config/passport')(passport);
// app.use(passport.initialize());

//cross origin resource sharing
app.use(cors())

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/",user);
app.use("/employee",employee);
app.use("/company",admin);



//listening port
const port = process.env.PORT||5000;
app.listen(port, () => {
  console.log(`listening the port ${port}`);
});
