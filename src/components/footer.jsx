import { React } from 'react';

export const Footer = (props) => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column" style={{ alignItems: 'center' }}>
            <img src="img/logo200px.png" alt="logo" width={100} />
            <div className="footer-brand-large">KOPF</div>
            <div className="footer-brand-small">Managementberatung</div>
          </div>
          <div className="footer-column">
            <p>{props.data ? props.data.copyright : 'Loading'}</p>
            <p>{props.data ? props.data.address : 'Loading'}</p>
            <p>{props.data ? props.data.phone : 'Loading'}</p>
            <p>{props.data ? props.data.email : 'Loading'}</p>
          </div>
          <div className="footer-column">
            <a href="#header" className="page-scroll">
              Home
            </a>
            <a href="#features" className="page-scroll">
              Leistungen
            </a>
            <a href="#about" className="page-scroll">
              Über uns
            </a>
            <a href="#contact" className="page-scroll">
              Kontakt
            </a>
            <a className="media" href="#datenschutz">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
