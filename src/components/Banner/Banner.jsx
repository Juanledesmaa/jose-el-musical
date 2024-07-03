import React from "react";
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import bannerSolid from "../../img/banner_jose.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

import './banner.scss';

const Banner = () => {

    const openWhatsApp = () => {
      const phoneNumber = "4707218124"; 
      const message = "¡Hola! He visitado tu página web y me gustaría solicitar un servicio. ¿Podrías proporcionarme más detalles?"; // Replace with the desired message
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    };

    const makePhoneCall = () => {
        const phoneNumber = "4707218124";
        window.open(`tel:${phoneNumber}`, '_self');
      };
  
    return (
      <div className="banner">
        <section className="d-flex align-items-center mb-0 position-relative">
          <img src={bannerSolid} alt="" className="bg-banner" />
          <div className="shadow-overlay"></div>
          <div className="button-container">
            <Row className="justify-content-center">
              <Col xs={6} sm={6} lg={4} xl={3} className="text-center">
                <Button onClick={makePhoneCall} variant="primary" size="sm" block className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Llamar
                </Button>
              </Col>
              <Col xs={6} sm={6} lg={4} xl={3} className="text-center">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  block 
                  className="d-flex align-items-center justify-content-center whatsapp"
                  onClick={openWhatsApp}
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> Whatsapp
                </Button>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  };

export default Banner;
