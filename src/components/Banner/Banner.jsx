import React from "react";
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import titleImage from "../../img/titulos.png";
import videoBg from "../../img/video_transicion_jose_op.mp4";
import videoBgDesktop from "../../img/video_transicion_jose_op_desktop.mp4";
import MarqueeBanner from "../MarqueeBanner/MarqueeBanner";
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import staticBackground from '../../img/static_background.png';
import { Image } from 'react-bootstrap';

import './banner.scss';

const Banner = () => {

  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const listener = (e) => setIsLowPowerMode(e.matches && /iPhone/i.test(userAgent));
    
    listener(mediaQuery); // Set initial value
    mediaQuery.addListener(listener); // Add listener for changes

    return () => mediaQuery.removeListener(listener); // Clean up
}, []);

    return (
      <div className="banner">
        <section className="d-flex align-items-center mb-0 position-relative">

        {isLowPowerMode ? (
                <Image src={staticBackground} alt="Static Image" className="bg-banner static-image" fluid />
            ) : (
                <>
                    <video src={videoBgDesktop} autoPlay loop muted playsInline className="bg-banner video-desktop" />
                    <video src={videoBg} autoPlay loop muted playsInline className="bg-banner video-mobile" />
                </>
            )}

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
                <Link to="formSection" smooth={true} duration={500}>Reservar tickets<br /> <span className="smaller">Segunda función</span></Link>
                </Button>
              </Col>
            </Row>
          </div>
          <MarqueeBanner></MarqueeBanner>
        </section>
      </div>
    );
  };

export default Banner;
