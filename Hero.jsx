import React from 'react';
import { FaRegPlayCircle} from 'react-icons/fa';
import {RiHeartPulseFill} from 'react-icons/ri';
import {GrLocation} from 'react-icons/gr';
import "../../Styles/Hero.css"
import pic from '../../images/d.jpg'


const Hero = () => {
    return (
        <section id='home'>
            <div className='container'>
                <div className='hero_wrapper'>
                    <div className='hero_content'>
                    <h2 className='section_title' style={{color:"black"}} data-aos ="fade-up" data-duration="1500">Exercise is the key to a  
                    <span className='highlights'> healthy</span> lifestyle</h2>
                    <p style={{marginTop:"30px",fontSize:"1.1rem",marginBottom:"50px",lineHeight:"30px"}} data-aos ="fade-up" data-duration="1800" aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Vel iste ratione sed sint dolorum culpa porro! Porro asperiores.</p>
                        <div className='hero_btns'  data-aos ="fade-up" data-duration="1800" aos-delay="200">
                        <button className='register_btn' style={{width:"170px", marginLeft:"20px"}}>Get started</button>
                        <button className='watch_btn' style={{width:'180px'}}>
                            <span>
                                <FaRegPlayCircle />
                            </span>
                            Watch video
                        </button>
                    </div>
                    </div>
                        <div className='hero_img'>
                            <div className="box-01">
                                <div className="box-02">
                                    <div className="box-03">
                                        <div className="box-img">
                                            <img src="https://t3.ftcdn.net/jpg/01/86/03/02/360_F_186030235_MH9ggll6xo8tNMSDo94sk8SE1F9qk7Lw.jpg" style={{width:"180px" ,borderRadius:"50%",marginTop:"70px",marginLeft:"50px"}} alt=''></img>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                  <div className="heart_rate"  data-aos ="fade-right" data-duration="1800">
                    <h5>Heart Rate</h5>
                    <RiHeartPulseFill />
                    <h5>2567 BPM</h5>
                  </div>
                  <div className="gym_location"  data-aos ="fade-down" data-duration="1800">
                     < GrLocation />
                    <p>Find a new 
                        <br/>gym near you</p>
                    </div>
                    <div className="
                    logo_img">
                        <img src={pic} alt="logo"></img>
                  </div>
                </div>
            
    </div>
            
        </section>
    );
}

export default Hero;
