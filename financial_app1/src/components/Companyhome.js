import React, { Component } from 'react';
import { Container, Row, Col,Fa,Button} from 'mdbreact';
import Navbar1 from './Navbar1';

export default class Companyhome extends Component {
    render() {
        return (
            <div className="row my-3 d-flex justify-content-center" style={{ marginTop: '50px', width: '900px'}}>

            <Navbar1/>
            <Container>
        <section className="my-2">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Creative Spark</h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>   
        </section>
        </Container>
        
    </div>
    

        );
    }
}

