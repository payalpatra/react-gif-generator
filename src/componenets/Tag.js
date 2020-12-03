import React, { useState, useEffect } from 'react';
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function Random() {
    //stateField 
    const [tag, setTag] = useState("cats");
    const [gif, setGif] = useState("");

    //To Fetch Data
    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
        const { data } = await axios.get(url); // PROMISE
        const imgSrc = data.data.images.downsized_large.url;
        setGif(imgSrc);
    }

    //Component Did Mount >> First Render 
    useEffect(() => {
        fetchGif(tag);
    }, [tag])

    function handleClick() {
        fetchGif(tag);
    }

    return (

        <div className="container" >
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="RandomGif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={handleClick} >Click For New</button>
        </div>

    );
}

export default Random;
