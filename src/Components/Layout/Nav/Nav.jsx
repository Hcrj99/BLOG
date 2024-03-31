import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from '../../Pages/Search/Search';
import './Nav.css';

export const Nav = () => {
    return (
        <nav className='Nav__container'>
            <ul>
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/Articles">Articles</NavLink></li>
                <li><NavLink to="/Create Article">Create</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
            <Search />
        </nav>
    )
}
