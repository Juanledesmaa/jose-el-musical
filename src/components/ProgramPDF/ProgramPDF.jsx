import React from 'react';
import samplePDF from '../../img/programa.pdf';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './ProgramPDF.scss';

export default function ProgramPDF() {
  return (

    <div className="program-pdf">
      <div id="features" className='text-center'>
        <div className='container'>
          <div className='col-md-8 section-title text-center mx-auto'>
            <h2>¿Quieres toda la información acerca de la obra?</h2>
            <h3>Explora todos los detalles del musical, incluyendo la trama, los personajes, y la información sobre los autores y directores. Descarga el programa completo utilizando el siguiente botón para que lleves todos los detalles de nuestra obra en la palma de tu mano.</h3>
          </div>
          <div className='row'>
            <div className="pdf-container">


              <div className="button-container">
                <Row className="justify-content-center">
                  <Col xs={10} sm={8} lg={6} xl={4} className="text-center">
                    <Button variant="primary" size="sm" block className="d-flex align-items-center justify-content-center">
                      <a href={samplePDF} download>Descargar programa</a>
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}