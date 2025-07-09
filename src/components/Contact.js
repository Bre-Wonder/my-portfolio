import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'breannasteward503@gmail.com',
      link: 'mailto:breannasteward503@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (503) 277-8487',
      link: 'tel:+15032778487'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Portland, OR',
      link: null
    },
    {
      icon: 'linkedin',
      title: 'LinkedIn',
      value: 'My Profile Here',
      link: 'https://www.linkedin.com/in/breanna-steward-8b2a462a9'
    }
  ];

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-icon">
                    {info.icon === 'linkedin' ? (
                      <img 
                        src={process.env.PUBLIC_URL + "/images/LI-In-Bug.png"} 
                        alt="LinkedIn" 
                        className="linkedin-icon"
                      />
                    ) : (
                      info.icon
                    )}
                  </div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="contact-link"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="https://github.com/Bre-Wonder" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/github-mark.png"} 
                    alt="GitHub" 
                    className="github-icon"
                  />
                </a>
                <a href="https://www.linkedin.com/in/breanna-steward-8b2a462a9" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/LI-In-Bug.png"} 
                    alt="LinkedIn" 
                    className="linkedin-icon"
                  />
                </a>
                <a href="https://x.com/bresteward61" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/Xlogo.png"} 
                    alt="Twitter/X" 
                    className="x-icon"
                  />
                </a>
                <a href="https://medium.com/@bresteward61" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/Medium-Icon-Black.png"} 
                    alt="Medium" 
                    className="medium-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 