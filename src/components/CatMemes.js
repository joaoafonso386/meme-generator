import React from "react";
import "./CatMeme.css";

const CatMemes = ({ memes }) => {
  const mapMemes = memes.map((meme) => {
    return meme.name.toLowerCase().includes("cat") ? (
      <div className="four wide column" key={meme.id}>
        <div className="ui container-img segment">
          <h3>{meme.name}</h3>
          <img className="ui rounded image" src={meme.url} alt="" />
        </div>
      </div>
    ) : (
      ""
    );
  });

  return (
    <div>
      <h1 className="cat-title">Excelent Cat Memes</h1>
      <div className="ui grid">{mapMemes}</div>
    </div>
  );
};

export default CatMemes;
