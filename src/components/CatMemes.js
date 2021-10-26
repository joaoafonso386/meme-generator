import React from "react";

const CatMemes = ({ memes }) => {
  const mapMemes = memes.map((meme) => {
    return meme.name.toLowerCase().includes("cat") ? (
      <div className="four wide column" key={meme.id}>
        <h3>{meme.name}</h3>
        <img className="ui medium rounded image" src={meme.url} alt="" />
      </div>
    ) : (
      ""
    );
  });

  return (
    <div>
      <h1>Excelent Cat Memes</h1>
      <div className="ui grid">
        <div>{mapMemes}</div>
      </div>
    </div>
  );
};

export default CatMemes;
