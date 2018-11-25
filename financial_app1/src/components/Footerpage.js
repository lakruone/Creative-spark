import React from "react";
import { Col, ModalFooter, Container, Row, Footer, Button, Fa } from "mdbreact";
import { Link } from 'react-router-dom';

class Footerpage extends React.Component {
render() {
return (
<Footer color="blue-grey darken-4" className="font-small pt-2 mt-4" >
  <Container fluid className="text-center text-md-left" >
    <Row>
      <Col md="3">
      <h5 className="title">Footer Content</h5>
      <p>
        Here you can use rows and columns here to organize your footer
        content.
      </p>
      </Col>
      <Col md="3">
      <ul>
      <h5 className="title">Links</h5>
        <li className="list-unstyled">
          <a href="#!">Link 1</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 2</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 3</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 4</a>
        </li>
      </ul>
      </Col>
      <Col md="3">
      <ul>
      <h5 className="title">Links</h5>
        <li className="list-unstyled">
          <a href="#!">Link 1</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 2</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 3</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 4</a>
        </li>
      </ul>
      </Col>
      <Col md="3">
      <ul>
      <h5 className="title">Links</h5>
        <li className="list-unstyled">
          <a href="#!">Link 1</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 2</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 3</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 4</a>
        </li>
      </ul>
      </Col>                        
    </Row>

  <ModalFooter className="mx-5 pt-3 mb-1" style={{ height: '120px'}}>
  <Container >
    <div className="row my-3 d-flex justify-content-center" style={{ width: '800px'}}>
      <a href="#"  className="fa-3x p-2 m-3 fb-ic"><Fa icon="facebook" className="white-text text-center" /></a>
      <a href="#"  className="fa-3x p-2 m-3 tw-ic"><Fa icon="twitter" className="white-text text-center" /></a>
      <a href="#"  className="fa-3x p-2 m-3 gplus-ic"><Fa icon="google-plus" className="white-text text-center" /></a>
    </div>
  </Container>
    </ModalFooter>

  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
    </Container>
  </div>
</Footer>
);
}
}

export default Footerpage;