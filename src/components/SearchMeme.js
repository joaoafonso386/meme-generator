import axios from "axios";
import React, { useEffect, useState } from "react";
import "./SearchMeme.css";

const SearchMeme = ({ setImage, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchImg = async (e) => {
    e.preventDefault();
    const response = await axios.get("https://api.imgflip.com/get_memes");
    const imgsArray = await response.data.data.memes;
    for (let img of imgsArray) {
      if (
        img.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        searchTerm.length >= 3
      ) {
        setImage({
          name: img.name,
          url: img.url,
        });
      }
    }
  };

  return (
    <div>
      <div className="ui container">
        <form className="search-form" onSubmit={searchImg}>
          <label>Search Meme by name</label>
          <div className="ui fluid icon input">
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder={`Search for ${placeholder}`}
            />
            <i className="ui button" onClick={searchImg}>
              Search
            </i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchMeme;
