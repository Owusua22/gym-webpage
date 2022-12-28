import React from 'react';
import "../../Styles/Pricing.css"
import { HiCheckCircle} from 'react-icons/hi';

const Pricing = () => {
    return (
        <section id='pricing-plan'>
            <div className="container" data-aos ="fade-left" data-duration="300" data-delay="200" >
                <div className="pricing_top">
                    <h2 className="section_title" style={{color:"black"}}>
                        Gym <span className='highlights'>Pricing</span> Plan
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
                        <br /> elit. Possimus, ad! Voluptatum, autem libero. placeat et 
                       <br/> architecto fugiat officia illum asperiores mollitia nulla.</p>

                </div>
                <div className="pricing_wrapper">
                    <div className="pricing_item">
                        <div className="pricing_card-top">
                            <h2 className="section_title">
                                Regular Member
                            </h2>
                            <h2 className='pricing section_title'>
                                $50 <span>/Month</span>
                            </h2>

                        </div>
                        <div className="services">
                            <ul>
                                <li><span> <  HiCheckCircle/>Unlimited Access to the gym</span></li>
                                <li><span> <  HiCheckCircle/>Customer Support</span></li>
                                <li><span> <  HiCheckCircle/>Personal Trainer</span></li>
                                <li><span> <  HiCheckCircle/> Standard Options</span></li>
                                <li><span><  HiCheckCircle/> 5 classes per week</span></li>
                            </ul>
                            <button className="register_btn" style={{width:"150px", padding:"0.5rem", textAlign:"center" , marginTop:"20px", marginLeft:"-10px"}}>Join Now</button>
                        </div>
                    </div>
                    <div className="pricing_item">
                        <div className="pricing_card-top">
                            <h2 className="section_title">
                                Standard Member
                            </h2>
                            <h2 className='pricing section_title'>
                                $100 <span>/Month</span>
                            </h2>

                        </div>
                        <div className="services">
                            <ul>
                                <li><span> <  HiCheckCircle/>Unlimited Access to the gym</span></li>
                                <li><span> <  HiCheckCircle/>Customer Support</span></li>
                                <li><span> <  HiCheckCircle/>Personal Trainer</span></li>
                                <li><span> <  HiCheckCircle/> Standard Options</span></li>
                                <li><span><  HiCheckCircle/> 7 classes per week</span></li>
                            </ul>
                            <button className="register_btn" style={{width:"150px", padding:"0.5rem", textAlign:"center" , marginTop:"20px", marginLeft:"-20px"}}>Join Now</button>
                        </div>
                    </div>
                    <div className="pricing_item">
                        <div className="pricing_card-top">
                            <h2 className="section_title">
                                Premium Member
                            </h2>
                            <h2 className='pricing section_title'>
                                $150 <span>/Month</span>
                            </h2>

                        </div>
                        <div className="services">
                            <ul>
                                <li><span> <  HiCheckCircle/>Unlimited Access to the gym</span></li>
                                <li><span> <  HiCheckCircle/>Customer Support</span></li>
                                <li><span> <  HiCheckCircle/>Personal Trainer</span></li>
                                <li><span> <  HiCheckCircle/> Standard Options</span></li>
                                <li><span><  HiCheckCircle/> 10 classes per week</span></li>
                            </ul>
                            <button className="register_btn" style={{width:"150px", padding:"0.5rem", textAlign:"center" , marginTop:"20px", marginLeft:"0.1px"}}>Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Pricing;
