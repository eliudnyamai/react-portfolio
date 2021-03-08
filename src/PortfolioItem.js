import React from 'react'
import "./Portfolio.css";
import Button from "./Button";
import ReactCardFlip from "react-card-flip";

class PortfolioItem extends React.Component {
  constructor() {
      super();
      this.state = {
        isFlipped: false,
        isHovered:""
      };
      this.handleClick = this.handleClick.bind(this);
      this.requestClick=this.requestClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }
  requestClick(){
  this.setState((prevState) => ({ isHovered: !prevState.isHovered }));
  }
  render() {
    return (
      <div className="card-container col-md-4 container">
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
          id="flip"
          className="flip-card"
        >
          <div
            onMouseEnter={this.requestClick}
            onMouseLeave={this.requestClick}
            onFocus={this.requestClick}
            className="front"
          >
            <div className="card-header">{this.props.PortfolioItem.title}</div>
            <div className="card-body">
              {this.state.isHovered ? 
                <span class="request-click badge ">Click to flip</span>
               : 
                ""
              }

              <img
                id="card-image"
                src={this.props.PortfolioItem.img_url}
                alt="portfolio"
              ></img>
            </div>
          </div>
          <div onClick={this.handleClick} className="back">
            <div className="card-header"> {this.props.PortfolioItem.title}</div>
            <div className="card-body">
              {this.props.PortfolioItem.back_text}
              <br />
            </div>
          </div>
        </ReactCardFlip>
        <Button
          text={this.props.PortfolioItem.btn_text}
          url={this.props.PortfolioItem.site_url}
        />
      </div>
    );
  }
}
export default PortfolioItem
