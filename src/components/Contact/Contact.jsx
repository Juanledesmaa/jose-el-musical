import React from "react";
import { Parallax } from 'react-parallax';
import background from "../../img/background-cheto.png";
import { Col, Row } from 'react-bootstrap';
import { Element, scroller } from 'react-scroll';
import { Image } from 'react-bootstrap';
import './Contact.scss';

import donativo from '../../img/donacion-cheto.png';

const Contact = ({ setModalShow }) => {

    return (
        <Element name="formSection">
        <div className="contact">
            <Parallax blur={{ min: -15, max: 15 }} bgImage={background} bgImageAlt="the cat" strength={-500} className="bg-banner">
                <div className="content-contact">

                    <Row className="justify-content-center">
                        <Col xs={12} sm={10} md={8} lg={6}>
                            <div className="content-box">
                                <h2><span className="first-word">¡Dona</span> <span className="last-word">Hoy!</span></h2>
                                <h3 className="mb-2">Todo sueño comienza con un soñador. Ayúdanos a hacer realidad nuestro nuevo templo con tu donación. Cada aporte nos acerca a cumplir este gran sueño.</h3>

                                <Image className='mb-5 mr-2 ml-2' src={donativo} fluid />
                               
                                
                            </div>
                        </Col>
                    </Row>

                </div>
            </Parallax>
        </div>
    </Element>
    );


};

export default Contact;