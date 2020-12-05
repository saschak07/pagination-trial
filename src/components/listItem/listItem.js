import React from 'react'
import CardContainer from '../cardContainer/cardContainer'
import './listItem.css'

const listItem = (props) => {

    return(<CardContainer>
        <h1 className="title content">{props.name}</h1>
        <div >
        <div className="w3-cell cell-width" >
            <img alt="" src={props.image.image} className="image w3-round content"/>
        </div>
        <div className="w3-cell cell-width" >
        <p>{props.style}</p>
        <p>ibu: {props.ibu}</p>
        <p>{props.ounces} &#8485;</p>
        </div>
        
        </div>
    </CardContainer>)
}

export default listItem