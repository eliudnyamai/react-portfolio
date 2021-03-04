import React from 'react'
import './button.css'

function Button(props) {
    return (
      <div className="mx-auto  text-white button  ">
        <a href={props.url} target="_blank" rel="noreferrer" className="">
          {props.text}
        </a>
      </div>
    );
}

export default Button


