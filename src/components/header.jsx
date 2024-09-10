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
  // arrow visibility while Y offset
  const [style, setStyle] = useState({ display: 'block' });
  const handleScrollAndSize = () => {
    if (window.scrollY > 100 || window.innerWidth < 992) {
      setStyle({ display: 'none' });
    } else {
      setStyle({ display: 'block' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollAndSize);
    handleScrollAndSize();
    return () => {
      window.removeEventListener('scroll', handleScrollAndSize);
    };
  }, []);

  return (
    <header id="header">
      <div
        className="intro"
        style={{
          backgroundPositionY: `${offsetY * 0.05}px`, // Adjust the parallax effect
        }}
      >
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div style={{}} className="col-md-8 intro-text">
                <h1 className="title-opacity" style={{ display: 'flex' }}>
                  {props.data ? props.data.title1 : 'Loading'}
                </h1>
                <h1
                  className="typewriter"
                  style={{
                    display: 'flex',
                    width: 'fit-content',
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
                <h2 className="title-opacity" style={{ width: '70%' }}>
                  {props.data ? props.data.paragraph : 'Loading'}
                </h2>
                <a
                  href="#features"
                  className="title-opacity btn btn-custom btn-lg page-scroll"
                  style={{ marginTop: '20px' }}
                >
                  Mehr erfahren
                </a>{' '}
              </div>
            </div>
            <div className="aboutus">
              <div className="aboutus-content" id="aboutus">
                <h3>Wer wir sind?</h3>
                <p>{props.data ? props.data.aboutUs : 'Loading'}</p>
              </div>
            </div>
          </div>
          <img
            src="/img/icons/introArrow.svg"
            alt="arrowIcon"
            style={{ ...style, marginTop: '20px' }}
            className={'intro-arrow'}
            onClick={() =>
              window.scrollBy({ top: 500, left: 0, behavior: 'smooth' })
            }
          />{' '}
        </div>
      </div>
    </header>
  );
};
