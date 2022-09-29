import React, { useState, useEffect } from 'react';
import CardInfo from '../../CardInfo/CardInfo';
import { get } from '../../../script/api'
import jsonConfig from '../../../config/config.json'
import Loading from '../../Loading/Loading'


export function Projects() {    
     {/*Variables*/}
    var ListComponents = [];
    const ListCategory = [];
    const [listRepos, setRepos] = useState([]);
    const [listComponentsFilter, setlistComponentsFilter] = useState([]);
    const [loadingStatus, setLoading] = useState(false);
     {/*Send request get repos list*/}
    useEffect(() => {  
        get((jsonConfig.GitHub.Link.AllRepos.replace("{0}", jsonConfig.GitHub.Nickname)), setRepos, (x => x.fork === false));
        get((jsonConfig.GitHub.Link.AllRepos.replace("{0}", jsonConfig.GitHub.Nickname)), setlistComponentsFilter, (x => x.fork === false));
        //modified loading to true
        setTimeout(()=>{
            setLoading(true)
        },2000)
    }, [])

    //filter
    function filterList() {
        setlistComponentsFilter(listRepos)
        if (document.getElementById("searchByName").value !== "")
            setlistComponentsFilter(listRepos.filter(x => x.name.includes(document.getElementById("searchByName").value)))
        if (document.getElementById('selectCategory').selectedIndex !== 0){
            //alert(document.getElementById('selectCategory').selectedIndex)
            setlistComponentsFilter(listRepos.filter(x => jsonConfig.Projects.lts[x.id]?.category === (document.getElementById('selectCategory').selectedIndex-1))
            )
        }
    }

    //create List
    listComponentsFilter.forEach((data) => {
        ListComponents.push(<div className="col-12 col-lg-3 col-md-6" style={{ paddingTop: '10px' }}>
            <CardInfo CardInfo={data} />
        </div>);
    });

    //get list category in json
    jsonConfig.Projects.category.forEach((data) => {
        ListCategory.push(<option>{data}</option>)
    })

    return (        
        <div className="container">
            {//create ou destroy loading
                !loadingStatus && <Loading />
            }
            {
                loadingStatus &&
                <div className="home-body">
                <nav className="navbar navbar-expand-lg">
                    <input className="form-control" type="search" placeholder="Search by name" aria-label="Search" id='searchByName' onChange={filterList}></input>
                    <select className="form-select " aria-label="Default select example" id="selectCategory" onChange={filterList}>
                        <option selected>Select Category</option>
                        {ListCategory}
                    </select>
                </nav>
                <div className="row row-cols-1 row-cols-md-3 g-4" style={{ padding: '0px 20px 0px 20px' }}>
                    {ListComponents}
                </div>
             </div>
            }            
        </div >
    )
};

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
