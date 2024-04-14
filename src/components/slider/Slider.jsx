import { useState } from "react";
import "./slider.css"

function Slider() {
    const [current,setCurent]=useState(0)
  const images = [
    "https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1580196666465-doctor.jpg",
    "https://www.praktischarzt.de/wp-content/uploads/2023/03/Becoming-a-medical-doctor-or-physician-in-Germany-1536x960.jpg",
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2023/04/pexels-rodnae-productions-6129507-scaled.jpg"
  ];

  const next=()=>{
    if(current==images.length-1){
        setCurent(0)
    }
    else{
        setCurent(current+1)
    }
  }

  const prev=()=>{
    if(current==0){
        setCurent(images.length-1)
    }
    else{
        setCurent(current-1)
    }
  }
  return (
    <div className="slider-container">
      <div className="slider"  style={{backgroundImage:`url(${images[current]})`}}>
{/* {images.map((image)=><img src={image} style={{transform:`translateX(${current*-100}%)`}} />)} */}


      </div>
      <div className="arrows"> 
      <p onClick={next}>{"<"}</p>
      <p onClick={prev}>{">"}</p>
      </div>
    </div>
  );
}

export default Slider;
