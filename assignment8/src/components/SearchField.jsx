import React, {useState} from "react";
import axios from "axios";

function SearchField(props) {
    const [search, setSearch] = useState("");

    async function handleSubmit(event){
        event.preventDefault();
        try{
            const fetchGifs = await axios.get("https://api.giphy.com/v1/gifs/search?q=${search}&api_key=3kmLMvOwXZSJ6GWaVz4Fw8j9IrJvmqqi");
            const fetchStickers = await axios.get("https://api.giphy.com/v1/stickers/search?q=${search}&api_key=3kmLMvOwXZSJ6GWaVz4Fw8j9IrJvmqqi");
            let fetchGiphy = [...fetchGifs.data.data,  ...fetchStickers.data.data];
            props.setGiphy(fetchGiphy);
            props.setSearched(true);
        }
        catch(error){
            console.error(error);
        }
    }
    
    function handleSearchChange(event){
        setSearch(event.target.value);
        props.setSearchTerm(event.target.value);
    }

    return (
        <div style={{display:"inline"}}>
            <input className="input" value={search} onChange={handleSearchChange} placeholder="Search..."></input>
            <button className="btn glow" type="submit" onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default SearchField