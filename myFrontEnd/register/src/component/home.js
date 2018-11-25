import React from 'react';
import { Container, Row, Col, Button } from 'mdbreact';

class Home extends React.Component  {
  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <form>
              <p className="h2 text-center mb-4">Home Page</p>

              <div className="text-center">
              <Button href="company/register" color="primary">Register Company</Button>

              <Button href="user/login" target="_blank">Login</Button>
                <Button href="/profile" target="_blank">Profile</Button>

              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Home;
