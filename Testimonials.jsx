import React from 'react';
import pic from '../../images/client 1.png'
import pic1 from '../../images/client 2.png'
import pic2 from '../../images/client 3.png'
import pic3 from '../../images/client 4.png'

import "../../Styles/Testimonials.css"

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <div className="container">
                
                    <h2 className="section_title" style={{color:"black", marginTop:"20px", marginBottom:"20px",textAlign:"center", fontSize:"2.5rem"}}  data-aos ="fade-up" data-duration="1800" aos-delay="100">Testimonials from <span className='highlights'>Clients</span></h2>
                <div className='tesimonial_wrapper'  data-aos ="fade-right" data-duration="2800" aos-delay="100">
                <div className="testimonial_img">
                    <img src = {pic} alt='client 1' style={{borderRadius:"50%", height:"250px", width:"240px", borderColor:"black"}}></img>
                    <h4 style={{textAlign:"center", marginBottom:"10px"}}>Dr.Doreen Arthur</h4>
                    <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur, 
         adipisicing elit. Ratione dolores libero modi 
                      .</p>
                </div>
                <div className="testimonial_img">
                    <img src = {pic1} alt='client 1' style={{borderRadius:"50%", height:"250px", width:"240px", borderColor:"black"}}></img>
                    <h4 style={{textAlign:"center", marginBottom:"10px"}}>Miss Janet Williams</h4>
                    <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur, 
         adipisicing elit. Ratione dolores libero modi 
                      .</p>
                </div>
                <div className="testimonial_img">
                    <img src = {pic2} alt='client 1' style={{borderRadius:"50%", height:"250px", width:"240px", borderColor:"black"}}></img>
                    <h4 style={{textAlign:"center", marginBottom:"10px"}}>Mr.Theo  Andrea</h4>
                    <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur, 
         adipisicing elit. Ratione dolores libero modi 
                      .</p>
                </div>
                <div className="testimonial_img">
                    <img src = {pic3} alt='client 1' style={{borderRadius:"50%", height:"250px", width:"240px", borderColor:"black"}}></img>
                    <h4 style={{textAlign:"center", marginBottom:"10px"}}>Mrs Samantha Duodu</h4>
                    <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur, 
         adipisicing elit. Ratione dolores libero modi 
                      .</p>
                </div>
                
                </div>
            </div>
            
        </section>
    );
}

export default Testimonials;
