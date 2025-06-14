import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="about-text"
      >
        I’ve always been curious—the kind of kid who took apart toys just to see how they worked. That curiosity evolved into a passion when I entered the world of engineering, where I didn’t just want to study code, but use it to build things that matter. My journey truly took off when I led a team of 19 to create an AR-based physics textbook that broke a world record. Since then, I’ve built projects that address real-world problems, from transforming education to enhancing DeFi security. Each late-night hackathon, team brainstorm, and real-world deployment has taught me more than any textbook ever could. Along the way, I’ve won national and international hackathons, mentored students, and explored everything from full-stack development to AI and cybersecurity. But through it all, one thing has remained constant: my love for learning and building. I’m not just chasing degrees or awards—I’m chasing impact. And I’m just getting started.
      </motion.h3>
    </section>
  );
}

export default About;
