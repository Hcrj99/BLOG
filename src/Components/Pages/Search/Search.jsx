import React, { useState } from 'react';
import './Search.css';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
    const navegate = useNavigate();

    const doSearch = (e) => {
        e.preventDefault();
        let mySearch = e.target.search.value;
        navegate("/Search/" + mySearch, { replace : true });
    };   

    return (
        <form className='Form__container' onSubmit={doSearch}>
            <input type='text' name='search' placeholder='Search Article' />
            <input type='submit' value='Search' />
        </form>
    )
}
