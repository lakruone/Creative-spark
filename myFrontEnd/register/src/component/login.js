import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

class UserLog extends React.Component  {

  constructor() {
      super();
      this.state = {
          companyName: '',
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
          company: this.state.companyName,
          email: this.state.email,
          password: this.state.password,

      }
      console.log(user);

    fetch('http://localhost:5000/user/login' , {
         method: "POST",
         headers: {
           'Content-type': 'application/json'
         },
         body: JSON.stringify(user)
       })
        .then((result) => result.json())
        .then((info) => {
          if(info.data === false){
            console.log("Invalid user");
          }else{
            console.log(info);
            console.log("load the profile relavant to user data");
          }
         })


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
                label="company name"
                icon="user" group type="text"
                validate error="wrong" success="right"
                name ="companyName"
                onChange = {this.handleInputChange}
                value = {this.state.companyName}
                />

                <Input
                label="email"
                icon="envelope"
                group type="email"
                validate error="wrong" success="right"
                name ="email"
                onChange={ this.handleInputChange }
                value={ this.state.email}
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

              </div>
              <div className="text-center">
                <Button type="submit" color="primary">Login</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default UserLog;
