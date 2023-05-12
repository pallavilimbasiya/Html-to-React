import React from 'react';
import './Mycarousel.css';
import Myslide from './Myslide';
import {useEffect} from 'react';
import iconsrc from './banner.jpg';
import iconsrc2 from './banner2.jpg';

const Mycarousel = () => {
    // let box = document.querySelector('.product_container');
    var element;
    // var element = document.querySelector('.product_carousel');
    useEffect(() => {
        // 👇️ use document.querySelector()
        // should only be used when you can't set a ref prop on the element
        // (you don't have access to the element)
      element = document.querySelector('.product_container');
        // console.log(element);
        // return element;
       
      }, []);
    // alert(box.innerHTML);
    // setInterval(
    const btnpressprev = () => {
        let width = element.clientWidth;
        // console.log(element);
        // alert(width);
        element.scrollLeft = element.scrollLeft - width;
    };

    // ,2000);

    const btnpressnext = () => {
        let width = element.clientWidth;
        // alert(width);
        element.scrollLeft = element.scrollLeft + width;
    }
  return (
  <section className="">
    <div className='container'>
        <div className='product_carousel'>
        <button className='pre-btn' onClick={btnpressprev}><p>&lt;</p></button>
        <button className='next-btn' onClick={btnpressnext}><p>&gt;</p></button>
        <div className="product_container">
            {/* <Myslide cardno="1"/>
            <Myslide cardno="2"/>
            <Myslide cardno="3"/>
            <Myslide cardno="4"/>
            <Myslide cardno="5"/>
            <Myslide cardno="6"/>
            <Myslide cardno="7"/>
            <Myslide cardno="8"/>
            <Myslide cardno="9"/>
            <Myslide cardno="10"/> */}
            <Myslide icon={iconsrc}></Myslide>
            <Myslide icon={iconsrc2}></Myslide>
            <Myslide icon={iconsrc}></Myslide>
            <Myslide icon={iconsrc}></Myslide>
            <Myslide icon={iconsrc}></Myslide>
            <Myslide icon={iconsrc}></Myslide>

        </div>
    </div>
    </div>
    </section>
  )
};


export default Mycarousel
