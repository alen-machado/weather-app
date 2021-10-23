import React from 'react';


export default function SearchBar({onSearch}) {
  // acá va tu código
  function handleOnSearch() {
    const input = document.getElementById('search-bar-input')
    onSearch(input.value)
  }
  return (

   <div>
<input id='search-bar-input' />
<button onClick = {handleOnSearch}>Agregar</button>
  </div>
    )
}; 