
import './Projects.css';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="project-list">
        {[{
          title: "Exploring Wonders of Physics with Avinya",
          desc: "Built an AR application to teach physics concepts using interactive 3D models. It enhances student learning with a hands-on approach and immersive experiences.",
          link: "https://github.com/your-repo-link",
          label: "View Project"
        }, {
          title: "Portfolio Website (You’re looking at it!)",
          desc: "Responsive and deployable personal portfolio built with React and normal CSS. Clean structure and pixel-focused layout for professional presentation.",
          link: "https://your-deployment-link.com",
          label: "Live Site"
        }].map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noreferrer">{project.label}</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
