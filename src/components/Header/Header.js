import React from 'react';
import Search from '../Search/Search';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="headTile">
                <h2>Search your favorite meals here!!!</h2>
            </div>
            <Search></Search>
        </div>
        
        
    );
};

export default Header;