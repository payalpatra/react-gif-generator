import { useState, useEffect } from 'react';
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

function useGif(tag) {
    //stateField 
    const [gif, setGif] = useState("");

    //To Fetch Data
    const fetchGif = async (tag) => {
        const { data } = await axios.get(tag ? `${url}&tag = ${tag}` : url); // PROMISE
        const imgSrc = data.data.images.downsized_large.url;
        setGif(imgSrc);
    }

    //Component Did Mount >> First Render 
    useEffect(() => {
        fetchGif(tag);
    }, [tag])

    return { gif, fetchGif };
}

export default useGif;
