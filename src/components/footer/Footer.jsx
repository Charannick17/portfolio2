import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text"> </p>
        <div className="footer__socials">
          <a href="https://github.com/Charannick17" target="_blank" rel="noopener noreferrer" className="footer__link">
            <i className='bx bxl-github'></i>
          </a>
          <a href="https://www.linkedin.com/in/nese-charan-teja-56145b27a/" target="_blank" rel="noopener noreferrer" className="footer__link">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="mailto:ncharan229@gmail.com" className="footer__link">
            <i className='bx bx-envelope'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
