// src/components/Projects/Projects.jsx
import './Projects.css';
import ProjectCard from './ProjectCard';
import Catstore from '../../assets/catstore.jpg';
import Portfolio from '../../assets/portfolio.png';
import Weather from '../../assets/Weatherapp.png';

function Projects() {
  const projectList = [
    {
      title: 'Store Apps',
      description: 'Store apps by me.',
      image: Catstore,
      demo: 'https://www.youtube.com/shorts/3Ct5E5gZpEc',
      code: 'https://github.com/ch4kkapatPR/mini-ecommerce-collaboration',
    },
    {
      title: 'Weather App',
      description: 'Weather  checker.',
      image: Weather,
      demo: 'https://ch4kkapatpr.github.io/Weather-app/index.html',
      code: 'https://github.com/ch4kkapatPR/mini-ecommerce-collaboration',
    },
    {
      title: 'Portfolio Website',
      description: 'My own website.',
      image: Portfolio,
      demo: 'https://media.tenor.com/sbfBfp3FeY8AAAAj/oia-uia.gif',
      code: 'https://github.com/ch4kkapatPR/portfolio-website-react',
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
