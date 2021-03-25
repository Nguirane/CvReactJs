import React from 'react';
import Experience from './Experience';
import Education from './Education';

const About = () =>{
    return(
        <>
        <div className="col-md-8 color">
            <div className="card">
            <div className="card-title">
                <div className="d-flex ml-4 mt-4">
                    <div>
                    <i className="fas fa-user fa-3x"></i>
                </div>
                <div className="ml-4">
                    <h1>About</h1>
                    <div className="card-text">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                </div>
                </div>
                 
            </div>
            
            </div>
            </div>
       <Experience/>
       <Education/>
        </div>
        </>
    )
}

export default About;