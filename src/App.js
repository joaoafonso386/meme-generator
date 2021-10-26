import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SearchMeme from "./components/SearchMeme";
import CatMemes from "./components/CatMemes";

function App() {
  const [imgsArray, setImagesArray] = useState([]);
  const [img, setImage] = useState({
    name: "",
    url: "",
  });

  const generateImg = () => {
    const randomMeme = imgsArray[Math.floor(Math.random() * imgsArray.length)];
    const { name, url } = randomMeme;
    setImage({
      name: name,
      url: url,
    });
  };

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((response) => {
      const { memes } = response.data.data;
      const { name, url } = memes[7];
      setImagesArray(memes);
      setImage({
        name: name,
        url: url,
      });
    });
  }, [imgsArray.length]);

  return (
    <div className="App">
      <div>
        <h1>{img.name}</h1>
        <img width="400px" src={img.url} alt="" />
      </div>
      <SearchMeme setImage={setImage} />
      <button onClick={generateImg}>Generate Random Meme</button>
      <CatMemes memes={imgsArray} />
    </div>
  );
}

export default App;
