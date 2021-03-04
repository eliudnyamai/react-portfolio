import React from 'react'
import './Welcome.css'
import TextAnimation from './TextAnimation';
function Welcome() {
    return (
      <div id="about" className="greeting-div">
        <h3>Hey there, i'm Eliud</h3>
        <img
          src="https://avatars.githubusercontent.com/u/47106874?s=460&u=5739dc32abac8b7eaf36585db8f1f2fd29d90e18&v=4"
          alt="profile pic"
        ></img>
        <TextAnimation text="Web developer and designer" />
        <div>
          <h2>
            I help businesses and individuals with web development and design
            tasks.
          </h2>
        </div>
      </div>
    );
}

export default Welcome
