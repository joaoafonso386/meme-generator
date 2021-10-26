import axios from "axios";
import React, { useState } from "react";

const SearchMeme = ({ setImage }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchImg = async (e) => {
    e.preventDefault();
    const response = await axios.get("https://api.imgflip.com/get_memes");
    const imgsArray = await response.data.data.memes;
    for (let img of imgsArray) {
      if (img.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        setImage({
          name: img.name,
          url: img.url,
        });
      }
    }
  };

  return (
    <div>
      <form onSubmit={searchImg}>
        <label>Search Meme by name</label>
        <div class="ui fluid icon input">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <i class="ui button">Search</i>
        </div>
      </form>
    </div>
  );
};

export default SearchMeme;
