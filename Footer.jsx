import React from 'react';
import "../../Styles/Footer.css"
import pic from '../../images/d.jpg'
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import {GrLocation} from 'react-icons/gr';


const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <section id='footer'>
        <footer className='footer'>
            <div className="container">
            <div className="footer_wrapper">
                <div className="footer_box">
                <div className='logo_img'>
                        <img src={pic} alt='logo' style={{width:"70px", marginRight:"10px"}}></img>
                        <h2>Body Goals</h2>
                    </div>
                    <h3 style={{textDecoration:"underLine"}}>Contact us on:</h3>
                    <p>
                    <FaPhoneAlt/> or <FaWhatsapp/> 020-333-0555
                    </p>
                    <p>
                       < GrLocation /> <span style={{textAlign:"center"}}>Eno Bulding, Lapaz </span>
                    </p>
                    
                </div>
                <div className="footer_box">
                    <h4 className="footer_title">
                        Company
                    </h4>
                    <ul className="footer_links">
                        <li><a href="#">Our Program</a></li>
                        <li><a href="#">Our Plan</a></li>
                        <li><a href="#">Become a member</a></li>
                        
                    </ul>
                </div>
                <div className="footer_box">
                    <h4 className="footer_title">
                        Quick links
                    </h4>
                    <ul className="footer_links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Support</a></li>
                        
                    </ul>
                </div>
                <div className="footer_box">
                    <h4 className="footer_title">
                    Connect with us
                    </h4>
                    <ul style={{marginLeft:"40px", lineHeight:"2rem", fontSize:"25px"}}>
                        <li> <FaFacebook /></li>
                        <li>< FaInstagram /></li>
                        <li>< FaYoutube /></li>
                        
                    </ul>
                </div>
            </div>
                <p style={{fontSize:"0.8rem", textAlign:"center"}}>Copyright @ {year} developed by Sarah Nkansah. All rights reserved</p>
            </div>
        </footer>
        </section>
    );
}

export default Footer;
