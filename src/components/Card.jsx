import React from 'react';

export default function Card({max, min, name, img, onClose}) { //ponemos un destructurin y le ponemos las propiedades
  // acá va tu código
  
  return (
  <div>   
<button onClick={onClose}> X </button>  
<span>{name}</span> 
<div>
  <label>Min</label>
  <span>{min}</span>
  </div>
  <div>
    <label>Max</label>
    <span>{max}</span>
</div>
<img src={"http://openweathermap.org/img/wn/02d@2x.png"} alt="icono del clima" /> 
  </div>
  )
};  //es importante respetar el paso a paso antes de comenzar