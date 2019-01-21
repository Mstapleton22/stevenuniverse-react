import React, { Component } from 'react';
import Button from './Button'

const Card = (props) => {

  return (
    <div className="card col-sm-8 mx-2 my-2">
      <img className="card-img-top" src={`${props.image}`} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{`Gem Type: ${props.gem}`}</li>
          <li className="list-group-item">{`Ability and Traits: ${props.ability}`}</li>
          <li className="list-group-item">{`Fusion Forms: ${props.fusionForm}`}</li>
          <li className="list-group-item">{`Character Story: ${props.characterArc}`}</li>
        </ul>
      </div>
      {
        props.tags.map((tag, idx) => {
          return <Button
            key={idx}
            tag={tag}
          />
        })
      }
    </div >
  )
}

export default Card;
