import React, {useState, createContext} from 'react';


export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Sebahattin GÜÇLÜ',
            price: '200',
            id: 2365324258
        },
        {
            name: 'Murat GÜÇLÜ',
            price: '400',
            id: 2325452658
        },
        {
            name: 'Gül GÜÇLÜ',
            price: '500',
            id: 237899658
        },
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}