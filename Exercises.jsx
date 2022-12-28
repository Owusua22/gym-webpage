import React from 'react';
import "../../Styles/Exercises.css"
import pic from '../../images/woman2.png'
import pic1 from '../../images/flex.png'
import pic2 from '../../images/bp.png'

const Exercises = () => {
    return (
        <section>
          <div className='container exercise_container'>
            <div className="exercise_top"  data-aos ="fade-up" data-duration="1800">
                <h2 className="section_title" style={{color:"black" ,marginTop:"10px"}}>
                Benefits of <span className='highlights'>Exercise</span>
                </h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    <br />Nostrum inventore fugit non deserunt autem repellat, eius impedit! 
                </p>
            </div>
            <div className="exercise_wrapper">
               
                <div className="exercise_item"  data-aos ="fade-left" data-duration="2800">
                    
                    <span className="exercise_icon">
                        <img src={pic} alt='yoga'></img>
                    </span>
                    <div className="exercise_content">
                        <h4>Healthy Life</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            <br /> At voluptates harum nam. Distinctio minus</p>
                    </div>
                    
                </div>
                <div className="exercise_item"  data-aos ="fade-up" data-duration="1800" >
                    
                    <span className="exercise_icon">
                        <img src={pic1} alt='yoga'></img>
                    </span>
                    <div className="exercise_content">
                        <h4>Increased Flexibility</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            <br /> At voluptates harum nam. Distinctio minus</p>
                    </div>
                    
                </div>
                <div className="exercise_item"  data-aos ="fade-up" data-duration="1800">
                    
                    <span className="exercise_icon">
                        <img src={pic2} alt='yoga'></img>
                    </span>
                    <div className="exercise_content">
                        <h4>Reducing Blood pressure</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            <br /> At voluptates harum nam. Distinctio minus</p>
                    </div>
                    
                </div>
            </div>
          </div>
            
        </section>
    );
}

export default Exercises;

