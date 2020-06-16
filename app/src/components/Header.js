import React from 'react';
import Toggle from './Toggle';

const Header = () => {
    return (
        <div className="app-header">
            <Toggle />
            <h1>Currency Exchange</h1>
        </div>
    )
}

export default Header;