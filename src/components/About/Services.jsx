
import React from "react";
import './Services.scss'

// Import your images
import joseProfile from '../../img/jose_profile.png';

// Mapping object for image imports
const imageMap = {
  image1: joseProfile,
  image2: joseProfile,
  image3: joseProfile,
  // Add more mappings as needed
};

const Services = (props) => (
    <div className="services">
        <div id="features" className='text-center'>
            <div className='container'>
                <div className='col-md-12 section-title'>
                    <h2><span className="first-word">Conoce los</span> <span className="last-word">personajes</span></h2>
                </div>
                <div className='row'>
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.title}-${i}`} className='col-xs-12 col-sm-12 col-lg-4'>
                                <div className="icon-center">
                                    <div className="icon-container">
                                        {/* Use dynamic image path from imageMap */}
                                        <img src={imageMap[d.image]} alt={d.title} />
                                    </div>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.text}</p>
                            </div>
                        ))
                        : 'Loading...'}
                </div>
            </div>
        </div>
    </div>
);

export default Services;
