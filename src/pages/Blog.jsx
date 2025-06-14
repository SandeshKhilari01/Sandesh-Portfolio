import React from 'react';
import './Blog.css';
import { section } from 'framer-motion/client';

const blogPosts = [
  {
    id: 1,
    title: " We Nailed Shark Tank at IIC!",
    date: "October 2023",
    description: "Hey everyone! I'm beyond thrilled to share that my team and I secured 3rd place in the Shark Tank competition organized by IIC!  The energy, the pitching, and the feedback — everything was just electric. This experience gave us huge momentum for our project. Big thanks to everyone who backed us throughout this journey. Stay tuned, we’re just getting started!",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQGKLWCRxnxO_g/feedshare-shrink_800/feedshare-shrink_800/0/1699038032466?e=1752710400&v=beta&t=Elf4j1Pp9WyTRuPX7_2jhx802yGfNpOy7xv0XpodsGI",
    tags: ["Pitching", "Shark Tank", "IIC"],
  },
  {
    id: 2,
    title: " Broadening My Horizon with IEEE",
    date: "October 2023",
    description: "What an inspiring day! I had the chance to dive deep into creative thinking and strategic problem solving, thanks to an amazing session by IEEE.  These kinds of interactions really open up new ways of thinking and expand how I approach challenges. If you ever get a chance to attend something like this — go for it!",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQHF6-WdcKJ0-w/feedshare-shrink_800/feedshare-shrink_800/0/1699040477409?e=1752710400&v=beta&t=eNgR5GcCdYA8ogExrgHS84MzpOUSWJNX46NBChglhJ8",
    tags: ["IEEE", "Creativity", "Problem Solving"],
  },
  {
    id: 3,
    title: " Learning from a CEO: Mentorship with Neville Patel",
    date: "November 2023",
    description: "Huge shoutout to Neville Patel, CEO of Qualitas Global Services, for an absolutely enriching mentorship session.  His insights about leadership, innovation, and industry realities really struck a chord with us engineering students. Also, cheers to Team Avinya — we grow stronger together!",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQFaft2_cVxo5Q/feedshare-shrink_800/feedshare-shrink_800/0/1699285812773?e=1752710400&v=beta&t=EdBNp-ePHXsGoSZkl6htw2uk8TRNko0QvnnhbtNr0EE",
    tags: ["Mentorship", "Leadership", "Avinya"],
  },
  {
    id: 4,
    title: " Arambh Competition: What a Rush!",
    date: "January 2024",
    description: "Still buzzing from our time at the Arambh competition hosted by Sri Balaji University, Pune!  Representing Avinya and pitching our product in front of seasoned judges was a blast. The energy was unmatched, and every moment added to our entrepreneurial fire. Grateful to all the organizers and fellow innovators — we’re coming back stronger!",
    imageUrl: "https://youtu.be/1tfNT_QqbnM", 
    tags: ["Arambh", "Entrepreneurship", "Avinya"],
  },
    {
    id: 5,
    title: " Victory at Innovate You Hackathon!",
    date: "March 2024",
    description: "Proud moment! Team Tech Avinya clinched the win at the Innovate You Foundation Hackathon at AISSMS College!  Big shoutout to my amazing team — Dhruvaraj Nikam, Ganesh Ghadge, Pradeep Misal, and me, Sandesh Khilari. Special thanks to Pratik Mane for his doubt-solving support and Kaushal Pawar for the hardware magic. The grind was real, but the win made it all worth it!",
    imageUrl: "https://youtu.be/NyJVdrpeKMM",
    tags: ["Hackathon", "Team Avinya", "Victory"],
  },
  {
    id: 6,
    title: " We Made a World Record in Physics!",
    date: "April 2024",
    description: "World Record Alert! Team Tech Avinya launched an innovative physics textbook, *Exploring Wonders of Physics with Avinya*, featuring storytelling, real-world applications, and AR integration. Over 100 pages of brilliance backed by an AR app that brings physics to life. It was an honor leading this as Project Manager alongside an incredible team. Huge thanks to Dr. Vilas Deotare, Mr. Kiran Dahibate, and Pratik Mane for their constant guidance.",
    imageUrl: "https://youtu.be/WRKyT_Yeo8s",
    tags: ["World Record", "AR", "Education", "Physics"],
  },
  {
    id: 7,
    title: " Accessibility and DEI with Globant",
    date: "May 2024",
    description: "What an insightful session at Globant on the role of accessibility in tech!  I explored how inclusive software and accessible app development are shaping the future. Big thanks to amazing speakers like Sulekha Dumbre, Namrata Padhiar, and more. Oh — and I also won the tech quiz! 🧠 Always eager to keep learning and apply these lessons in my journey.",
    imageUrl: "https://youtu.be/sFg9kjRWFMc",
    tags: ["Accessibility", "DEI", "Globant", "Tech Quiz"],
  },
    {
    id: 8,
    title: " Gen AI Exchange Hackathon Roadshow – Pune",
    date: "March 2024",
    description: "Had an amazing time learning from industry leaders like Aditi Bhosale Walunj, Dr. Vidhi Bhanushali, and Madhukar Bhatia at the Gen AI Exchange Hackathon Roadshow in Pune! It was all about collaboration, innovation, and exploring how Gen AI is changing the future.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQHwWn4a3V2plg/feedshare-shrink_800/feedshare-shrink_800/0/1724739844887?e=1752710400&v=beta&t=cB6FgGmhFHMwDPgqAmqW8FsHwL00ZEWUv9BtJUfK4i8",
    tags: ["GenAI", "Hackathon", "Networking", "Pune"],
  },
  {
    id: 9,
    title: " HackCelestial PCE Mumbai – Hospital Bed to Victory",
    date: "April 2024",
    description: "Just two days before the hackathon, I was hospitalized due to food poisoning. But with support from my doctors and family, I participated virtually from the hospital while my team handled the onsite work. Despite the odds, we secured the 4th runner-up spot! A true story of grit and teamwork.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQFjSgxCl4wVNA/feedshare-shrink_800/feedshare-shrink_800/0/1727116034453?e=1752710400&v=beta&t=lfYd9649KOnZyKorhguqbulSf4Z9QZfoXj0GvtNWwqw",
    tags: ["Hackathon", "Teamwork", "Resilience", "PCE Mumbai"],
  },
  {
    id: 10,
    title: " From Idea to MVP – My Hackathon Execution Blueprint",
    date: "January 2025",
    description: "Solving real-world problems doesn't have to be complicated! I shared my complete framework—from problem discovery and ideation to building an MVP and iterating with feedback. Execution beats overthinking. Apply, build, learn, repeat!",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQEqhCS-woqxkA/feedshare-shrink_2048_1536/B4DZREouUhG4As-/0/1736318328085?e=1752710400&v=beta&t=383bmHLn-w6tZ0h7BbW9DZLEtkrTNN7NFHBflnvRp9U",
    tags: ["Hackathon", "Execution", "MVP", "Startup Thinking"],
  },
  {
    id: 11,
    title: " 36 Hours – 2 Hackathons – 2 Wins!",
    date: "February 2025",
    description: "One weekend. Two hackathons. No sleep. Our team participated in 'The Better Hack' (12 hours, Top 10 finish) and 'Technovate You Hackathon' (24 hours overnight, Best in Track winner). It was a whirlwind of creativity, adrenaline, and teamwork!",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQHAjpffRu0-3w/feedshare-shrink_1280/B4DZU4gaTvHwAk-/0/1740409777296?e=1752710400&v=beta&t=-XriwQR92pBY80QTZQY6vt19wT0HV3j7ffe-Ghj0c7g",
    tags: ["Hackathon", "Winning Mindset", "Teamwork", "Technovate"],
  },
    {
    id: 12,
    title: " 7th Hackathon Win – AssureFi Secures Dual Awards!",
    date: "April 2025",
    description: "Our project AssureFi achieved an exciting milestone by winning the Community Choice Award and becoming the DeFi Use Case Runner-Up at the OpenservAI Hackathon, securing a total prize of $4000!",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQF6v3ollQKSqg/feedshare-shrink_800/B4DZXOaCh2G8Ag-/0/1742924689321?e=1752710400&v=beta&t=1yk_bzB6-w6kyLxLVlnbGMbD54iDdvBKo5V4PZX5DjY",
    tags: ["Hackathon", "DeFi", "Blockchain", "AssureFi", "OpenServAI", "Tech Avinya", "Risk Analysis"],
  },

  

];

const Blog = () => {
  return (
    <section id = "Blog">
    <div className="blog-container">
      <h2 className="blog-title">My Blog Posts</h2>
      <p className="blog-intro">Welcome to my tech journey – raw, real, and full of learning </p>
      <div className="blog-grid">
  {[...blogPosts]
    .sort((a, b) => new Date(b.date + ' 1') - new Date(a.date + ' 1'))
    .map((post) => (
      <div className="blog-card" key={post.id}>
        {post.imageUrl.includes("youtu") ? (
          <div className="blog-video-wrapper">
            <iframe
              className="blog-video"
              src={post.imageUrl.replace("youtu.be/", "www.youtube.com/embed/")}
              title={post.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img src={post.imageUrl} alt={post.title} className="blog-image" />
        )}

        <h3>{post.title}</h3>
        <p className="blog-date">{post.date}</p>
        <p>{post.description}</p>
        <div className="blog-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    ))}
</div>

    </div>
    </section>
  );
};

export default Blog;
