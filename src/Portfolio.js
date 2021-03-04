import React from 'react'
import PortfolioItem from "./PortfolioItem";
import {Portfoliolist} from './portfoliolist';
import './Portfolio.css'

function Portfolio() {
    const portfolioComponent= Portfoliolist.map((item)=>{
    return <PortfolioItem key={item.id} PortfolioItem={item}/>
})
    return (
      <div id="portfolio" className="jumbotron">
        <h2>Portfolio</h2>
        <div className="row">{portfolioComponent}</div>
      </div>
    );
}

export default Portfolio
