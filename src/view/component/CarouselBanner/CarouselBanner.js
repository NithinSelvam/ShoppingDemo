import React from "react";
import Carousel from "react-elastic-carousel";
import Styles from "./CarouselBanner.less"

export const CarouselBanner = () => {
    return (
  <Carousel>
  <div>
    <p className={Styles.carouselImgStyle} style={{backgroundImage: "url('images/1.jpg')"}}></p>
  </div>
  <div>
    <p className={Styles.carouselImgStyle} style={{backgroundImage: "url('images/2.jpg')"}}></p>  
  </div>
  <div>
    <p className={Styles.carouselImgStyle} style={{backgroundImage: "url('images/3.jpg')"}}></p>  
  </div>
</Carousel>
    )
};

export default CarouselBanner;
