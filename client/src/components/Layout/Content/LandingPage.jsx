import React from 'react';
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <header>
        <h1>Crusaders</h1>
        <p>Welcome to our awesome website!</p>
      </header>

      <section>
        <div className="main-content">
          <h2>Offering you... BUG CRACK</h2>
          <p>A brief description of what you offer and why it's amazing.</p>
          <a href="#" className="cta-button">Learn More</a>
        </div>
      </section>

      <footer>
        &copy; 2024 Cristian & Valentin | All rights reserved
      </footer>
    </div>
  );
}

export default LandingPage;
