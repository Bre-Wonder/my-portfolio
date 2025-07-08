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
      description:'The Meet App is a serverless, progressive web application built in React using test-driven development. The user should be able to open the application whether online or offline to select a city to see a list of events for that location. Each city should allow the user to select event details, filter the number of events they want to view, and see a vizualization of the details of all the events going on in that city.',
      image: '📝',
      screenshot: '/images/Meet.png',
      technologies: ['React', 'D3', 'AWS Lambda', 'gh-pages'],
      category: 'fullstack',
      liveUrl: 'https://bre-wonder.github.io/meet-app/',
      githubUrl: 'https://github.com/Bre-Wonder/meet-app'
    },
    {
      id: 5,
      title: 'React Native Mobile Chat App',
      description: 'The Chat Me Upp Mobile App is designed for user to be able to allow users a chat interface where they can exchanged text and image messages. The user will start on an initial screen where they can choose their username and background color. Once the user clicks the "Start Chatting" button they will be directed to a second screen that allows the messaging of text, location and images. ',
      image: '🎨',
      screenshot: '/images/chat.png',
      technologies: ['REACT NATIVE', 'Expo CLI', 'React Navigation Stack', 'CGifted Chat Libaray', 'Cloud Firestore from Google'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: 'https://github.com/Bre-Wonder/chat-demo/tree/main`'
    },
    {
      id: 6,
      title: 'myFlix Angular App',
      description: 'This is a client-side application built in Angular to display movie and profile information to a signed up user. The user will be able to view a list of movies and update profile information specific to their account connected to a REST API and database.',
      image: '🔧',
      screenshot: '/images/myFlix-Angular.png',
      technologies: ['Angular', 'Typescript', 'Angular Material'],
      category: 'frontend',
      liveUrl: 'https://bre-wonder.github.io/myFlix-Angular-App/welcome',
      githubUrl: 'https://github.com/Bre-Wonder/myFlix-Angular-App'
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