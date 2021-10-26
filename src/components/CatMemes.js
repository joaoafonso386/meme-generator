import React from "react";

const CatMemes = ({ memes }) => {
  const mapMemes = memes.map((meme) => {
    return meme.name.toLowerCase().includes("cat") ? (
      <div key={meme.id}>
        <h3>{meme.name}</h3>
        <img width="300px" height="300px" src={meme.url} alt="" />
      </div>
    ) : (
      ""
    );
  });

  return (
    <div>
      <h1>Excelent Cat Memes</h1>
      <div>{mapMemes}</div>
    </div>
  );
};

export default CatMemes;
