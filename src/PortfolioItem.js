import React from 'react'
import "./Portfolio.css";
import Button from "./Button";
import ReactCardFlip from "react-card-flip";

class PortfolioItem extends React.Component {
  constructor() {
      super();
      this.state = {
        isFlipped: false,
      };
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
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
          <div onMouseEnter={this.handleClick} className="front">
            <div className="card-header">{this.props.PortfolioItem.title}</div>
            <div className="card-body">
              <img
                id="card-image"
                src={this.props.PortfolioItem.img_url}
                alt="portfolio"
              ></img>
            </div>
          </div>
          <div onMouseLeave={this.handleClick} className="back">
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
