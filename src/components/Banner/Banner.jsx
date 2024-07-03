import React from "react";
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import titleImage from "../../img/titulos.png";
import videoBg from "../../img/video_transicion_jose_op.mp4";
import videoBgDesktop from "../../img/video_transicion_jose_op_desktop.mp4";
import { Link } from 'react-scroll';

import './banner.scss';

const Banner = () => {

    return (
      <div className="banner">
        <section className="d-flex align-items-center mb-0 position-relative">
          <video src={videoBg} autoPlay loop muted className="bg-banner video-mobile" />
          <video src={videoBgDesktop} autoPlay loop muted className="bg-banner video-desktop" />
          <div className="shadow-overlay"></div>
          <div className="title-container">
            <Row className="justify-content-center">
              <img src={titleImage} className="title-image" onload="this.classList.add('loaded')" alt="musical-logo" />
            </Row>
          </div>
          <div className="button-container">
            <Row className="justify-content-center">
              <Col xs={10} sm={8} lg={6} xl={4} className="text-center">
                <Button variant="primary" size="sm" block className="d-flex align-items-center justify-content-center">
                <Link to="formSection" smooth={true} duration={500}>Solicitar tickets</Link>
                  {/* <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Llamar */}
                </Button>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  };

export default Banner;
