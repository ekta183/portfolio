import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsLinkedin ,
} from "react-icons/bs";
import "../App.css";

export default function FooterCom() {
  return (
    <footer className="footer-container border-top border-1 border-black-500 py-4">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3 mb-4 d-flex align-items-center">
            <Link to="/" className="text-decoration-none">
              <span
                className="px-3 py-2 rounded text-white fw-bold"
                style={{
                  background: "linear-gradient(90deg, black, #20c997)",
                  borderRadius: "20px",
                  fontSize: "1.2rem",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                }}
              >
                EKTA
              </span>
              <span
                className="text-white ms-2 fw-semibold"
                style={{ fontSize: "1.2rem" }}
              >
                JANGIR
              </span>
            </Link>
          </div>

          <div className="col-md-6 d-flex justify-content-around flex-md-row flex-column">
            <div className="mb-3 mb-md-0">
              <Link to="/about" className="text-decoration-none">
                <h5 className="text-uppercase text-white">About me</h5>
              </Link>
            </div>
            <div className="mb-3 mb-md-0">
              <Link to="/projects" className="text-decoration-none">
                <h5 className="text-uppercase text-white">My Work</h5>
              </Link>
            </div>
            <div className="mb-3 mb-md-0">
              <Link to="https://github.com/ekta183" className="text-decoration-none">
                <h5 className="text-uppercase text-white">GitHub</h5>
              </Link>
            </div>
          </div>

          <div className="col-md-3 d-flex justify-content-end align-items-center">
            <a href="https://www.facebook.com/profile.php?id=100086331403095&mibextid=ZbWKwL" className="social-icon me-3">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/ektajangirr/profilecard/?igsh=bDJqbzQ3MWhnb2lu" className="social-icon me-3">
              <BsInstagram />
            </a>
            <a href="https://www.twitter.com" className="social-icon me-3">
              <BsTwitter />
            </a>
            <a href="https://github.com/ekta183" className="social-icon me-3">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/ekta-jangir-715551231" className="social-icon me-3">
              <BsLinkedin />
            </a>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-center text-white">
            <p className="mb-0">© 2024 Ekta Jangir. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
