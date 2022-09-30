import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Projects from './components/Pages/Projects/Projects';

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          {/*Icon navBar*/}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/*NAVBar*/}
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

      <footer style={{marginTop:"15px"}} className='bg-dark text-white pt-5 pb-4'>
          <div className='container text-md-left'>
            <div className='row text-md-left'>             
              <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h4 className='text-uppercase mb-4 font-weight-bold text-center text-warning'>Redes Sociais</h4>
                <ul>
                  <li><a className='text-white' style={{textDecoration:"none"}} href='https://www.instagram.com/thiagoyuri0109/'>Instagram</a></li>
                  <li><a className='text-white' style={{textDecoration:"none"}} href='https://github.com/ThiagoYuri'>Github</a></li>
                  <li><a className='text-white' style={{textDecoration:"none"}} href='https://www.linkedin.com/in/thiago-yuri-1b467b206/'>Linkedin</a></li>
                </ul>
              </div>
              <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h4 className='text-uppercase mb-4 font-weight-bold text-center text-warning'>Contato</h4>
                <p>Numero: </p>
                <p>Email: thiagoyuri0109@gmail.com</p>
              </div>
            </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
