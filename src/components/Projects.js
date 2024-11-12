import React from "react";
import Footer from "./Footer";
import "../App.css";
import projectone from "../photos/projectone.png";
import projecttwo from "../photos/projecttwo.png";
import projectthree from "../photos/projectthree.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="main-container">
      <div className="container my-5">
        {/* Bootstrap Carousel */}
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src={projectone}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>SRI RAM HOSPITAL APP</h5>
                <Link to="https://github.com/ekta183/Sri-Ram-Hospital" style={{color:"black"}}>
                <p>
                  Github Link
                </p>
                </Link>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={projecttwo}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block" style={{color:"white"}}>
                <h5>FriendFlix:Social Media Website</h5>
                <Link to="https://mern-social-media-frontend-f9et.onrender.com" style={{color:"white"}}>
                <p>
                  Website Link
                </p>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={projectthree}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block" style={{color:"white"}}>
                <h5>NewNews:News App</h5>
                <Link to="https://github.com/ekta183/newsapp" style={{color:"white"}}>
                <p>
                  Github Link
                </p>
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
