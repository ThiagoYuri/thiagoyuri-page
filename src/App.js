import './App.css';
import Home from './components/Pages/Home/Home';
import Projects from './components/Pages/Projects/Projects';
import { useState, useEffect } from 'react';
import { get } from './script/api';
import jsonConfig from './config/config.json';


function App() {
  const [listRepos, setRepos] = useState([]);

  //Send request get repos list
  useEffect(() => {  
     get((jsonConfig.GitHub.Link.AllRepos.replace("{0}", jsonConfig.GitHub.Nickname)), setRepos, (x => x.fork === false));      
   }, [])
  return (
    <div>
      <header>
        {/*<nav className="navbar navbar-expand-lg navbar-light bgPrimaryColor">
          {/*Icon navBar
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/*NAVBar     
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <div className="nav-item active">
                <a className="nav-link" href="https://github.com/ThiagoYuri/thiagoyuri-page">Home</a>
              </div>
              <div className="nav-item">
                <a className="nav-link" href="https://github.com/ThiagoYuri/thiagoyuri-page">Projects</a>
              </div>
            </ul>
          </div>
        </nav>*/}
      </header>
      <body>
        <Home />
        <Projects ListRepos={listRepos}/>        
      </body>
      <footer style={{ marginTop: "15px" }} className='bg-dark text-white pt-5 pb-4'>
        <div className='container text-md-left'>
          <div className='row text-md-left'>
            <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
              <h4 className='text-uppercase mb-4 font-weight-bold text-center text-white'>SOCIAL MEDIA</h4>
              <ul>
                <li><a className='text-white' style={{ textDecoration: "none" }} href='https://www.instagram.com/thiagoyuri0109/'>Instagram</a></li>
                <li><a className='text-white' style={{ textDecoration: "none" }} href='https://github.com/ThiagoYuri'>Github</a></li>
                <li><a className='text-white' style={{ textDecoration: "none" }} href='https://www.linkedin.com/in/thiago-yuri-1b467b206/'>Linkedin</a></li>
              </ul>
            </div>
            <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
              <h4 className='text-uppercase mb-4 font-weight-bold text-center text-white'>Contact</h4>
              <p>Numero: +55 (61)98362423</p>
              <p>Email: thiagoyuri0109@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
