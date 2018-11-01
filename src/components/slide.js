import React from 'react'
import './Slide.css'

const Slide = props => (
  <div className="slide">
    <div className="infoLockup">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <btn>{props.cta}</btn>
    </div>
    <img src={props.content} />
  </div>
)

export default Slide
