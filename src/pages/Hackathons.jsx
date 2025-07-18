import React from "react";
import "./Hackathons.css";

const hackathonData = [
  {
    title: "Openserv Hackathon 2025",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQF6v3ollQKSqg/feedshare-shrink_1280/B4DZXOaCh2G8Ak-/0/1742924689321?e=1755734400&v=beta&t=eQo-djekJplqylD8jFhj9VpYp7gJqedESRHcvSwkH1M",
    description: "International DeFi Hackathon Winner among 2000+ teams.",
    prize: "₹3.5 Lakh",
    year: "2025",
  },
  {
    title: "InnovateYou Techathon",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFWAxMd6vq96g/feedshare-shrink_1280/feedshare-shrink_1280/0/1733676161035?e=1755734400&v=beta&t=OircN7BvJbKQWORh2zAQ_SlK2LWr-ZiHNp3UUCG2gsA",
    description: "National Winner among 200+ teams.",
    prize: "₹2 Lakh",
    year: "2024",
  },
  {
    title: "PanIIT PIWOT Hackathon",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEx92GAhRB3Dg/feedshare-shrink_800/B4DZSDtOiFHUAk-/0/1737376471687?e=1755734400&v=beta&t=1v1YSeQ91FsD6Bh2ns5GvWPNKIUypKHT-GV8zd5bwbQ",
    description: "Winner among 16,000+ participants.",
    prize: "₹75,000",
    year: "2025",
  },
  {
    title: "KnowCode Hackathon",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFw-72oe-HYYA/feedshare-shrink_1280/feedshare-shrink_1280/0/1733676160328?e=1755734400&v=beta&t=biMT0QmBAPO2n1sSL04o34NGbiwh9pY3Vn-qYGDXa8I",
    description: "Top winner among 150+ teams.",
    prize: "₹15,000",
    year: "2024",
  },
  {
    title: "HackCelestial 1.0",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFjSgxCl4wVNA/feedshare-shrink_800/feedshare-shrink_800/0/1727116034453?e=1755734400&v=beta&t=JPncIXP7g550FE6CzLRqauT3TEmj0LBEefbk4PrDcuo",
    description: "Top winner for innovative prototype.",
    prize: "₹10,000",
    year: "2024",
  },
  {
    title: "World Record Award - AR Physics Textbook",
    image: "https://media.licdn.com/dms/image/v2/D562DAQHebNzVukVXBA/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1733546525457?e=1753462800&v=beta&t=o0kmm1ireBqAmWCURjfkhXRXeg9CP9itcQKYHp6D6iA", 
    description: "Achieved a World Record for leading the development of a 107-page AR Physics Textbook in 7 months.",
    prize: "Certified by World Record India",
    year: "2024",
  },
];

function Hackathons() {
  return (
    <section id="hackathon-section" className="hackathon-section">
      <h2 className="section-title">Hackathons & Achievements</h2>
      <div className="hackathon-grid">
        {hackathonData.map((item, index) => (
          <div className="hackathon-card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="hackathon-img"
              loading="lazy"
            />
            <div className="hackathon-info">
              <h3>{item.title}</h3>
              <p className="description">{item.description}</p>
              <p className="prize">{item.prize}</p>
              <span className="year">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hackathons;


