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
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((response) => {
      const { memes } = response.data.data;
      const { name, url } = memes[7];
      setImagesArray(memes);
      setImage({
        name: name,
        url: url,
      });
      setPlaceholder(memes[Math.floor(Math.random() * memes.length)].name);
    });
  }, [imgsArray.length]);

  const generateImg = () => {
    const randomMeme = imgsArray[Math.floor(Math.random() * imgsArray.length)];
    const { name, url } = randomMeme;
    setImage({
      name: name,
      url: url,
    });
  };

  return (
    <div className="App">
      <div className="ui dividing header app-title container">
        <h1>Meme Generator App</h1>
      </div>
      <div className="ui img-container raised very padded text container segment">
        <h2 className="ui header">{img.name}</h2>
        <img width="400px" src={img.url} alt="" />
      </div>
      <div className="ui container">
        <SearchMeme placeholder={placeholder} setImage={setImage} />
        <button
          className="ui button-container inverted orange button"
          onClick={generateImg}
        >
          Generate Random Meme
        </button>
        <CatMemes memes={imgsArray} />
      </div>
    </div>
  );
}

export default App;
