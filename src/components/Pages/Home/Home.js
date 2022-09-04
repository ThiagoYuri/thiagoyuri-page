import React from 'react';
import CardInfo from '../../CardInfo/CardInfo';
import styles from './Home.module.css';
const Home = () => (
    <div className={styles.Home}>
        <div className='container' >
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{ padding: '15px 20px 0px 20px' }}>
                <div style={{ height: '25%', width: '25%', marginTop: '2%', marginLeft: '2%' }}>
                    <CardInfo />
                </div>
                <div style={{ height: '25%', width: '25%', marginTop: '2%', marginLeft: '2%' }}>
                    <CardInfo />
                </div>
            </div>
        </div>
    </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
