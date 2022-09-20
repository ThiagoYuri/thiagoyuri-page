import React from 'react';
import loading from '../../resources/loading.gif';
import styles from './CardInfo.module.css';

function CardInfo (props) {
    const cardInfo = props.CardInfo

    return (
        <div className="card" id={styles.cardStyle}>
            <div className="btn btn-primary" id={styles.cardStyle}>
            <div>
              <div className='card-img-top' >
                <img src={loading} id={styles.imageDirectory} alt="Card projects"/>
              </div>
            </div>
            <div className="card-body" >
              <h5 className="card-title" id={styles.titleCenter}>{cardInfo.name.substring(0,30)}</h5>          
            </div>   
          </div>
        </div>  
    )
};

CardInfo.propTypes = {};

CardInfo.defaultProps = {};

export default CardInfo;
