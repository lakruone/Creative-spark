import React,{Component} from 'react';
import { Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import NavBarMain from './Navbarmain';
//import Footerpage from './Footerpage';

import './Signup.css';
class Signup extends Component{

    constructor() {
        super();
        this.state = {
            fname: '',
            lname:'', 
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        console.log(user);
    }

   

    render(){

        return(/*
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <div className="col-md-10">
      
       
            <form className="form-horizontal" method="post" action="/addUser">
           
           
                <div className="form-group">
                    <label htmlFor="exampleInputFirstName" className="col-sm-2 control-lable">First Name</label>
                    <div className= "col-sm-10">
                        <input type="text" className="form-control" id="exampleInputFirstName" placeholder="Enter first name" name="fname" />
                    </div>
                </div>
    
                <div className="form-group">
                    <label htmlFor="exampleInputFirstLast" className="col-sm-2 control-lable">Last Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="exampleInputFirstLast" placeholder="Enter last name" name="lname" />
                    </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="col-sm-2 control-lable">Email</label>
                    <div className= "col-sm-10">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" />
                    </div>
                </div>
    
                <div className="form-group">
                    <label htmlFor="inputPassword" className="col-sm-2 control-lable">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" />
                    </div>
                </div>
    
                <div className="form-group">
                    <label htmlFor="inputPassword2" className="col-sm-2 control-lable">Confirm Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Confirm Password" name="password_confirm" />
                    </div>
                </div>
            
               
                
            </form>
            </div>
    
            </div>*/

            <div className="container" style={{ marginTop: '50px', width: '600px'}}>
              <NavBarMain/>
            <Row>
          <Col md="10">
            <Card>
              <CardBody>
            
            <form onSubmit={ this.handleSubmit }>
            <p className="h5 text-center mb-4">Sign up</p>
                <div className="form-group">
                    <Input
                    label="Your First name" icon="user"  
                    validate error="wrong" success="right"
                    type="text"
                    className="form-control"
                    name="fname"
                    onChange={ this.handleInputChange }
                    value={ this.state.fname }
                    />
                </div>
                <div className="form-group">
                    <Input
                    label="Your Last name" icon="user"  
                    validate error="wrong" success="right"
                    type="text"
                    className="form-control"
                    name="lname"
                    onChange={ this.handleInputChange }
                    value={ this.state.lname }
                    />
                </div>
                <div className="form-group">
                    <Input
                    label="Your email" icon="envelope" 
                    validate error="wrong" success="right"
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                </div>
                <div className="form-group">
                    <Input
                    type="password"
                    label="Your password" icon="lock"
                    validate
                    className="form-control"
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                </div>
                <div className="form-group">
                    <Input
                    type="password"
                    label="Confirm your password" icon="exclamation-triangle"  
                    validate error="wrong" success="right"
                    className="form-control"
                    name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm }
                    />
                </div>
                <div className="text-center" style={{color:'white'}}>
                    <Button type="submit" gradient="blue" className="btn-block z-depth-1a"><a href="/" className="white-text"> Sign Up</a></Button>
                </div>
            </form>
            </CardBody>
            </Card>
          </Col>
        </Row>
        {/* <Footerpage/> */}
        </div>

            /*
            import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody } from 'mdbreact';

class FormsPage extends React.Component  {
  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                    <Input label="Your password" icon="lock" group type="password" validate/>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="cyan" type="submit">Register</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default FormsPage;
            */


        );
    }
}

export default Signup;