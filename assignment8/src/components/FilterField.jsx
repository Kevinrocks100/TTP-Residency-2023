import React from "react";
import axios from "axios";

function FilterField(props) {

    async function handleFilter(e){
        let type = e.target.value;
        let typeContent = [];
        if(props.searched===false){
            const typeGifContent = await axios.get(`https://api.giphy.com/v1/${type}s/trending?api_key=3kmLMvOwXZSJ6GWaVz4Fw8j9IrJvmqqi`);
            typeContent = [...typeGifContent.data.data];
        }
        else{
            const typeStickerContent = await axios.get(`https://api.giphy.com/v1/${type}s/search?q=${props.searchTerm}&api_key=3kmLMvOwXZSJ6GWaVz4Fw8j9IrJvmqqi`);
            typeContent = [...typeStickerContent.data.data];
        }
        props.setGiphy(typeContent);
    }


    return (
        <div style={{verticalAlign:"middle", marginTop:"24px", marginBottom:"0px"}}>
            <input className="radio" type="radio" id="radio1" value="gif" onClick={handleFilter} name="type"></input>
            <label className="type" id="type1" for="radio1" style={{wordWrap:"break-word"}}>GIFs</label>
            <input className="radio" type="radio" id="radio2" value="sticker" onClick={handleFilter} name="type"></input>
            <label className="type" id="type2" for="radio2" style={{wordWrap:"break-word"}}>Stickers</label>
        </div>
    )
}

export default FilterField