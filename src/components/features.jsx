import React from 'react';

export const Features = (props) => {
  return (
    <div id="features" className="features-section">
      <div className="container">
        <div className="text-center">
          <h3>Leistungen</h3>
        </div>
        <div className="features-cards">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="feature-card">
                  <img
                    style={{ width: '80px' }}
                    src={d.icon}
                    alt="leistungIcon"
                  />
                  <h4>{d.title}</h4>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  );
};
