import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from '../Pages/Home/Home';
import Projects from '../Pages/Projects/Projects';

const NavBar = () => (
  <Router>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">     
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link as={Link} to="/Home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link as={Link} to="/Projects" className="nav-link">Projects</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/ThiagoYuri/thiagoyuri-page">Experiences</a>
        </li>
      </ul>     
    </div>
  </nav>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
  </Router>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
