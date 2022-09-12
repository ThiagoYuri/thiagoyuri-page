import React from 'react';
import loading from '../../resources/loading.gif';
import styles from './CardInfo.module.css';

const CardInfo = () => (
  <div className="card center" >
      <div className="btn btn-primary ">
      <div>
        <div className='center' style={{ height: '70%', width: '100%' }}>
          <img src={loading} id={styles.imageDirectory} alt="Card projects"/>
        </div>
      </div>
      <div className="card-body" style={{marginBottom:"7%", marginTop:"7%"}}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text" style={{ height: '30px'}} >card description</p>
      </div>   
    </div>
  </div>
);

CardInfo.propTypes = {};

CardInfo.defaultProps = {};

export default CardInfo;
