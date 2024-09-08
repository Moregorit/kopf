import React, { useEffect, useState } from 'react';

export const Header = (props) => {
  // parallax handling
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header">
      <div
        className="intro"
        style={{
          backgroundPositionY: `${offsetY * 0.05}px`, // parallax
        }}
      >
        <div className="bg"></div>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div style={{}} className="col-md-8 intro-text">
                <h1 style={{ display: 'flex' }}>
                  {props.data ? props.data.title1 : 'Loading'}
                </h1>
                <h1
                  style={{
                    display: 'flex',
                    backgroundImage: 'linear-gradient(45deg, #fff, #6C98E4)',
                    lineHeight: '1.4',
                    marginTop: '-7px',
                    backgroundClip: 'text',
                    color: 'transparent',
                    backgroundSize: '100%',
                  }}
                >
                  {props.data ? props.data.title2 : 'Loading'}
                </h1>{' '}
                <span></span>{' '}
                <h2 style={{ width: 550 }}>
                  {props.data ? props.data.paragraph : 'Loading'}
                </h2>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                  style={{ marginTop: '20px' }}
                >
                  Mehr erfahren
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
