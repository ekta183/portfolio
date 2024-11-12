import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark py-4 sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid mx-auto" style={{ maxWidth: "1200px" }}>
        <div className="d-flex align-items-center">
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

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-xl">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="mailto:ekta210183@gmail.com">
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Links
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="https://leetcode.com/u/ekta_2763/">
                    LeetCode
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="https://www.naukri.com/code360/profile/ekta_2763">
                    Coding Ninjas
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="https://codeforces.com/profile/ekta2706">
                    Codeforces
                  </Link>
                </li>
                
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="https://github.com/ekta183">
                    Github
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link to="/messages">
              <button className="btn custom-btn" type="button">
                Message Me
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
