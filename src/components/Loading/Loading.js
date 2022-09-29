import React from 'react';
import style from './Loading.module.css'
import notFound from '../../resources/loading.gif';
const Loading = () => (
  <div className="collapse show modal fade PopupForms" tabIndex="-1" style={{display:'block'}}>
    <div className={style.loading}>
      <img src={notFound} className={style.imgAlign} alt="Loading"></img>    
    </div>
  </div>
);

Loading.propTypes = {};

Loading.defaultProps = {};

export default Loading;
