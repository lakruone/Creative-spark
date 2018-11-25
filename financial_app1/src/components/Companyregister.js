import React,{Component} from 'react';
import { Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import NavBarMain from './Navbarmain';
//import Footerpage from './Footerpage';

//import './Signup.css';
class Companyregister extends Component{

    constructor() {
        super();
        this.state = {
            name: '',
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
            fname: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        console.log(user);
    }

    render(){

        return(

            <div className="container" style={{ marginTop: '50px', width: '600px'}}>
              <NavBarMain/>
            <Row>
          <Col md="10">
            <Card>
              <CardBody>
            
            <form onSubmit={ this.handleSubmit }>
            <p className="h5 text-center mb-4"> Register Company</p>
                <div className="form-group">
                    <Input
                    label="Company name" icon="user"  
                    validate error="wrong" success="right"
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={ this.handleInputChange }
                    value={ this.state.fname }
                    />
                </div>
                <div className="form-group">
                    <Input
                    label="Company email" icon="envelope" 
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
                    label="Password" icon="lock"
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
                    label="Confirm password" icon="exclamation-triangle"  
                    validate error="wrong" success="right"
                    className="form-control"
                    name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm }
                    />
                </div>
                <div className="text-center" style={{color:'white'}}>
                    <Button type="submit" gradient="blue" className="btn-block z-depth-1a"><a href="/" className="white-text"> Register</a></Button>
                </div>
            </form>
            </CardBody>
            </Card>
          </Col>
        </Row>
        {/* <Footerpage/> */}
        </div>

        );
    }
}

export default Companyregister;