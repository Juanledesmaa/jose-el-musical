import React from "react";
import { Parallax } from 'react-parallax';
import { Row, Col } from 'react-bootstrap';

//include images into your bundle
import './Introduction.scss';
import background from "../../img/parallax_background_protagonists_2.jpg";
import localidad from "../../img/localidad.jpg";

//create your first component
const Introduction = () => (
    <div className="introduction">
        <Parallax blur={{ min: -15, max: 15 }} bgImage={background} bgImageAlt="the cat" strength={-500} className="bg-banner">
            <section className="d-flex align-items-center mb-0 position-relative">
                <div class="responsive-container-block bigContainer">
                    <div class="responsive-container-block Container bottomContainer">
                        <div class="allText bottomText">
                            <div className='col-md-12 section-title'>
                                <h2><span className="first-word">Acerca de</span> <span className="last-word">la obra</span></h2>
                            </div>
                            <h4 class="text-blk description">José el Soñador” es un recuento musical moderno de la historia de José; un soñador que sobrepasó sus circunstancias por no perder su fe. A través de este musical deseamos presentar un mensaje lleno de alternativas ante la problemática social existente en Puerto Rico.

                                Tales como violencia entre familia, incomprensión y falta de perdón entre los miembros.
                            </h4>

                            <h2 className="date-text">Domingo, 25 de agosto 2024</h2>
                            <h2 className="date-text">2:30pm</h2>
                            <h2 className="date-text mb">Performing Arts Center, Tasis, Dorado, PR</h2>

                            <div className='col-md-12 section-title'>
                                <h2><span className="last-word smaller">El musical constará de:</span></h2>
                            </div>
                            <Row>
                                {/* Column 1 */}
                                <Col xs={12} md={6} lg={4}>
                                    <h4 className="title">18</h4>
                                    <h4 className="sub-title">Piezas musicales</h4>
                                </Col>

                                {/* Column 2 */}
                                <Col xs={12} md={6} lg={4}>
                                    <h4 className="title">20+</h4>
                                    <h4 className="sub-title">Personajes</h4>
                                </Col>

                                {/* Column 3 */}
                                <Col xs={12} md={6} lg={4}>
                                    <h4 className="title">1</h4>
                                    <h4 className="sub-title">Coral</h4>
                                </Col>

                                {/* Column 4 */}
                                <Col xs={12} md={6}>
                                    <h4 className="title">1</h4>
                                    <h4 className="sub-title">FUNCIÓN</h4>
                                </Col>

                                {/* Column 5 */}
                                <Col xs={12} md={6}>
                                    <h4 className="title">2 horas</h4>
                                    <h4 className="sub-title">DURACIÓN</h4>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </section>

        </Parallax>

    </div>
);

export default Introduction;
