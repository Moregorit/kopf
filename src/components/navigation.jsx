import React from 'react';

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0',
        }}
      >
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {' '}
            <span className="sr-only">Toggle navigation</span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
          </button>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a className="navbar-brand-large page-scroll" href="#page-top">
              <img src="/img/logo200px.png" alt="KOPF Logo" width={60} />
            </a>
            <div className="navbar-brand-container page-scroll">
              <a className="navbar-brand-large page-scroll" href="#page-top">
                KOPF
              </a>
              <a className="navbar-brand-small page-scroll" href="#page-top">
                Managementberatung
              </a>
            </div>
          </div>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <div style={{}}>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#features" className="page-scroll">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            height: 'fit-content',
            padding: '10px 24px',
            borderRadius: '35px',
            background: 'rgb(202, 215, 248)',
            marginLeft: 0,
          }}
        >
          <img src="./img/mail.svg" alt="" />
          <div
            style={{
              fontFamily: 'Poppins',
              fontWeight: '600',
              fontSize: '14px',
              color: 'rgb(38, 81, 181)',
              marginLeft: '10px',
              whiteSpace: 'nowrap',
            }}
          >
            Kontakt uns
          </div>
        </div>
      </div>
    </nav>
  );
};
