import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Bug Crack!</h1>
            </header>

            <section>
                <div className="main-content">
                    <h2>The only bug tracking solution you'll ever need</h2>
                    <p>
                        Bug Crack is a bug tracking solution that helps you
                        manage your projects and teams. It's easy to use and
                        it's free!
                    </p>
                    <a href="#" className="cta-button">
                        Learn More
                    </a>
                </div>
            </section>

            <footer>
                &copy; 2024 Cristian & Valentin | All rights reserved
            </footer>
        </div>
    );
};

export default LandingPage;
