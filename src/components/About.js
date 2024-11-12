import React from "react";
import Footer from "./Footer";
import "../App.css";
import profileImage from "../photos/profileImage.jpg"; // Make sure to replace with the actual path

const About = () => {
  return (
    <div className="main-container">
      <div className="container d-flex flex-column align-items-center my-5">
        {/* Card with two sections: image on left, text on right */}
        <div
          className="card mb-3"
          style={{
            width: "100%",
            background: "rgb(94 114 108)",
            color: "#212529",
          }}
        >
          <div className="row g-0">
            {/* Left side image */}
            <div className="col-md-4">
              <img
                src={profileImage}
                alt="Profile"
                className="img-fluid rounded-start"
                style={{
                  width: "100%", // Ensures the image takes up the full width of its container
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Right side text content */}
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">About Me</h1>
                <p className="card-text">
                  Hello! I'm Ekta Jangir, a B.Tech Computer Science student at
                  the Indian Institute of Information Technology Bhagalpur. I’m
                  passionate about software development, web development,
                  full-stack development, and machine learning. Coding has
                  always been my creative outlet, and I love taking on
                  challenges, building projects, and exploring new technologies
                  to continually push my skills further.
                </p>
                <p className="card-text">
                  Beyond developing projects for fun, I’m also committed to
                  staying updated with the rapid changes in technology, from
                  advancements in AI to the latest in web development
                  frameworks. I’m constantly learning and seeking to broaden my
                  skill set, eager to bring fresh ideas and innovative
                  approaches to the tech world. My portfolio reflects my
                  dedication to growth, showcasing projects that are both
                  practical and experimental.
                </p>
                <p className="card-text">
                  With a mindset geared toward problem-solving and creativity, I
                  aim to make meaningful contributions to the tech field,
                  developing solutions that positively impact both users and the
                  tech community. Technology excites me, and I look forward to
                  each new opportunity to learn, innovate, and create.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
