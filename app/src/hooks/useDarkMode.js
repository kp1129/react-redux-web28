import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';


export const useDarkMode = (setting) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", setting);

   useEffect(() => {
        if (darkMode) {
             document.querySelector('body').classList.add('dark-mode');
             document.querySelector('body').classList.remove('light-mode');
             document.querySelector('.App').classList.add('dark');
             document.querySelector('.App').classList.remove('light');

        } else {
            document.querySelector('body').classList.remove('dark-mode');
            document.querySelector('body').classList.add('light-mode');
            document.querySelector('.App').classList.add('light');
            document.querySelector('.App').classList.remove('dark');

    }}, [darkMode])

    return [darkMode, setDarkMode];
}