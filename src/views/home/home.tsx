import React, { ReactElement } from 'react';
import { Footer } from '../../components';
import BodySubSection from '../../components/body-section/BodySection';
import NavigationBar from '../../components/navbar/Navbar';

const Home: React.FC = (): ReactElement => {
  return (
    <div className="main_container">
      <NavigationBar />
      <div className="centreBody">
        <BodySubSection
          className="info"
          centerPane={
            <div>
              <div className="name">Olúwáségun</div>
              <div className="title">Software Engineer</div>
            </div>
          }
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
