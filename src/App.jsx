import React, { useState, useEffect } from 'react';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Features } from './components/features';
import { Interest, FinalText } from './components/dividers';
import { About } from './components/about';
import { Testimonials } from './components/testimonials';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';
import './App.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation mailTo={landingPageData.MailTo} />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Interest data={landingPageData.Dividers} />
      <About data={landingPageData.About} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact
        contact={landingPageData.Contact}
        mailTo={landingPageData.MailTo}
      />
      <FinalText data={landingPageData.Dividers} />
      <Footer data={landingPageData.Contact} />
    </div>
  );
};

export default App;
