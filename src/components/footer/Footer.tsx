import React, { ReactElement } from 'react';
import {
  linkedinBlack,
  twitterBlack,
  instagramBlack,
  tiktokBlack,
  youtubeBlack,
} from '../../assets';

function Footer(): ReactElement {
  return (
    <nav className="container footer">
      <div className="centered_content footer_content">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/weflenjor/"
        >
          <img src={linkedinBlack} alt="linkedIn" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/weflenjor"
        >
          <img src={twitterBlack} alt="twitter" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/weflenjor/"
        >
          <img src={instagramBlack} alt="instagram" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://tiktok.com/@weflenjor"
        >
          <img src={tiktokBlack} alt="tiktok" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/@flenjor"
        >
          <img src={youtubeBlack} alt="tiktok" />
        </a>
      </div>
    </nav>
  );
}

export default Footer;
