import React, {useEffect, useState} from "react";
import axios from "axios";
import SearchField from './components/SearchField';
import GifCard from './components/GifCard';
import FilterField from "./components/FilterField";

function App() {
  const [giphy, setGiphy] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState();

  useEffect(() =>{ 
    async function defaultDisplay(){
      try{
        const fetchGifs = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=3kmLMvOwXZSJ6GWaVz4Fw8j9IrJvmqqi`);
        const fetchStickers = await axios.get(`https://api.giphy.com/v1/stickers/trending?api_key=3kmLMvOwXZSJ6GWaVz4Fw8j9IrJvmqqi`);
        let fetchGiphy = [...fetchGifs.data.data, ...fetchStickers.data.data];
        setGiphy(fetchGiphy);
        setSearched(false);
      }
      catch(error){
        console.error(error);
      }
    }
    defaultDisplay();
  }, []);
  
  return (
    <div className="App">
      <h1 className="header glow">GIFIFY</h1>
      <form>
        <SearchField giphy={giphy} setGiphy={setGiphy} setSearched={setSearched} setSearchTerm={setSearchTerm}/>
        <FilterField giphy={giphy} setGiphy={setGiphy} searched={searched} searchTerm={searchTerm}/>
        <div style={{marginTop:"24px"}}>
          {giphy.map(gif => {
              return(
                <GifCard gifURL={gif.images.fixed_width.url} gifSlug={gif.slug}/>
              )})
          }
        </div>
      </form>
    </div>
  );
}

export default App;