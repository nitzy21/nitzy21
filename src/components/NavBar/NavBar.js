import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import logo from '../../assets/nulogo.png'
import cart from '../../assets/cart.png'
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component{
    
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavBarItems">
                 <Link to='/'>
                <div className="navbar-logo"><img src={logo} alt="Logo" /></div> </Link>
                <div className= "titlesLogo">
                <ul>
                    <li className= "navbar-title">NU INNOVATION TECH HUB</li>
                    <li className= "navbar-titlesub">Center for Innovation & Entrepreneurship</li>
                </ul>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className= {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key = {index}>
                                <a className={item.cName} href = {item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                     <li> <div className="cart-logo"><img src={cart} alt="Cart" /></div> </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;