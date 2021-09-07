import {useState, useEffect} from 'react';

export const usePersistedState = (key, value) => {
    const [state, setState] = useState(
        () =>  JSON.parse(localStorage.getItem(key)) || value
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState]
}