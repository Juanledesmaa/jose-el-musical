import React from "react"
import Marquee from "react-fast-marquee";
import './MarqueeBanner.scss';

const MarqueeBanner = () => (
   <Marquee className="MarqueeBanner" gradient={false} speed={120}>
        <h2> <span className="red">Primera función <span className="bolder">sold out</span></span>¡Segunda función ya disponible!</h2>
   </Marquee>
);

export default MarqueeBanner