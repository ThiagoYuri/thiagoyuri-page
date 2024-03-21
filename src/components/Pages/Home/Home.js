import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { get } from '../../../script/api'
import jsonConfig from '../../../config/config.json'

function Home() {
    //Variables
    const [user, setUser] = useState("");
    const experiences = [];
    const certificates = [];
    const skils = [];
    const aboutMe = [];

    //function liCapture(data){
    //    <li class={styles.textBody}>{data.name}</li>
    //}

    //Send request get API
    useEffect(() => {
        get((jsonConfig.GitHub.Link.Profile.replace("{0}", jsonConfig.GitHub.Nickname)), setUser)
    }, [])

    //Adding experiences
    jsonConfig.Home.Experiences.forEach((data) => {
        var mainTasks = [];
        data.MainTasks.forEach((mt) => {            
            mainTasks.push(<li>{mt}</li>)
        })
        var result =  <div>
            <li class={styles.textBody}>{data.name}</li>  
            
            <ul>{mainTasks}</ul>
        </div>

        experiences.push(result);
    });

    //Adding experiences
    jsonConfig.Home.Certificates.forEach((data) => {
        certificates.push(
            <li class={styles.textBody}>{data.name}</li>
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
                                    <div className='row' style={{paddingBottom:"10px"}}>
                                            <div className='col-12 col-lg-8 col-md-6'>
                                                <div className="card container h-100">
                                                <div class="card-body">
                                                    <h4>About me</h4>     
                                                    {aboutMe}                           
                                                    <h4>Experiences</h4>         
                                                    <ul>{experiences}</ul>
                                                    <h4>Certificates</h4>         
                                                    <ul>{certificates}</ul>                                                                                
                                                </div>
                                                </div>   
                                            </div>
                                            <div className='col-12 col-lg-4 col-md-6'>
                                                <div className="card container" >
                                                    <div class="card-body">
                                                        <h4  style={{textAlign:"center"}}>Skills</h4> 
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
