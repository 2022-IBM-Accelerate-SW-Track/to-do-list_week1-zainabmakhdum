import React, { Component } from 'react';
import "./About.css";
import myIMG from "../assets/myIMG.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {myIMG}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Zainab Makhdum</div>
            <div className="brief_description">
              I'm a rising junior at Ramapo College of NJ, studying Data Science, Mathematics, and Economics. I'm interested in researching data governance and privacy laws. A fun fact about me is that Amazon Alexa once saved my life!
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
