import React, { useState, useEffect } from 'react';
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function Random() {
    //stateField 
    const [gif, setGif] = useState("");

    //To Fetch Data
    const fetchGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const { data } = await axios.get(url); // PROMISE
        const imgSrc = data.data.images.downsized_large.url;
        setGif(imgSrc);
    }

    //Component Did Mount >> First Render 
    useEffect(() => {
        fetchGif();
    }, [])

    function handleClick() {
        fetchGif();
    }

    return (

        <div className="container" >
            <h1>Random Gif</h1>
            <img width="500" src={gif} alt="RandomGif" />
            <button onClick={handleClick} >Click For New</button>
        </div>

    )
}

export default Random;
