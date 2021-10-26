import React from "react";

const CatMemes = ({ memes }) => {
  const mapMemes = memes.map((meme) => {
    return meme.name.toLowerCase().includes("cat") ? (
      <div className="four wide column" key={meme.id}>
        <div className="ui segment">
          <h3>{meme.name}</h3>
          <img className="ui medium rounded image" src={meme.url} alt="" />
        </div>
      </div>
    ) : (
      ""
    );
  });

  return (
    <div>
      <h1>Excelent Cat Memes</h1>
      <div className="ui grid">{mapMemes}</div>
    </div>
  );
};

export default CatMemes;
