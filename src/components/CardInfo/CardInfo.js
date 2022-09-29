import React from 'react';
import notFound from '../../resources/notExists.gif';
import styles from './CardInfo.module.css';
import jsonConfig from '../../config/config.json'

function CardInfo (props) {
    //variables
    const cardInfo = props.CardInfo
    return (
        <div className="card" id={styles.cardStyle}>
            <div className="btn btn-primary" id={styles.cardStyle} onClick={()=>{console.log(cardInfo.id)}}>
            <div>
              <div className='card-img-top' >
                <img 
                  src={(jsonConfig.Projects.lts[cardInfo.id.toString()]?.image) !== undefined ?require("../../resources/projects/"+jsonConfig.Projects.lts[cardInfo.id.toString()]?.image+".png"):notFound}
                  id={styles.imageDirectory} 
                  alt="Card projects"/>
              </div>
            </div>
            <div className="card-body" >
              <p className="card-title" id={styles.titleCenter}>{cardInfo.name.substring(0,30)}</p>          
            </div>   
          </div>
        </div>  
    )
};

CardInfo.propTypes = {};

CardInfo.defaultProps = {};

export default CardInfo;
