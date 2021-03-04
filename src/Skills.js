import React from 'react'
import './skills.css'
function Skills() {
    return (
      <div id="skills" className=" row shadow jumbotron">
        <div className="front-end col-md-6">
          <div className="h1">
            <i className="icon fa fa-code"></i>
          </div>
          <h3 className="header ">Front end developer</h3>
          <p className="paragraph">
            I love giving designs life in the browser with a minimalist design
          </p>
          <br />
          <h1 className="sub-heading">Languages</h1>
          <p className="paragraph">HTML,CSS,JavaScript</p>
          <br />
          <h1 className="sub-heading">Frameworks and tools</h1>
          <p>
            Bootstrap <br />
            Jquery <br />
            Bootstrap studio <br />
          </p>
        </div>
        <br />
        <div className="back-end col-md-6">
          <div className="h1">
            <i className=" icon fa fa-database"></i>
          </div>
          <h3 className="header">Back end developer</h3>
          <p className="paragraph">
            Clean, mantainable code with an eye for detail, speed and security
          </p>
          <br />
          <h1 className="sub-heading">Languages</h1>
          <p className="paragraph">Core PHP</p>
          <br />
          <h1 className="sub-heading">Databases</h1>
          <p>
            MYSQL
            <br />
          </p>
        </div>
      </div>
    );
}

export default Skills
