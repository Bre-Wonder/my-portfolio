import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from './Projects.js';
import './Home.css';

const Home = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'SQL', level: 80 }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Breanna</span>
          </h1>
          <p className="hero-subtitle">Full Stack Web Developer</p>
          <p className="hero-description">
            I love connectivity. I've come to realize that all sorts of things guide me there. I discovered an interest in the connectivity of sports, experiencing other cultures and ways of life, and relationships built on belonging to something bigger than myself. During the beginning of the pandemic, I tinkered around with HTML and CSS hoping to develop a new skill. I enjoyed the ability of creating something that was usable. From there, I decided to take a step further and jumped into a new career field of web development. My goal is developing websites that connect users with the things they want to connect with and make websites more understandable by making information more accessible and interactive through visualization. A user that is connected means that they are a step closer to finding what they most need and want. A connection for a user can transform their experience and is where I want to be. 
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-photo">
            <img 
              src="/images/Portfolio_Photo1.jpg" 
              alt="Breanna Steward - Web Developer"
              className="profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="profile-placeholder" style={{ display: 'none' }}>
              <span>👨‍💻</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-card">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                A few hints about me. I love movement especially if it's a sport, a good real-life human story bonus if it involves a meaningful risk, a mission to be inspired by and go all in for, a travel trip to an international country win if it's with friends you love, the opportunity to serve or encourage someone, the kind of kindness that feels like magic, fresh air when it rains but also the sun, a polaroid picture.
                </p>
                <div className="about-stats">
                  <div className="stat">
                    <h3>6+</h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className="stat">
                    <h3>5+</h3>
                    <p>Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-pill-list">
            {Array.from(new Set(projects.flatMap(project => project.technologies))).sort().map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 