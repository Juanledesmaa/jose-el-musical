import React from "react";
import { Parallax } from 'react-parallax';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import background from "../../img/parallax_background_protagonists_3.jpg";
import { Col, Row } from 'react-bootstrap';
import { Element } from 'react-scroll';
import './Contact.scss';

const Contact = () => (
    <Element name="formSection">
        <div className="contact">
            <Parallax blur={{ min: -15, max: 15 }} bgImage={background} bgImageAlt="the cat" strength={-500} className="bg-banner">
                <div className="content-contact">

                    <Row className="justify-content-center">
                        <Col xs={12} sm={10} md={8} lg={6}>
                            <div className="content-box">
                                <h2><span className="first-word">¡Separa tus</span> <span className="last-word">Boletos!</span></h2>

                                <Form netlify>
                                    <Form.Group className="mb-3" controlId="formFirstName">
                                        <Form.Label><h3>Nombre</h3></Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="Tu nombre" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formLastName">
                                        <Form.Label><h3>Apellido</h3></Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="Apellido" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><h3>Email</h3></Form.Label>
                                        <Form.Control size="lg" type="email" placeholder="Ingresar Email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formTickets">
                                        <Form.Label><h3>Cantidad de tickets:</h3></Form.Label>
                                        <Form.Select aria-label="Numero de tickets:">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="Mas de 5">+5</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <div className="button-container">
                                        <Button variant="primary" type="submit">
                                            Enviar solicitud
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Parallax>
        </div>
    </Element>
);

export default Contact;
