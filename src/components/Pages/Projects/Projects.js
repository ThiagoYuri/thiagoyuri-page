import React, { useState, useEffect } from 'react';
import CardInfo from '../../CardInfo/CardInfo';
import { get } from '../../../script/api'
import jsonConfig from '../../../config/config.json'



export function Projects() {
    var ListComponents = [];
    const ListCategory = [];
    const [listRepos, setRepos] = useState([]);
    const [listComponentsFilter, setlistComponentsFilter] = useState([]);
    useEffect(() => {
        get((jsonConfig.GitHub.Link.AllRepos.replace("{0}", jsonConfig.GitHub.Nickname)), setRepos, (x => x.fork === false));
        get((jsonConfig.GitHub.Link.AllRepos.replace("{0}", jsonConfig.GitHub.Nickname)), setlistComponentsFilter, (x => x.fork === false));
    }, [])

    //filter
    function filterList() {
        setlistComponentsFilter(listRepos)
        if (document.getElementById("searchByName").value !== "")
            setlistComponentsFilter(listRepos.filter(x => x.name.includes(document.getElementById("searchByName").value)))
        if (document.getElementById('selectCategory').selectedIndex !== 0){
            alert(document.getElementById('selectCategory').selectedIndex)
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

    jsonConfig.Projects.category.forEach((data) => {
        ListCategory.push(<option>{data}</option>)
    })

    return (
        <div className="container">
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
        </div >
    )
};

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
