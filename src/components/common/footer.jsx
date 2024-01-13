import React from 'react'
import { SiNike, SiAdidas, SiPuma, SiInstagram, SiFacebook, SiTwitter } from "react-icons/si";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
        <div className="footer-back">
<div className='container-fluid ' >
            <div className="footer">
            <div className='footer-logo'>
                <h1>Sneakers</h1>
            </div>
            <div className='brands'>
                <i><SiNike /></i>
                <i><SiAdidas /></i>
                <i><SiPuma /></i>
            </div>
            <div className="social">
                <i><SiInstagram /></i>
                <i><SiFacebook /></i>
                <i><SiTwitter /></i>
            </div>
            </div>
            

        </div>
        </div>
        
    </footer>
  )
}

export default Footer