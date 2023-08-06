import React from "react";
import { ReactDOM } from "react";
import { useEffect } from "react";
import NavBarComponent from "./navBar.jsx";

import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=7e3ed608'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        console.log(data.Search)
    }

    useEffect(() => {
        searchMovies('Oppenheimer')
    }, [])

    return (
        <div className="app">
            <NavBarComponent />
        </div>
    )
}

export default App;