import React,{useState,useEffect} from 'react';
import CardInfo from '../../CardInfo/CardInfo';
import {get} from '../../../script/api'
import jsonConfig from '../../../config/config.json'



export function Projects(){
    
    const ListComponents = [];

    const [listRepos,setRepos] = useState([]);
    useEffect(()=>{
        get((jsonConfig.GitHub.Link.AllRepos.replace("{0}",jsonConfig.GitHub.Nickname)),setRepos,(x=>x.fork === false))        
    },[])   


    listRepos.forEach((data) => {
        ListComponents.push(<div className="col-12 col-lg-3 col-md-6" style={{ paddingTop:'10px'}}>        
                <CardInfo CardInfo={data}/>
        </div>);
    });

    
    return(  
        <div className="container">
            <div className="home-body">
                <div className="row row-cols-1 row-cols-md-3 g-4" style={{ padding: '0px 20px 0px 20px' }}>
                    {ListComponents}
                </div>
            </div>              
        </div >
    )
};

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
