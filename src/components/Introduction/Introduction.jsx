import React from "react";
import { Parallax } from 'react-parallax';

//include images into your bundle
import './Introduction.scss';
import background from "../../img/friday_nigh_race_high_quality.png";

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
                            <h4 class="text-blk description">
                            "José el Soñador" es una apasionante obra de teatro musical que narra la inspiradora historia de José, un joven con dones especiales para interpretar sueños. Basada en el relato bíblico del Génesis, la obra sigue el viaje de José desde su juventud, donde es vendido por sus propios hermanos como esclavo, hasta convertirse en un hombre de gran influencia en Egipto.

A través de momentos de desafío y perseverancia, José descubre su propósito divino y la importancia de la fe y el perdón. Con música emotiva y actuaciones poderosas, la obra captura la esencia de la redención y el poder de los sueños, ofreciendo una experiencia teatral que deja una impresión perdurable en el corazón del público.
                            </h4>
                        </div>
                        <div class="videoContainer">
                            <iframe
                                title="Video-traeme-taxi"
                                allowfullscreen="allowfullscreen"
                                class="mainVideo"
                                controls="controls"
                                src="https://www.youtube.com/embed/BFR-tV2whAU?si=YTuzJnYSF28DLSEZ"
                            ></iframe>

                            <img className="dotsImg image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg" alt="alternative"></img>
                        </div>
                    </div>
                </div>
            </section>

        </Parallax>

    </div>
);

export default Introduction;
