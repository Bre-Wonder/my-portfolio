import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Pokémon App',
      description: 'To create an application that pulled data from an external API of Pokémon data using HTML, CSS, and Javascript. The application is meant to have interactive buttons on the UI to allow the user to reaveal more information about each Pokémon.',
      image: '🛒', // You can replace this with actual screenshot
      screenshot: '/images/Pokedex.png', // Add your screenshot path here
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
      category: 'frontend',
      liveUrl: 'https://bre-wonder.github.io/pokemon-project/',
      githubUrl: 'https://github.com/Bre-Wonder/pokemon-project'
    },
    {
      id: 2,
      title: 'myFlix API',
      description: 'The objective of this projest was to build a server-side component of a web applications meant to user to interact with movies. Each user will be able to review a listing of movies and be able to add them to their favorites list. Movies have different pieces of information that the user can look at such as director, genre, and summary. A user can also create, update, and delete a profile. ',
      image: '',
      screenshot: '/images/import-image.png',
      technologies: ['Express', 'Node.js', 'MongoDB'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: 'https://github.com/Bre-Wonder/movie_api'
    },
    {
      id: 3,
      title: 'myFlix React App',
      description: 'The myFlix-client React application allows users to find a list of movies from a database on the client-side. A user can both update user information and find lists or details about movies in the database. The user information can also be updated to change four fields: username, email, password, and birtdate. Each user has a unique token that allows the user to be recognized and their account set up uniquely. A user can select movies from the homepage to add to their favorite movies list in their profile view. myFlix-Client is set up as a Single Page Application with routing elements to all the user viewpoints. ',
      image: '🌤️',
      screenshot: '/images/myFlix-React.png',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Parcel', 'Heroku', 'Nelify', 'React-Bootstrap'],
      category: 'frontend',
      liveUrl: 'https://bre-flix.com',
      githubUrl: 'https://github.com/Bre-Wonder/myFlix-client'
    },
    {
      id: 4,
      title: 'Meet App',
      description: 'A content management system for blogs with markdown support, user authentication, and admin dashboard.',
      image: '📝',
      screenshot: '/images/Meet.png',
      technologies: ['React', 'Express', 'PostgreSQL'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'React Native Mobile App',
      description: 'A responsive portfolio website showcasing projects and skills with modern design and smooth animations.',
      image: '🎨',
      screenshot: '/images/portfolio-screenshot.png',
      technologies: ['React', 'CSS3', 'JavaScript'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'myFlix Angular App',
      description: 'A RESTful API service for managing user data with authentication, authorization, and database operations.',
      image: '🔧',
      screenshot: '/images/myFlix-Angular.png',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects">
      <div className="container">
        <div className="projects-header">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">
            Here are some of the projects I've worked on. Each project represents 
            a unique challenge and learning experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.screenshot ? (
                  <img 
                    src={project.screenshot} 
                    alt={`${project.title} screenshot`}
                    className="project-screenshot"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="project-icon" style={{ display: project.screenshot ? 'none' : 'flex' }}>
                  {project.image}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a 
                      href={project.liveUrl} 
                      className="project-link live-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Website
                    </a>
                  )}
                  <a 
                    href={project.githubUrl} 
                    className="project-link github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects; 