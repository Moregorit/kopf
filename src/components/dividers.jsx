import React from 'react';
import { useVisibility } from '../useVisibility';

export const Interest = (props) => {
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
              {props.data ? props.data.text1 : 'Loading...'}
            </h5>{' '}
            <a
              href="#contact"
              ref={domRef}
              className={`title-opacity btn btn-custom btn-lg page-scroll slide-right ${
                isVisible ? 'slide-visible' : ''
              }`}
              style={{ marginTop: '20px' }}
            >
              {props.data ? props.data.buttonText : 'Loading...'}
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
          <div className="interest">
            <h5>{props.data ? props.data.text2 : 'Loading...'}</h5>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};
