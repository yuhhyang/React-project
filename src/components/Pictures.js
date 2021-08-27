import React from "react";

const Pictures = ({ photos }) => {
  return (
    <div className="picture">
      <p>{photos.photographer}</p>
      <div className="imageContainer">
        <img src={photos.src.large} alt="" />
      </div>
      <p>
        Download Image:
        <a target="_blank" href={photos.src.large}>
          Click Here
        </a>
      </p>
    </div>
  );
};

export default Pictures;
