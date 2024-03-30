import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
    return (
        <nav className='Nav__container'>
            <ul>
                <l1><NavLink to="/Home">Home</NavLink></l1>
                <l1><NavLink to="/Article">Articles</NavLink></l1>
                <l1><NavLink to="/Create Article">Create Article</NavLink></l1>
                <l1><NavLink to="/Contact">Contact</NavLink></l1>
            </ul>
        </nav>
    )
}
