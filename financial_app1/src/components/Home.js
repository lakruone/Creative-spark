import React, { Component } from 'react';
import { Container, Row, Col,Fa,Button} from 'mdbreact';
import NavBarMain from './Navbarmain';
//import Footerpage from './Footerpage';

export default class Home extends Component {
    render() {
        return (
            <div >
           
            <NavBarMain/>
            <div>
            <Container>
        <section className="my-2" style={{ marginTop: '50px', width: '900px'}}>
          <h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          
          
          <div className="text-center" style={{color:'white'}}>
            <Button type="submit" className="btn-btn primary"><a href="/companyregister" className="white-text">Register now.</a></Button>
          </div>
         <br/>
         <br />

          <Row>
            <Col lg="5" className="text-center text-lg-left">
              <img  className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image" />
            </Col>
            <Col lg="7">
              <Row className="mb-3">
                <Col size="1">
                  <Fa icon="mail-forward" size="lg" className="indigo-text"/>
                </Col>
                <Col xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Safety</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="1">
                  <Fa icon="mail-forward" size="lg" className="indigo-text"/>
                </Col>
                <Col xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Technology</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="1">
                  <Fa icon="mail-forward" size="lg" className="indigo-text"/>
                </Col>
                <Col xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Finance</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
        </Container>
        </div>
        {/* <Footerpage/> */}
    </div>
    

        );
    }
}

