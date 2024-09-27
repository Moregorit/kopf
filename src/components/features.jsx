import React from 'react';
import { useVisibility } from '../useVisibility';
export const Features = (props) => {
  const { isVisible, domRef } = useVisibility();
  return (
    <div id="features" className="features-section">
      <div className="container">
        <div className="text-center">
          <h3>{props.data ? props.data.title : 'Loading...'}</h3>
        </div>
        <div className="features-cards">
          {props.data
            ? props.data.features.map((d, i) => (
                <div key={`${d.title}-${i}`} className="feature-card">
                  <img
                    style={{ width: '80px' }}
                    src={d.icon}
                    alt="leistungIcon"
                  />
                  <h4>{d.title}</h4>
                  <p
                    ref={i === 0 ? domRef : null}
                    className={`fade-in ${isVisible ? 'fade-in-visible' : ''}`}
                  >
                    {d.text}
                  </p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  );
};
