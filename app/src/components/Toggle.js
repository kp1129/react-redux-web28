import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const Toggle = () => {

    const [darkMode, setDarkMode] = useDarkMode(false);

    const handleClick = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }
    return (
        <div className="dark-mode__toggle">
        <div onClick={handleClick}
        className={darkMode? 'toggle toggled' : 'toggle'}
        ></div>
      </div>
    )
}

export default Toggle;