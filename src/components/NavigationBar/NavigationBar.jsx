import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NavigationBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import logo from "../../img/jose_logo_new.png";

const NavigationBar = () => (
  <div className="navigationBar">
    <Navbar>
      <Container fluid>
        <Row className="w-100 align-items-center">
          <Col xs={6} className="d-flex align-items-center">
            <Navbar.Brand href="#home">
              <div className="d-flex align-items-center">
                <img
                  alt=""
                  src={logo}
                  className="d-inline-block align-top"
                />
              </div>
            </Navbar.Brand>
          </Col>
          <Col xs={6} className="d-flex align-items-center justify-content-end number-text">
            <Navbar.Toggle />
            <Navbar.Collapse className="d-flex align-items-center justify-content-end">
              {/* <FontAwesomeIcon icon={faPhone} />
              <h3 className="icon-text">939-484-9396</h3> */}

              <a href="tel:939-484-9396" className="custom-call-button">
                <FontAwesomeIcon icon={faPhone} />
                <h3 className="icon-text">939-484-9396</h3>
              </a>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </div>
);

export default NavigationBar;
