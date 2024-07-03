import React from "react";
import { Parallax } from 'react-parallax';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import background from "../../img/atlanta_background.png";
import { Col, Row } from 'react-bootstrap';
import './Contact.scss';

const Contact = () => (
    <div className="contact">
        <Parallax blur={{ min: -15, max: 15 }} bgImage={background} bgImageAlt="the cat" strength={-500} className="bg-banner">
            <div className="content-contact">

                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <div className="content-box">
                            <h2><span className="first-word">¿Necesitas</span> <span className="last-word">algo?</span></h2>

                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><h3>Email</h3></Form.Label>
                                    <Form.Control size="lg" type="email" placeholder="Ingresar Email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><h3>Tu nombre</h3></Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Tu nombre" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Label><h3>¿En que podemos ayudarte?</h3></Form.Label>
                                    <Form.Control size="lg" as="textarea" aria-label="With textarea" />
                                </Form.Group>
                                <div className="button-container">
                                    <Button variant="primary" type="submit">
                                        Enviar consulta
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>

            </div>
        </Parallax>
    </div>
);

export default Contact;
