import React ,{Component} from 'react';
import {MenuItems} from './MenuItems';
import './Header.css';
class Header extends Component{
   state={
     clicked:false
  }
   handleClick=()=>{
       this.setState({clicked:!this.state.clicked})
   }
   render(){
       return (
         <nav className="NavbarItems sticky">
           <h1 className="navbar-logo">Eliud Mitau</h1>
           <div className="menu-icon" onClick={this.handleClick}>
             <i
               className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
             ></i>
           </div>
           <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
             {MenuItems.map((item, index) => {
               return (
                 <li>
                   <a href={item.url} className={item.cName}>
                     {item.title}
                   </a>
                 </li>
               );
             })}
           </ul>
         </nav>
       );
   }
}
export default Header;