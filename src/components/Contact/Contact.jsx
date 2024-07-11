import React from "react";
import { Parallax } from 'react-parallax';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import background from "../../img/parallax_background_protagonists_3.jpg";
import { Col, Row } from 'react-bootstrap';
import { Element, scroller } from 'react-scroll';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Image } from 'react-bootstrap';
import './Contact.scss';

import donativo from '../../img/donativo_done.png';

const Contact = ({ setModalShow }) => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs
        .sendForm(
          "service_jlafxkr",
          "template_0j3hrk8",
          e.target,
          "4a_udFTfxuyCqdANG"
        )
        .then(
          (result) => {
            setStateMessage('¡Tu solicitud ha sido enviado exitosamente! Si tienes alguna consulta adicional, puedes llamarnos al: 939-484-9396');
            setIsSubmitting(false);

            setTimeout(() => {
              setStateMessage(null);
            }, 15000);
            setModalShow(true);
          },
          (error) => {
            setStateMessage('Algo salió mal, por favor inténtalo de nuevo más tarde.');
            setIsSubmitting(false);
            scroller.scrollTo('succesMessageScrollElement', {
                duration: 100,
                smooth: true,
                offset: 50,
              });
            setTimeout(() => {
              setStateMessage(null);
            }, 10000);
          }
        );

      e.target.reset();
    };

    return (
        <Element name="formSection">
        <div className="contact">
            <Parallax blur={{ min: -15, max: 15 }} bgImage={background} bgImageAlt="the cat" strength={-500} className="bg-banner">
                <div className="content-contact">

                    <Row className="justify-content-center">
                        <Col xs={12} sm={10} md={8} lg={6}>
                            <div className="content-box">
                                <h2><span className="first-word">¡Separa tus</span> <span className="last-word">Boletos!</span></h2>
                                <h3 className="mb-5">Los boletos para la primera función están agotados. ¡Pero tenemos buenas noticias! Hemos añadido una segunda función para el mismo día a las 7:00 p.m.</h3>
                                <h3 className="mb-2">Para tu comodidad, puedes realizar tu pago por ATH Móvil a:</h3>

                                <Image className='mb-5 mr-2 ml-2' src={donativo} fluid />
                               
                                <Form name="Contacto" onSubmit={sendEmail}>
                                <input type="hidden" name="form-name" value="contact" />
                                    <Form.Group className="mb-3" controlId="formFirstName">
                                        <Form.Label><h3>Nombre Completo</h3></Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="Tu nombre" id="first_name" name="first_name" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><h3>Email</h3></Form.Label>
                                        <Form.Control size="lg" type="email" placeholder="Ingresar Email" id="email" name="email" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><h3>Numero de Telefono:</h3></Form.Label>
                                        <Form.Control size="lg" type="tel" placeholder="Ingresar Telefono" id="phone_number" name="phone_number" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formTickets">
                                        <Form.Label><h3>Cantidad de tickets:</h3></Form.Label>
                                        <Form.Select aria-label="Numero de tickets:" id="amount_tickets" name="amount_tickets">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="Mas de 5">+5</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <div className="button-container">
                                        <Button variant="primary" type="submit" value="Send" disabled={isSubmitting}>
                                            Enviar solicitud
                                        </Button>
                                    </div>
                                    <Element name="succesMessageScrollElement">
                                        {stateMessage && <p className="success-message">{stateMessage}</p>}
                                    </Element>
                                </Form>
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