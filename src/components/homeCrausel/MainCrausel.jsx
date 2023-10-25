import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCrauselData } from './MainCrauselData';




const MainCrausel = () => {
    const items= MainCrauselData.map((item)=><img className='images' role='presentation' src={item.image} alt="" /> )
    
return(
 
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite


     />
); 
}
   

export default MainCrausel
