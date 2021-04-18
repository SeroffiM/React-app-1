import React from "react";
import './Header.css'
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div className='header__container'>
            <NavLink exact to='/' className='btn btn-primary' activeClassName='active'>News</NavLink>
            <NavLink to='/create_news' className='btn btn-info'>Create news</NavLink>
        </div>
    )
}

export default Header