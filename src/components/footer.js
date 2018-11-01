import React from 'react'
import './Footer.css'

const Footer = props => (
  <div className="footer">
    <div className="footInfo">
      <div className="info">
        <div className="footerBrand" />
        <p>
          Rally is an amazing tool, created by a group of amazing people.<br />
          <br />Together with our parent company Broadcom. We build amazing
          software for the largest companies in the world. We help these people
          adapt to change, and grow.
        </p>
        <ul className="links">
          <li>Sales Inquiries</li>
          <li>Join Us</li>
          <li>Press Inquiries</li>
          <li>About Rally</li>
          <li>Privacy & Cookies Policy</li>
          <li>Copyright 2018 Broadcom</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Footer
