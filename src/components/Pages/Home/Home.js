import React from 'react';
import CardInfo from '../../CardInfo/CardInfo';
import styles from './Home.module.css';
const Home = () => (
    <div className={styles.Home}>
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{ padding: '15px 20px 0px 20px' }}>
                <div style={{ height: '25%', width: '25%', marginTop: '2%', marginLeft: '2%' }}>
                    <CardInfo />
                </div>
                <div style={{ height: '25%', width: '25%', marginTop: '2%', marginLeft: '2%' }}>
                    <CardInfo />
                </div>
            </div>

            <br/>
            
            <div style={{align:"center", backgroundColor:"blue"}}> 
            
                <img style={{align:"center", width:"40%"}}  src="https://github-readme-stats.vercel.app/api?username=ThiagoYuri&show_icons=true&theme=react&include_all_commits=true&count_private=false" alt='Board'/> 
                <img style={{align:"center", width:"29%"}}  src="https://github-readme-stats.vercel.app/api/top-langs/?username=ThiagoYuri&layout=compact&langs_count=7&theme=react" alt='Board'/>
        
                <div style={{display:"inline_block"}}>
                    <img  alt="Th-c" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"/>
                    <img  alt="Th-csharp" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-plain.svg"/>  
                    <img  alt="Th-dot-net" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg"/>
                    <img  alt="Th-java" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg"/> 
                    
                    <img  alt="Th-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
                    <img  alt="Th-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
                    
                    <img  alt="Th-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
                    <img  alt="Th-java" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"/>
                    <img  alt="Th-java" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/> 
                    <img  alt="Th-java" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"/> 
                    
                    <img  alt="Th-github" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"/>
                    <img  alt="Th-github" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"/>
                    <img  alt="Th-github" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"/>
            
                </div>
            </div>
        </div>
    </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
