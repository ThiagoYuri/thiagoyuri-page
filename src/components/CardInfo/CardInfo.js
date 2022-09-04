import React from 'react';
import loading from '../../resources/loading.gif';
import styles from './CardInfo.module.css';

const CardInfo = () => (
  <div className="card center" >
    <div id="color-background-img">
      <div className='center' style={{ height: '70%', width: '70%' }}>
        <img src={loading} id={styles.imageDirectory} alt="Card projects"/>
      </div>
    </div>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="card-text" style={{ height: '30px' }}>card description</div>
    </div>   
  </div>
);

CardInfo.propTypes = {};

CardInfo.defaultProps = {};

export default CardInfo;
