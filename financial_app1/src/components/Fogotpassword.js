import React, { Component } from 'react';
import { Row, Col, Input, Button,Card ,CardBody} from 'mdbreact';
import NavBarMain from './Navbarmain';
//import Footerpage from './Footerpage';

export default class Fogotpassword extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
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
        }
        console.log(user);
    }



    render() {
        return (
            <div className="container" style={{ marginTop: '50px', width: '1000px' }}>
              <NavBarMain/>
                <Row>
                    <Col md="6">
                    <Card>
                    <CardBody>
                        <p className="h5 text-center mb-4">Foget Password ?</p>
                        <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                        Forgot your password? Enter your login email below. We sent a link to reset your password to the following email addresses.</p>

                        <form onSubmit={ this.handleSubmit } action="/abc">
                        <div className="form-group">
                            <Input
                            type="email"
                            validate error="wrong" success="right"
                            label="Type your email"
                            className="form-control"
                            name="email"
                            onChange={ this.handleInputChange }
                            value={ this.state.email }
                            />
                        </div>
                            <Row>
                                <div className="col-md-4">
                                <Button type="submit" ><a href="/login" className="white-text">Back</a></Button>
                                </div>
                                <div className="col-md-4 ml-auto">
                                <Button type="submit" color="success" ><a href="/fogotpassword1" className="white-text">Next</a></Button>
                                </div>
                            </Row>
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
