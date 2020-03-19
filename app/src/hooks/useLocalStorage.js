import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(()=>{
        let item = window.localStorage.getItem(key);
        return item? JSON.parse(item) : initialValue
    });

    const setStoredValue = mode => {
        setValue(mode);
        window.localStorage.setItem(key, JSON.stringify(mode));
    }

    return [value, setStoredValue];
}