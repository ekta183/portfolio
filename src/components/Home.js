import React from "react";
import "../App.css";
import portfolioImage from "../photos/portfolio.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-container">
      <div className="page-container">
        <div className="container text-center">
          <div className="row">
            <div className="col align-self-end">
              <img
                src={portfolioImage}
                alt="description"
                className="portfolio-image"
              />
            </div>
            <div className="col align-self-center">
              <h1>Hello! I'm Ekta Jangir</h1>
              <p>
                A Computer Science student at IIIT Bhagalpur
                with a passion for coding, web development, and machine
                learning. Explore my portfolio to see my journey in creating
                impactful projects and embracing the latest in tech.
              </p>

              {/* Center the button */}
              <div className="d-flex justify-content-center">
                <Link to="https://drive.google.com/file/d/1o9bkf02Za0Jse6Mmu1rgO5FETAuUA1e3/view?usp=sharing ">
                  <button className="btn custom-btn-resume" type="button">
                    My Resume
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
