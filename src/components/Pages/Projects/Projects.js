import React from 'react';
import styles from './Projects.module.css';
import CardInfo from '../../CardInfo/CardInfo';

const ListComponents = [];

const ListProject = [1,2,3,4]
ListProject.forEach((data) => {
    ListComponents.push(<div className="col col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{ paddingTop:'10px'}}>        
            <CardInfo  />
    </div>);
});

const Projects = () => (  
      <div className="container">
          <div className="home-body">
              <div className="row row-cols-1 row-cols-md-3 g-4" style={{ padding: '0px 20px 0px 20px' }}>
                  {ListComponents}
              </div>
          </div>              
    </div >
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
