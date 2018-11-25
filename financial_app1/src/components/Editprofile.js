import React, { Component } from 'react';
import { Container, Row, Col,Fa,Button, Input} from 'mdbreact';
import Navbar1 from './Navbar1';

export default class Editprofile extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname:'', 
            email: '',
            password: '',
            password_confirm: '',
            role: '',
            fname: '',
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
            password_confirm: this.state.password_confirm,
            role: this.state.role,
            fname: this.state.fname,
        }
        console.log(user);
    }
    render() {
        return (
            <div className="row my-3 d-flex justify-content-center" style={{  width: '900px'}}>

            <Navbar1/>
            <Container>

            <Row>
          <Col md="10">
           
            
            <form onSubmit={ this.handleSubmit }>
            <p className="h5 text-left mb-4">Edit Profile</p>
                <div className="form-group">
                    <Input
                    label="Your First name"   
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
                    label="Your Last name"   
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
                    label="Your email"  
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
                    label="Your password" 
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
                    label="Confirm your password"  
                    validate error="wrong" success="right"
                    className="form-control"
                    name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm }
                    />
                </div>
                <div className="form-group">
                    <Input
                    label="Your Employee Role"   
                    validate error="wrong" success="right"
                    type="text"
                    className="form-control"
                    name="role"
                    onChange={ this.handleInputChange }
                    value={ this.state.role }
                    />
                </div>
                {/* <div className="col-md-4 ml-auto">
                    <Button type="submit" color="success" ><a href="/" className="white-text">Save</a></Button>
                </div> */}
                <div className="text-center" style={{color:'white'}}>
                    <Button type="submit" gradient="blue" className="btn-block z-depth-1a"><a href="/yourprofile" className="white-text">Save</a></Button>
                </div>
            </form>
           
          </Col>
        </Row>
        {/* <Footerpage/> */}
        
        </Container>
        
    </div>
    

        );
    }
}