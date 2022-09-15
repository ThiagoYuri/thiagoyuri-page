import React,{useState} from 'react';
import styles from './Home.module.css';



const Home = function ()  {
    const [img,setImg] = useState("");

    function ImageUser(){
        fetch("https://api.github.com/users/ThiagoYuri",{method:"GET"})
        .then(data => {
            return data.json();
        }).then((a)=>{
            setImg(a.avatar_url)
        })
    }
    ImageUser()
    return(
    <div className={styles.Home}>
        <div className='container'>
            <div>
                <img src={img} alt="teste" id={styles.ImgPerfil}></img>                
            </div>
            <div>               
                <img className="center"src="https://github-readme-stats.vercel.app/api?username=ThiagoYuri&show_icons=true&theme=react&include_all_commits=true&count_private=false" alt='Board'></img>
                    
                <div >                
                    <table className="tableCenter">
                        <tr className="center">
                            <td><img  alt="Th-c" height="30px" width="30px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"/></td>
                            <td><img  alt="Th-csharp" height="30px" width="30px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-plain.svg"/></td>
                            <td><img  alt="Th-dot-net" height="30px" width="30px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg"/></td>
                            <td><img  alt="Th-java" height="30px" width="30px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg"/></td> 
                            
                            <td><img  alt="Th-HTML" height="30px" width="30px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/></td>
                            <td><img  alt="Th-CSS" height="30px" width="30px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/></td>
                            
                            <td><img  alt="Th-Js" height="30px" width="30px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/></td>
                            <td><img  alt="Th-java" height="30px" width="30px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"/></td>
                            <td><img  alt="Th-java" height="30px" width="30px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/></td> 
                            <td><img  alt="Th-java" height="30px" width="30px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"/></td> 
                            
                            <td><img  alt="Th-github" height="30px" width="30px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"/></td>
                            <td><img  alt="Th-github" height="30px" width="30px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"/></td>
                            <td><img  alt="Th-github" height="30px" width="30px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"/></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
)};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
