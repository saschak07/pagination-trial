import React from 'react'

const navBar = () =>{
 return(
    <div className="w3-bar w3-light-grey">
    <a href="/" className="w3-bar-item w3-button">Home</a>
    <a href="/" className="w3-bar-item w3-button">All Items</a>
    <input type="text" className="w3-bar-item w3-input" placeholder="Search.."/>
    <a href="/" className="w3-bar-item w3-button w3-green">Go</a>
  </div> 
 )
}

export default navBar