import React, { Component } from 'react';
import { Row, Col, Input, Button,Card ,CardBody} from 'mdbreact';
import NavBarMain from './Navbarmain';
//import Footerpage from './Footerpage';

export default class Fogotpassword1 extends Component {

    constructor() {
        super();
        this.state = {
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
            password: this.state.password,
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
                            type="password"
                            validate
                            label="Type your password"
                            className="form-control"
                            name="password"
                            onChange={ this.handleInputChange }
                            value={ this.state.password }
                            />
                        </div>
                            <Row>
                                <div className="col-md-4">
                                <Button type="submit" ><a href="/fogotpassword" className="white-text">Back</a></Button>
                                </div>
                                <div className="col-md-4 ml-auto">
                                <Button type="submit" color="success" ><a href="/" className="white-text">Next</a></Button>
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
