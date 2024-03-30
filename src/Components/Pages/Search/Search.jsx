import React from 'react';
import './Search.css';

export const Search = () => {
    return (
        <form className='Form__container'>
            <input type='text' name='search' placeholder='Search Article'/>
            <input type='submit'value='Search'/>
        </form>
    )
}
