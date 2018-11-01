import React from 'react'
import './Card.css'

const Card = props => (
  <div className="Card">
    <h3>{props.title}</h3>
    <a className="cta">{props.cta}</a>
    <img src={props.content} />
  </div>
)

export default Card
