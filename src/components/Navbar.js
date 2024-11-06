import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4" data-bs-theme="dark">
      <div className="container-fluid mx-auto" style={{ maxWidth: '1200px' }}>
        <Link className="navbar-brand text-3xl font-bold" to="/">EKTA-JANGIR</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-xl">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Links
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/leetcode">LeetCode</Link></li>
                <li><Link className="dropdown-item" to="/coding-ninjas">Coding Ninjas</Link></li>
                <li><Link className="dropdown-item" to="/codeforces">Codeforces</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/github">Github</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-info text-xl" type="submit">Message Me</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
