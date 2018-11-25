import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

class CompanyReg extends React.Component  {

  constructor() {
      super();
      this.state = {
          companyName: '',
          companyEmail: '',
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
          companyName: this.state.companyName,
          companyEmail: this.state.companyEmail,
          password: this.state.password,
          confirmPassword: this.state.password_confirm
      }
      console.log(user);

    fetch('http://localhost:5000/company/register' , {
         method: "POST",
         headers: {
           'Content-type': 'application/json'
         },
         body: JSON.stringify(user)
       })
        .then((result) => result.json())
        .then((info) => { console.log(info); })


}


//form html
  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <form onSubmit = {this.handleSubmit}>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <Input
                icon="user" group type="text"
                label="company name"                
                validate error="wrong" success="right"
                name ="companyName"
                onChange = {this.handleInputChange}
                value = {this.state.companyName}
                />

                <Input
                label="company email"
                icon="envelope"
                group type="email"
                validate error="wrong" success="right"
                name ="companyEmail"
                onChange={ this.handleInputChange }
                value={ this.state.companyEmail}
                />

                <Input
                label="password"
                icon="exclamation-triangle"
                group type="password"
                validate error="wrong" success="right"
                name="password"
                onChange={ this.handleInputChange }
                value={ this.state.password }
                />

                <Input
                label="confirm password"
                icon="lock" group type="password"
                validate
                name ="password_confirm"
                onChange={ this.handleInputChange }
                value={ this.state.password_confirm }
                />

              </div>
              <div className="text-center">
                <Button type="submit" color="primary">Register Company</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default CompanyReg;
