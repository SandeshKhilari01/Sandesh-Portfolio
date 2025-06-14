import React from "react";
import "./Hackathons.css";

const hackathonData = [
  {
    title: "Openserv Hackathon 2025",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQF6v3ollQKSqg/feedshare-shrink_1280/B4DZXOaCh2G8Ak-/0/1742924689321?e=1752710400&v=beta&t=xzyCv2pbtKASJ9GXI181bUtHulWH2MzCioQ_QX8nkKw",
    description: "International DeFi Hackathon Winner among 2000+ teams.",
    prize: "₹3.5 Lakh",
    year: "2025",
  },
  {
    title: "InnovateYou Techathon",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFWAxMd6vq96g/feedshare-shrink_1280/feedshare-shrink_1280/0/1733676161035?e=1752710400&v=beta&t=89O6EQTx0kkR7FkqY4lc30H4MY1_kUTTYGUvodYJtTw",
    description: "National Winner among 200+ teams.",
    prize: "₹2 Lakh",
    year: "2024",
  },
  {
    title: "PanIIT PIWOT Hackathon",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEx92GAhRB3Dg/feedshare-shrink_800/B4DZSDtOiFHUAk-/0/1737376471687?e=1752710400&v=beta&t=bmI72IWWAQcCVFlx4blSSMU6yXnfhQe-SWaghT1n0Hg",
    description: "Winner among 16,000+ participants.",
    prize: "₹75,000",
    year: "2025",
  },
  {
    title: "KnowCode Hackathon",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQH0K69OsRVLCQ/feedshare-shrink_800/feedshare-shrink_800/0/1707025488598?e=1752710400&v=beta&t=j3TXWfE0e68EiRlVAoaefQEdxiJpAXH3iAcK-7INQzg",
    description: "Top winner among 150+ teams.",
    prize: "₹15,000",
    year: "2024",
  },
  {
    title: "HackCelestial 1.0",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFjSgxCl4wVNA/feedshare-shrink_800/feedshare-shrink_800/0/1727116034453?e=1752710400&v=beta&t=lfYd9649KOnZyKorhguqbulSf4Z9QZfoXj0GvtNWwqw",
    description: "Top winner for innovative prototype.",
    prize: "₹10,000",
    year: "2024",
  },
  {
    title: "World Record Award - AR Physics Textbook",
    image: "https://media.licdn.com/dms/image/v2/D562DAQHebNzVukVXBA/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1733546525457?e=1750482000&v=beta&t=xfeO5_d-uaASv1eH7zxgyFFk2wyw0gPlQpUHkLAXAJY", 
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


