import React from 'react';


const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="https://github.com/ThiagoYuri/thiagoyuri-page">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/ThiagoYuri/thiagoyuri-page">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/ThiagoYuri/thiagoyuri-page">Experiences</a>
        </li>
      </ul>
    </div>
  </nav>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
