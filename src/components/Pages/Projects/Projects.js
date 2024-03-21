//import React, { useState, useEffect } from 'react';
import CardInfo from '../../CardInfo/CardInfo';
import jsonConfig from '../../../config/config.json'
import styles from './Projects.module.css'


export function Projects(props) {
    var cardSlider = []

    var listRepos = props.ListRepos.filter(x => jsonConfig.Projects.lts[x.id]?.star !== undefined);

    //create List
    listRepos.forEach((data) => {
        cardSlider.push(<div className="col-12 col-lg-12 col-md-12" style={{ paddingTop: '10px' }}>
            <CardInfo CardInfo={data} />
        </div>);
    });

    return (
        <div className="container" >
            <div className="card" id={styles.Projects}>
                <div className="container" >
                    {cardSlider}
                </div>
                <div class="card-footer text-end">
                    <a href="https://github.com/ThiagoYuri?tab=repositories">
                        <button className='btn btn-primary'>
                            See all
                        </button>
                    </a>
                </div>
            </div >
        </div >
    )
};

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
