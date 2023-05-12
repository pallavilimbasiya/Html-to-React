import React from 'react';
import './Myslide.css'

const Myslide = (props) => {
  return (
   <>
      {/* <div className='myslide'>Product slider {props.cardno}</div> */}
      <div className='myslide'><img src={props.icon} alt="iconimage"/></div>
      </>
  )
}

export default Myslide
