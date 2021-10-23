import React from 'react';
import CardTemp from './CardTemp';
import PropTypes from 'prop-types' ;

export default function Card({max, min, name, img, onClose}) { //ponemos un destructurin y le ponemos las propiedades
  // acá va tu código
  
  return (
  <div>   
<button onClick={onClose}> X </button>  
<span>{name}</span> 
<div>
 <CardTemp label='Min' value={min}/>
 <CardTemp label='Max' value={max}/>
</div>
<img src={"http://openweathermap.org/img/wn/02d@2x.png"} alt="icono del clima" /> 
  </div>
  )

 
}; 
  Card.propTypes = {
   max: PropTypes.number,
   min: PropTypes.number,
   name: PropTypes.string,
   img: PropTypes.string,
   onclose: PropTypes.func,
 }