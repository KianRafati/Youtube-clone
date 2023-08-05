import React from "react";
import { ReactDOM } from "react";
import { useEffect } from "react";
import MenuButtonComponent from './MenuButtonComponent.jsx';

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
            <nav className="navBar">
                <img src="./favicon.ico" />
                <MenuButtonComponent />
                <input typeof="text" id="searchBar">

                </input>
            </nav>
        </div>
    )
}

export default App;