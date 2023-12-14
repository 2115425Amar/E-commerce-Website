import React from 'react';
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP4</h4>
            <p>Download App For Android and IOS mobile phone</p>
            <img src={playStore} alt="playstore" />
            <img src={appStore} alt="Appstore" />
        </div>
        <div className="midFooter">
            <h1>ECOMMERCE</h1>
            <p>Copyrights 2023 &copy;AmarGupta</p>
        </div>
        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="#">Instagram</a>
            <a href="#">Whatsapp</a>
            <a href="#">Twitter</a>
        </div>
    </footer>
      
  )
}

export default Footer
