import React from 'react';

export const Interest = (props) => {
  return (
    <div className="intro">
      <div
        className="overlay"
        style={{
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
        }}
      >
        <div className="container">
          <div
            className="interest"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 0',
            }}
          >
            <h5>Interessiert? Kontakt uns!</h5>{' '}
            <a
              href="#contact"
              className="title-opacity btn btn-custom btn-lg page-scroll"
              style={{ marginTop: '20px' }}
            >
              Zum Kontakt
            </a>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FinalText = (props) => {
  return (
    <div className="intro">
      <div
        className="overlay"
        style={{
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
        }}
      >
        <div className="container">
          <div
            className="interest"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 0',
              maxWidth: '800px',
            }}
          >
            <h5>
              Unser Leistungsversprechen: Sie werden von dem Mehrwert für sich
              und ihr Unternehmen begeistert sein.
            </h5>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};
