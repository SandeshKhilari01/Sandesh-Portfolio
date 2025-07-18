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
          title: "Portfolio Website (You are looking at it!)",
          desc: "Responsive and deployable personal portfolio built with React and normal CSS. Clean structure and pixel-focused layout for professional presentation.",
          link: "https://your-deployment-link.com",
          label: "Live Site"
        }, {
          title: "Veritas",
          desc: "Veritas is an intelligent compliance automation platform that integrates directly into the software development lifecycle (SDLC). It continuously analyzes code, documents, and infrastructure using AI to validate alignment with real regulatory standards like ISO 27001, CERT-In, and PDPB.",
          link: "https://github.com/SandeshKhilari01/Veritas-IBM-TechXChange2025",
          label: "View Project"
        }, {
          title: "AssureFi",
          desc: "AssureFi is a comprehensive risk analysis platform for DeFi tokens, integrating smart contract vulnerability detection, liquidity monitoring, and sentiment analysis to enhance investor confidence and security.",
          link: "https://github.com/SandeshKhilari01/AssureFi_OpenServ_Hackathon_2025",
          label: "View Project"
        }, {
          title: "Eco-Cart",
          desc: "EcoCart – AI-Powered Sustainable Product Recommender. An AI-based engine that helps Walmart customers make eco-friendly shopping choices by recommending low-emission, ethically sourced alternatives in real-time—supporting Project Gigaton goals.",
          link: "https://github.com/SandeshKhilari01/Eco-Wallet-Hackathon-2025",
          label: "View Project"
        }, {
          title: "ReWear",
          desc: "ReWear is a web-based platform that allows users to browse, list, swap, and purchase second-hand clothing. It provides a clean and user-friendly interface to manage clothing items, track swap history, and explore products by category.",
          link: "https://github.com/SandeshKhilari01/Odoo-Hackathon-2025",
          label: "View Project"
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
