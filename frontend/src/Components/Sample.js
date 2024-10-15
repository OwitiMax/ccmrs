import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import { Carousel } from "react-responsive-carousel";
// Import local images
import image1 from "../Assets/Images/Images/img_ (1).png";
import image2 from "../Assets/Images/Images/img_ (2).png";
import image3 from "../Assets/Images/Images/img_ (3).jpg";
import image4 from "../Assets/Images/Images/img_ (4).jpg";


const Sample = () => {
  return (
    <div style={{ maxWidth: "98%" ,Height:'300px'}}>
      
      <Carousel autoPlay infiniteLoop interval="5000" transitionTime="5000" >
        <div className='carausel_container'>
          <img src={image4} alt="Slide 1" />
          <div className="legend">
            <h2>Title for Image 1</h2>
            <p>Description or other information about Image 1.</p>
          </div>
        </div>
        <div className='carausel_container'>
          <img src={image2} alt="Slide 2"style={{height:600,width:'100%'}} />
          <div className="legend">
            <h2>Title for Image 2</h2>
            <p>Description or other information about Image 2.</p>
          </div>
        </div>
        <div className='carausel_container'>
          <img src={image3} alt="Slide 3" />
          <div className="legend">
            <h2>Title for Image 3</h2>
            <p>Description or other information about Image 3.</p>
          </div>
        </div>
        <div className='carausel_container'>
          <img src={image1} alt="Slide 3" />
          <div className="legend">
            <h2>Title for Image 3</h2>
            <p>Description or other information about Image 3.</p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Sample
