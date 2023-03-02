import React, { useEffect, useState } from 'react';
import react from "../assets/img/react2.png";
import js from "../assets/img/js3.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import bootstrap from "../assets/img/bootstrap.png";
import { useRef } from 'react';

const SliderLateral = (children) => {

  const sliderContainerImages = useRef();
  const [imagesLateral, setImagesLateral] = useState([]);


  // ///// crear etiqueta de imagenes para poder manejar su posicion
  const image = (img, position, sizeHeiht, key) => {
    //console.log(img);
    const styles = {
      // height: sizeHeiht,
      // width: sizeHeiht,
      position: "absolute",
      top: `${position}px`,
    }
    return (
      <img src={img} style={styles} key={key} className="images-inlateral" position={key} />
    )
  };
  // ///// separamos y creamos una nueva lista para poder controlar mas comodamente el contenido
  useEffect(() => {
    
      setTimeout(() => {
        let imagesInLateral = []
        for (let i = 0; i < 5; i++) {
          imagesInLateral.push(
            image(children.children[i].props.src, (68*i), 60, i)
          )
        }
  
        let o = 5;
        for (let i = 0; i < 5; i++, o++) {
          imagesInLateral.push(
            image(children.children[i].props.src, (68*o), 60, o)
          )
        }
  
        setImagesLateral([...imagesInLateral]);
  
      }, 1000)
    
  }, [])

  // ///// hacer el cambio de oposiciones cada determinado tiempo

  return (
    <div className="lateral">
      <div ref={sliderContainerImages} className="container-slider-lateral">
        { imagesLateral }
      </div>
    </div>
  );
};

export default SliderLateral;