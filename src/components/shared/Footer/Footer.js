import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div  className="d-flex footer-text container">
                <div className="address">
                    <img src="https://i.ibb.co/FqBcMrw/logo-2.png" alt="" />
                    <p><i className="fab fa-telegram-plane"></i> 123 New Street Melbourne Australia</p>
                    <p><a href="mailto:info@tourx.com"><i className="fas fa-envelope"></i> info@tourx.com</a></p>
                    <p><a href="tel:(0800) 1234 567891"><i className="fas fa-phone-alt"></i> (0800) 1234 567891</a></p>
                    <i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i><i className="fab fa-linkedin"></i><i className="fab fa-youtube"></i>
                </div>
                <div className="live-feed">
                <h2>Twitter Live Feed</h2>
                <p>RT @StartupDailyANZ: .@envato co-founders back</p>
                <h6>03:40 AM - 10 Mon, 2021</h6>
                <p>RT @StartupDailyANZ: .@envato gives its staff a 9-da</p>
                <h6>03:35 AM - 10 Mon, 2021</h6>
                <p>RT @ellykeating: Aussie startup @envato is moving is</p>
                <h6>04:06 AM - 10 Wed, 2021</h6>
                </div>
            </div>
            <div>
                <p className="copy-right">Copyrights © 2021 by <span className="doc-copy">Tour X</span>. All Rights Reserved.  Developed by Sabbir <span>&#128151;</span></p>
            </div>
        </div>
    );
};

export default Footer;