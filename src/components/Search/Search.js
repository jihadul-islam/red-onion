import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className="banner">
            <h1>Best Food Waiting For Your Belly</h1>
            <form>
                <input className="search-field" type="text" placeholder="Search food items..."></input>
                <input type="submit" value="Search" className="search"/>
            </form>
            
        </div>
    );
};

export default Search;