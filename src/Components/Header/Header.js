import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div className='headerLeft'>
                <Link to="/"><img className='header__icon' alt=""src='https://cdn-icons-png.flaticon.com/512/5977/5977585.png'/></Link>
                <Link to="/movies/popular"style={{textDecoration:"none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span className='top'>Top-Rated</span> </Link>
                <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    );
};

export default Header;