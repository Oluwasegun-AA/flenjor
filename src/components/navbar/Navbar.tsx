import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { danceNav } from '../../assets';

const NavigationBar: React.FC = (): ReactElement => {
  return (
    <nav className="container nav">
      <div className="centered_content nav_content">
        <div className="nav_centreLogo">
          <div>
            <Link className="link logo" to="/">
              Filenjọ
            </Link>
          </div>
        </div>
        <div className="nav_centreButtons">
          <img className="nav_contrastModeIcon" src={danceNav} alt="darkmode" />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
