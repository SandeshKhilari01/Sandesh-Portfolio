import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="hero-container">
      <section id="home">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hello, I’m Sandesh!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Welcome to my portfolio!
        </motion.p>
        <br />
        <a href="https://drive.google.com/uc?export=download&id=1-_qexoKxoX8CeJ7puSzBkREmUi5P800J"
         target="_blank"
         rel="noopener noreferrer"
         className="resume-button" > Download Resume
       </a>

      </section>

      <section id="hero-image">
        <motion.img
          src="https://media.licdn.com/dms/image/v2/D4D03AQE1MxGtHM2S4w/profile-displayphoto-shrink_800_800/B4DZcQelEYHMAg-/0/1748328143204?e=1755129600&v=beta&t=67ctW50b0neZ4n9Fd2KoCXL6Hc7tlpog3azRmU3YAXI"
          alt="Sandesh Khilari"
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </section>
      
    </div>
  );
}

export default Hero;
