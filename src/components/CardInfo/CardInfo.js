import React from 'react';
import notFound from '../../resources/notExists.gif';
import styles from './CardInfo.module.css';
import jsonConfig from '../../config/config.json'

function CardInfo(props) {
  //variables
  const cardInfo = props.CardInfo

  function formatTopics(strAfter) {
    const arrayStr = strAfter.split("-")
    const newArray = arrayStr?.map((y) => {
      return (y.charAt(0).toUpperCase() + y.slice(1));
    })
    return newArray;
  }


  return (
    props?.TypeCard === 1 ?
      (
        <div className="card" id={styles.cardStyle}>
          <div className="btn btn-primary" id={styles.cardStyle} onClick={() => { console.log(cardInfo.id) }}>
            <div>
              <div className='card-img-top' >
                <img
                  src={(jsonConfig.Projects.lts[cardInfo.id.toString()]?.image) !== undefined ? require("../../resources/projects/" + jsonConfig.Projects.lts[cardInfo.id.toString()]?.image + ".png") : notFound}
                  id={styles.imageDirectory}
                  alt="Card projects" />
              </div>
            </div>
            <div className="card-body" >
              <p className="card-title" id={styles.titleCenter}>{cardInfo.name.substring(0, 30)}</p>
            </div>
          </div>
        </div>
      )
      :
      (
        <div className="card mb-3" id={styles.card}>

          <div className="card-body">
            <div className='row'>
              <div className='col-12 col-md-3 ' >
                <div style={{ width: "100%", height: "100%" }} className={styles.vcenterItem}>
                  <div >
                    <img
                      src={(jsonConfig.Projects.lts[cardInfo.id.toString()]?.image) !== undefined ? require("../../resources/projects/" + jsonConfig.Projects.lts[cardInfo.id.toString()]?.image + ".png") : notFound}
                      id={styles.imageTypeTwo}
                      alt="Card projects" />
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-8'>
                <h5 className="card-title">{cardInfo.name}</h5>
                <p className="card-text">{jsonConfig.Projects.lts[cardInfo.id.toString()].star.description}</p>
                <div className="text-white">
                  {
                    cardInfo.topics?.map((data) =>
                      <span className='border-secondary bg-secondary' id={styles.topics}>{formatTopics(data)}</span>
                    )
                  }
                </div>
              </div>
            </div>

              <div className='align-bottom'  style={{marginTop:"15px"}} >
                <div class="card-footer text-end">
                  <button className='btn btn-secondary'>More</button>
                </div>
              </div>
            </div>
        </div>
      )

  )
};

CardInfo.propTypes = {};

CardInfo.defaultProps = {};

export default CardInfo;
