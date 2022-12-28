import React from 'react';
import pic from '../../images/sports.png'
import "../../Styles/Start.css"

const Start = () => {
    return (
        <section id='schedule'>
            <div className="container">
                <div className="start_wrapper">
                    <div className="start_img"  data-aos ="fade-dowm" data-duration="2500">
                        <img src={pic} alt='trainer' style={{width:"100%",height:"400px"}}></img>
                    </div>
                    <div className="start_content"  data-aos ="fade-right" data-duration="2800" aos-delay="100">
                        <h2 className="section_title" style={{color:"black"}}>
                            Ready to make a <span className='highlights'>change ?</span>

                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dolores adipisci 
                            similique praesentium, dicta ipsam dolorem sequi ipsa tempora.
                            Reprehenderit,  quidem! Sequi iste ratione debitis culpa?
                        </p>
                        <button className="register_btn" style={{width:"150px", padding:"0.5rem", textAlign:"center" , marginTop:"20px", marginLeft:"180px"}}>Get Started</button>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Start;
