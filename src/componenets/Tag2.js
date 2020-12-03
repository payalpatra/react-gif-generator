import React, { useState } from 'react';
import useGif from "../useGif";

function Tag() {
    const [tag, setTag] = useState("dogs");
    const { gif, fetchGif } = useGif(tag);
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

export default Tag;
