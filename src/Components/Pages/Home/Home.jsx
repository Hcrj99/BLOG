import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
    return (
        <div className='Home__container'>
            <div className='Home__welcome'>
                <h2>Welcome to my Blog</h2>
                <p>Developer Blog with MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS)</p>
                <Link to='/Articles' className='Button-articles'>Articles</Link>
            </div>
        </div>
    )
}
