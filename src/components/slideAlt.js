import React from 'react'
import './SlideAlt.css'

const SlideAlt = props => (
  <div className="slideAlt">
    <img src={props.content} />
    <div className="infoLockup">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <btn>{props.cta}</btn>
    </div>
  </div>
)

export default SlideAlt
