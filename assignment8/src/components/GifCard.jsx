import React from "react";

function GifCard(props){
    return (
        <img type="gif" src={props.gifURL} key={props.gifSlug} />
    )
}

export default GifCard