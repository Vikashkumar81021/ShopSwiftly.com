import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectioncard from '../HomeSection/HomeSectioncard';

function HomesectionCarosel() {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };
const items=[1,1,1,1].map((item)=><HomeSectioncard />)

  return (
    <div>
       
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
   responsive={responsive}

     />
    </div>
  )
}

export default HomesectionCarosel
