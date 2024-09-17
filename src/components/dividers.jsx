import React from 'react';
import { useVisibility } from '../useVisibility';

export const Interest = () => {
  const { isVisible, domRef } = useVisibility();
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
          <div className="interest">
            <h5
              ref={domRef}
              className={`slide-left ${isVisible ? 'slide-visible' : ''}`}
            >
              Interessiert? Kontakt uns!
            </h5>{' '}
            <a
              href="#contact"
              ref={domRef}
              className={`title-opacity btn btn-custom btn-lg page-scroll slide-right ${
                isVisible ? 'slide-visible' : ''
              }`}
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

export const FinalText = () => {
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
          <div className="interest">
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
