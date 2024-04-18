import React from "react";
import Card from "./Card";

const CardList = ({ characters }) => (
  <div className="marvel-characters">
    {characters.map((character) => (
      <Card
        key={character.id}
        name={character.name}
        imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      />
    ))}
  </div>
);

export default CardList;
