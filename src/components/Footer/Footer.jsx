import React from "react"
import logo from "../../img/jose_logo_new.png";
import './Footer.scss';

const Footer = () => (
    <footer className="footer page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
            <img
              alt=""
              src={logo}
              className="d-inline-block align-top"
            />
        </div>

    </footer>
);

export default Footer