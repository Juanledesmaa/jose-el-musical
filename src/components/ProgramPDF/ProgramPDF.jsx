import React from 'react';
import samplePDF from '../../img/programa.pdf';
import './ProgramPDF.scss';

export default function ProgramPDF() {
  return (

    <div className="program-pdf">
      <div id="features" className='text-center'>
        <div className='container'>
          <div className='col-md-12 section-title'>
            <h2>¿Quieres toda la información acerca de la obra?</h2>
            <h3>Explora todos los detalles del musical, incluyendo la trama, los personajes, y la información sobre los autores y directores. Descarga el programa completo en PDF para que lleves todos los detalles de nuestra obra en la palma de tu mano.</h3>
          </div>
          <div className='row'>
            <div className="pdf-container">
            <iframe
              src={samplePDF}
              className='pdf-file'
              toolbar="0"
              style={{ width: '90%', height: '80vh' }}
              frameBorder="0"
              title="PDF Viewer"
            >
              This browser does not support PDFs. Please download the PDF to view it: <a href={samplePDF}>Download PDF</a>
            </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}