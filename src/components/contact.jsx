import { useState } from 'react';
import { useVisibility } from '../useVisibility';

export const Contact = ({ contact, mailTo }) => {
  const { isVisible, domRef } = useVisibility();
  const EmailButton = ({ id }) => {
    const handleEmailClick = (event) => {
      event.preventDefault();
      const mailtoUrl = `mailto:${mailTo ? mailTo.email : 'Loading'}?subject=${
        mailTo ? mailTo.subject : ''
      }&body=${mailTo ? mailTo.message : ''}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${
        mailTo ? mailTo.email : 'Loading'
      }&su=${mailTo ? mailTo.subject : ''}&body=${mailTo ? mailTo.email : ''}`;
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
      <div id={id}>
        <h4
          href="unknown"
          id={id}
          onClick={handleEmailClick}
          style={{ color: 'rgb(38, 81, 181)', cursor: 'pointer' }}
        >
          {contact ? contact.email : 'Loading'}
        </h4>
      </div>
    );
  };

  const PhoneNumber = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyPhoneNumber = () => {
      const phoneNumber = contact ? contact.phone : '';
      if (phoneNumber) {
        // clipboard API suppport check
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard
            .writeText(phoneNumber)
            .then(() => {
              showCopiedMessage();
            })
            .catch(() => {
              alert('Etwas ist schief gelaufen');
            });
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = phoneNumber;
          document.body.appendChild(textArea);
          textArea.select();
          try {
            document.execCommand('copy');
            showCopiedMessage();
          } catch (err) {
            alert('Etwas ist schief gelaufen');
          }
          document.body.removeChild(textArea);
        }
      }
    };
    const showCopiedMessage = () => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    };
    return (
      <div>
        <div onClick={handleCopyPhoneNumber} style={{ cursor: 'pointer' }}>
          <h4 style={{ color: 'rgb(38, 81, 181)', cursor: 'pointer' }}>
            {contact ? contact.phone : 'Loading'}
          </h4>
        </div>
        {copied && <div className="copy-message">Nummer kopiert</div>}
      </div>
    );
  };

  return (
    <div id="contact" className="contact-section">
      <div className="container">
        <div className="text-center">
          <h3>Kontakt</h3>
        </div>
        <div className="contact-grid">
          <div
            ref={domRef}
            className={`contact-info ${
              window.innerWidth > 768 ? 'slide-left' : 'slide-right'
            } ${isVisible ? 'slide-visible' : ''}`}
          >
            <div className="contact-element">
              <img src="img/icons/telnummer.svg" alt="" width={24} />
              <PhoneNumber />
            </div>

            <div className="contact-element">
              <img src="img/icons/mail1.svg" alt="" width={24} />
              <EmailButton />
            </div>
          </div>
          <h5
            className={`${
              window.innerWidth > 768 ? 'slide-right' : 'slide-left'
            } ${isVisible ? 'slide-visible' : ''}`}
            style={{ color: '#000' }}
          >
            {contact ? contact.text : 'Loading'}
          </h5>{' '}
        </div>
      </div>
    </div>
  );
};
