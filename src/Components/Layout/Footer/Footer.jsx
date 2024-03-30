import React from 'react';
import './Footer.css';

export const Footer = () => {
    let date = new Date();

    return (
        <div className='Footer__container'>
            <h4>By CamiloDEV &copy; {date.getFullYear()}</h4>
        </div>
    )
}
