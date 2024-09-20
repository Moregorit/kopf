import React from 'react';

export const Navigation = (props) => {
  const EmailButton = ({ className, id }) => {
    const handleEmailClick = (event) => {
      event.preventDefault();
      const mailtoUrl = `mailto:${
        props.data ? props.data.email : 'Loading'
      }?subject=${props.data ? props.data.subject : ''}&body=${
        props.data ? props.data.message : ''
      }`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${
        props.data ? props.data.adress : 'Loading'
      }&su=${props.data ? props.data.subject : ''}&body=${
        props.data ? props.data.email : ''
      }`;
      // open mail app
      window.location.href = mailtoUrl;

      setTimeout(() => {
        // if app not opened, open gmail
        if (window.location.href === mailtoUrl) {
          window.location.href = gmailUrl;
        }
      }, 1000);
    };
    return (
      <div id={id} className={className}>
        <a
          href="unknown"
          id={id}
          className="text-mail-btn"
          onClick={handleEmailClick}
          style={{ color: 'rgb(38, 81, 181)' }}
        >
          <img
            id={id}
            src="./img/icons/mail.svg"
            alt="mailIcon"
            style={{ paddingRight: '12px' }}
          />
          Kontakt uns
        </a>
      </div>
    );
  };

  // link active scroll offset -75px, navbar hide on scroll
  const [activeLink, setActiveLink] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(true); // navbar visibility
  const [scrollY, setScrollY] = React.useState(0); // scroll position
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isMobile) {
        if (currentScrollY > scrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      const sections = [
        document.querySelector('#features'),
        document.querySelector('#about'),
        document.querySelector('#contact'),
      ];
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 30;
        if (
          currentScrollY >= sectionTop &&
          currentScrollY < sectionTop + section.offsetHeight
        ) {
          current = section.getAttribute('id');
        }
      });
      setActiveLink(current);
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY, isMobile]);

  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top ${
        isVisible ? 'nav-visible' : 'nav-hidden'
      }`}
    >
      <div className="container">
        <div className="navbar-header">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
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
            </div>{' '}
            <label
              id="burgerBtn"
              htmlFor="uniqueCheck"
              className="unique-burger-button"
              type="button"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <input
                type="checkbox"
                id="uniqueCheck"
                className="unique-burger-checkbox"
              />
              <span className="unique-burger-line"></span>
              <span className="unique-burger-line"></span>
              <span className="unique-burger-line"></span>
            </label>
          </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <div
            style={{
              marginTop: '-15px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {' '}
            <span className="navbar-cheat"></span>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href="#features"
                  className={activeLink === 'features' ? 'active' : ''}
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeLink === 'about' ? 'active' : ''}
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeLink === 'contact' ? 'active' : ''}
                >
                  Kontakt
                </a>
              </li>
              <li>
                <EmailButton className="mail-btn-toggle" id="mail-btn-toggle" />
              </li>
            </ul>
            <EmailButton className="mail-btn" id="mail-btn" />
          </div>
        </div>
      </div>
    </nav>
  );
};
