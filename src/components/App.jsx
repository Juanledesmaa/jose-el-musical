import '../styles/App.scss';
import { useState, useEffect } from 'react';

import Banner from './Banner/Banner';
import NavigationBar from './NavigationBar/NavigationBar';
import Introduction from './Introduction/Introduction';
import Services from './About/Services';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import JsonData from '../data/data.json';
import CustomModal from './Modal/Modal';
import ProgramPDF from './ProgramPDF/ProgramPDF';

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div className="App">
      <div className="text-center">
        <NavigationBar />
        <Banner />
        <ProgramPDF />
        <Introduction />
        <Services data={landingPageData.Services} />
        {/* <Gallery data={landingPageData.Gallery} /> */}
        <Contact setModalShow={setModalShow} />
        <Footer />
        <CustomModal modalShow={modalShow} setModalShow={setModalShow} />
      </div>
    </div>
  );
};

export default App;
