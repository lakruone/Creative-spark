/*import React,{Component} from 'react';
import './Login.css';

class Login extends Component{

    render(){

        return(
            
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
             <h2 style={{marginBottom: '40px'}}>Sign Up</h2>
            <form action="">
               <div className="form-group">
                   
                   <input type="email" className="form-control" placeholder="Email address" required /> 
               </div>
               <div className="form-group">
                   
                   <input type="password" className="form-control" placeholder="Password" required /> 
               </div>
               <div className="B">
                    <button type="submit" className="btn btn-primary col-xs-6 col-sm-4">Log In</button>
               </div>
                <div className="A">
				    <a className="navbar-brand" href="#"><label className="col-form-label col-form-label-sm" id="F" htmlFor="inputSmall">Forget password?</label></a>
			    </div>
           </form>
           </div>
           

        );
    }
}

export default Login;*/

import React, { Component } from 'react';
import { Row, Col, Input, Button,Card ,CardBody,Fa,ModalFooter} from 'mdbreact';
import { Link } from 'react-router-dom';
import NavBarMain from './Navbarmain';
//import Footerpage from './Footerpage';

import './Login.css';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
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
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user);
    }

    render() {
        return(
            <div>
                <NavBarMain/>
        <div className="container" style={{ marginTop: '50px', width: '1000px' }}>
          
            <Row>
          <Col md="6">
          <Card>
              <CardBody>
 
          <p className="h5 text-center mb-4">Sign in</p>
            <form onSubmit={ this.handleSubmit } action="/abc">
                <div className="form-group">
                    <Input
                    icon="envelope"
                    type="email"
                    validate error="wrong" success="right"
                    label="Type your email"
                    className="form-control"
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                </div>
                <div className="form-group">
                    <Input
                    icon="lock"
                    type="password"
                    validate
                    label="Type your password"
                    className="form-control"
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                </div>
                <p className="font-small blue-text d-flex justify-content-end pb-3"><a href="fogotpassword" className="blue-text ml-1">Forgot Password?</a></p>
                <div className="text-center">
                <Button type="submit" gradient="blue" className="btn-block z-depth-1a"> <a href="/companyhome" className="white-text">Login </a></Button>
              </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
                  <div className="row my-3 d-flex justify-content-center">
                    <a color="white"  className="fa-2x p-2 m-2 fb-ic"><Fa icon="facebook" className="blue-text text-center" /></a>
                    <a color="white"  className="fa-2x p-2 m-2 tw-ic"><Fa icon="twitter" className="blue-text" /></a>
                    <a color="white"  className="fa-2x p-2 m-2 gplus-ic"><Fa icon="google-plus" className="blue-text" /></a>
                  </div>
                  <ModalFooter className="mx-5 pt-3 mb-1">
                  <p className="font-small grey-text d-flex justify-content-end">Not a member? <Link className="blue-text ml-1" to="/companyregister"> Sign Up</Link></p>
                </ModalFooter>
            </form>
            </CardBody>
            </Card>
            </Col>
        </Row>
            
            {/*
               <Container>
        <Row>
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Type your password" icon="lock" group type="password" validate/>
              </div>
              <div className="text-center">
                <Button>Login</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
            */}
            </div>
            {/* <Footerpage/> */}
        </div>
        )
    }
}

export default Login;