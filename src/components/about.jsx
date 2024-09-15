import React from 'react';

export const About = (props) => {
  const addLineBreaks = props.data
    ? props.data.paragraph.replace(/\n/g, '<span class="spacer"></span>')
    : 'Loading...';
  return (
    <div id="about">
      <div className="container">
        <div className="text-center">
          <h3>Expertise und Schwerpunkte</h3>
        </div>
        <div className="list-style">
          <div className="col-lg-6 col-sm-6 col-xs-12" style={{ padding: 0 }}>
            <ul>
              {props.data
                ? props.data.checkboxes1.map((d, i) => (
                    <li key={`${d}-${i}`} className="why-choose">
                      <img
                        src="img/icons/checkbox.svg"
                        className="checkbox-icon"
                        alt="checkbox"
                      />{' '}
                      <div className="why-choose-text">{d}</div>
                    </li>
                  ))
                : 'loading'}
            </ul>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12" style={{ padding: 0 }}>
            <ul>
              {props.data
                ? props.data.checkboxes2.map((d, i) => (
                    <li key={`${d}-${i}`} className="why-choose">
                      <img
                        src="img/icons/checkbox.svg"
                        className="checkbox-icon"
                        alt="checkbox"
                      />
                      <div className="why-choose-text">{d}</div>
                    </li>
                  ))
                : 'loading'}
            </ul>
          </div>
        </div>{' '}
      </div>
      <div className="container">
        <div class="about-grid-container">
          <div class="text">
            <p dangerouslySetInnerHTML={{ __html: addLineBreaks }}></p>
          </div>
          <div class="about-image">
            <img src="img/about.png" alt="humanSvg" />
          </div>
        </div>{' '}
      </div>
      <div className="steps-section">
        <div id="steps" className="container">
          <div className="text-center">
            <h3>Unser Interaktionsablauf</h3>
          </div>
          <h5>{props.data ? props.data.paragraph2 : 'Loading...'}</h5>
          <div className="steps-grid-container">
            {props.data
              ? props.data.steps.map((d, i) => (
                  <div className="step">
                    <img src={d.image} alt={`step${i + 1}`} />
                    <h4>{d.title}</h4>
                    <p>{d.text}</p>
                  </div>
                ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  );
};
