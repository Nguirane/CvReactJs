import React from 'react';
import profile from '../images/profile.jpeg'
import './styles.css'
const ProfileData = ()=>{
    return(
        <>
        <div className="text-center text-white">
                <img src={profile} alt="profile" className="rounded-circle mt-3"/>
                <h1>Alioune Badara Nguirane</h1>
                <p>Developpeur junior</p>
                    <div className="d-flex text-center">
                    <div>
                        <i className="fas fa-phone fa-lg"></i>
                    </div>
                   <div>
                        <p className="ml-4">773040843</p>
                    </div>
                </div>
                <hr/>
        
                <div className="d-flex">
                    <div>
                        <i className="fas fa-envelope fa-lg"></i>
                    </div>
                  <div>
                        <p className="ml-4">badaranguirane120@gmail.com</p>
                    </div>
                  
                </div>
              <hr/>
                <div className="d-flex">
                    <div>
                        <i className="fas fa-map-marker-alt fa-lg"></i>
                    </div>
                    <div>
                         <p className="ml-4">Sacre Coeur 3</p>
                    </div>
                   <hr/> 
                </div>
                 <hr/>
        
                <div className="d-flex">
                     <div>
                        <i className="fas fa-mountain fa-lg"></i>
                    </div>
                    <div className="ml-4">
                        <h2>Technical Skills</h2>
                       <p>HTML, CSS3, React Js</p>
                    </div>
                </div>
               
        </div>
      </>
    )
}

export default ProfileData;