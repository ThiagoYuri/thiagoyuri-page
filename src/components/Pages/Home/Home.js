import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { get } from '../../../script/api'
import jsonConfig from '../../../config/config.json'

function Home() {
    //Variables
    const [user, setUser] = useState("");
    const experiences = [];
    const skils = [];
    const aboutMe = [];
    //Send request get API
    useEffect(() => {
        get((jsonConfig.GitHub.Link.Profile.replace("{0}", jsonConfig.GitHub.Nickname)), setUser)
    }, [])

    //Adding experiences
    jsonConfig.Home.Experiences.forEach((data) => {
        experiences.push(
            <li class={styles.textBody}>{data}</li>
        );
    });

    //Adding skills
    jsonConfig.Home.MySkills.forEach((data) => {
        skils.push(
            <li class={styles.textBody}>{data}</li>
        );
    });

    //Adding aboutme
    jsonConfig.Home.AboutMe.forEach((data) => {
        aboutMe.push(
            <p class={styles.textBody}>{data}</p>    
        );
    });

    return (
        <div className={styles.Home}>
            <div className='container'>
                <div>
                        <div className="card" style={{width:"100%",marginTop:"5px"}}>
                                <img src={user.avatar_url} alt="teste" className="center" style={{marginTop:"10px"}}  id={styles.ImgPerfil}/>
                                <div className="card-body center">
                                    <p className={styles.TextTitle} >{jsonConfig.Home.Name}</p>                                    
                                </div>
                                <div className='container'>
                                    <div className='row '>
                                            <div className='col-12 col-lg-8 col-md-6'>
                                                <div className="card" >
                                                <div class="card-body">
                                                    <p className={styles.TextTitle}>Sobre min</p>     
                                                    {aboutMe}                           
                                                    <p className={styles.TextTitle}>Experiências</p>         
                                                    <ul>{experiences}</ul>                                                                        
                                                </div>
                                                </div>   
                                            </div>
                                            <div className='col-12 col-lg-4 col-md-6'>
                                                <div className="card" >
                                                    <div class="card-body">
                                                        <p className={styles.TextTitle} style={{textAlign:"center"}}>Conhecimentos</p> 
                                                        <ul className='text'>{skils}</ul>                               
                                                    </div>
                                                </div>

                                            </div>         
                                    </div>    
                                </div>                                            
                        </div>    
                </div>                
            </div>
        </div>
    )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
