import React, { useState, useEffect } from 'react';
import './ImageCluster.css';

export const ImageCluster = (props) => {

  // let numImage = props.images.length;
  // let imageOrder = [];
  // for (let i = 1; i <= numImage; i++) {
  //     imageOrder.push(i);
  // }

  let sampleProps3 = [
      { image: './img/sample-images/gudetama-1.png', priority: 1 },
      { image: './img/sample-images/gudetama-2.jpg', priority: 0 },
      { image: './img/sample-images/gudetama-3.png', priority: 2 },
  ];



  const [imageOrdering, setImageOrdering] = useState(sampleProps3);
  // Figure out how to do ordering of original sampleProps3
  const [imageExitAnimate, setimageExitAnimate] = useState(false);
  const [animationName, setAnimationName] = useState("imageEnterAnimateTopRight");
  const [imageClickedLocation, setImageClickedLocation] = useState(0);

  const changeImageOrdering = (event) => {
    if (imageExitAnimate) {

      setimageExitAnimate(false);

      let newImageOrder = [...imageOrdering];
      if (imageClickedLocation == 0) {
        let saveValue = newImageOrder[0];
        
        newImageOrder[0] = newImageOrder[2];
        newImageOrder[0].priority = 2;

        newImageOrder[2] = newImageOrder[1];
        newImageOrder[2].priority = 1;

        newImageOrder[1] = saveValue;
        newImageOrder[1].priority = 0;

      } else if (imageClickedLocation == 2) {

        let saveValue = newImageOrder[2];
        newImageOrder[2] = newImageOrder[0];
        newImageOrder[2].priority = 2;

        newImageOrder[0] = newImageOrder[1];
        newImageOrder[0].priority = 1;

        newImageOrder[1] = saveValue;
        newImageOrder[1].priority = 0;
      } 

      setImageOrdering(newImageOrder);
    }
  }

  const userClick = (event) => {
    let eventLocation = findItem("./img/" + event.target.src.substring(event.target.src.indexOf("sample-images")))
    setImageClickedLocation(eventLocation)
    if (!event.target.classList.contains("priority-0")) {
      setimageExitAnimate(true);
      if (eventLocation == 0) {
        setAnimationName("imageEnterAnimateBottomLeft");
      } else {
        setAnimationName("imageEnterAnimateTopRight");
      }
    }
  }

  let exitAnimate = "";
  if (imageExitAnimate) {
    if (animationName == "imageEnterAnimateBottomLeft") {
      exitAnimate = "imageExitAnimateTopRight";
    } else { // animationName == "imageEnterAnimateTopRight"
      exitAnimate = "imageExitAnimateBottomLeft";
    }
  }

  let findItem = (imgSRC) => {
    let index = 0;
    let location = -1;
    imageOrdering.forEach((image) => {
      if (image.image === imgSRC) {
        location = index;
      }
      index++;
    });
    return location;
  }

  let orderIndex = 1;
  let imageElements = imageOrdering.map((image) => {
    let imageElement = <img 
                key={image.image} 
                onClick={userClick}
                onAnimationEnd={changeImageOrdering}
                className={animationName + ' image priority-' + image.priority + ' cluster-design-1 order-' + orderIndex + " " + exitAnimate} 
                src={image.image} 
                alt={image.image} />;
    orderIndex++;
    return imageElement;
    
  });

  return (
    <div>
      <div className='img-container'>
          {imageElements}
      </div>
    </div>
  );

};

export default ImageCluster;