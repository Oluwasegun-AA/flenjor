import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { flenjorNameLogo } from '../../assets';

function NavigationBar(): ReactElement {
  const navigateTo = useNavigate();

  const handleClick = () => {
    navigateTo('/');
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
          <span className="nav_slogan">#TheSoftLife</span>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
