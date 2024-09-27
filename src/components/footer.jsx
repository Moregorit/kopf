import React from 'react';

export const Footer = (contact) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
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
            <p>{contact.data ? contact.data.address : 'Loading'}</p>
            <p>{contact.data ? contact.data.phone : 'Loading'}</p>
            <p>{contact.data ? contact.data.email : 'Loading'}</p>
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
          </div>
        </div>
        <div
          style={{
            height: '1px',
            borderBottom: '1px solid #737c8b',
            marginTop: '20px',
            marginBottom: '10px',
          }}
        ></div>
        <div
          className="footer-flex"
          style={{
            alignItems: 'center',
            marginBottom: '-65px',
          }}
        >
          <div className="footer-column">
            <a
              style={{ fontSize: '14px' }}
              className=""
              href="#datenschutz"
              onClick={handleOpenModal}
            >
              Datenschutzerklärung
            </a>
          </div>
          <div className="footer-column">
            <p style={{ fontSize: '14px' }}>Website entwicklung</p>
            <p style={{ fontSize: '14px' }}>moregoritt@gmail.com</p>
          </div>
          <p style={{ fontSize: '14px' }}>
            {contact.data ? contact.data.copyright : 'Loading'}
          </p>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <iframe
              src="/Datenschutz.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=120"
              width="100%"
              height="80%"
              title="Datenschutz PDF"
            />
          </div>
        </div>
      )}
    </div>
  );
};
