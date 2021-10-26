import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SearchInput from "./SearchInput";

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
      const { name, url } = memes[Math.floor(Math.random() * imgsArray.length)];
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
      <button onClick={generateImg}>Generate</button>
      <SearchInput setImage={setImage} />
    </div>
  );
}

export default App;
