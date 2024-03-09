import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { danceNav, flenjorNameLogo } from '../../assets';

function NavigationBar(): ReactElement {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <nav className="container nav">
      <div className="centered_content nav_content">
        <div className="nav_centreLogo">
          <div>
            <div className="link logo" onClick={handleClick}>
              <img className="nav_logo" src={flenjorNameLogo} alt="darkmode" />
            </div>
          </div>
        </div>
        <div className="nav_centreButtons">
          <img className="nav_contrastModeIcon" src={danceNav} alt="darkmode" />
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
