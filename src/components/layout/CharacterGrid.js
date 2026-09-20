import { useState } from "react";

// style imports
import "./style.scss";

import { characters } from "../../assets/text/characterData.js";

const CharacterGrid = () => {
  const [characterSelected, setCharacterSelected] = useState(1);

  return (
    <div className="character-grid">
      <h2 className="character-grid-title">Select Your Character</h2>
      <div className="row">
        {characters.slice(0, 4).map((character) => (
          <div
            key={character.id}
            className={`character ${characterSelected === character.id ? "character-selected" : ""}`}
            onClick={() => setCharacterSelected(character.id)}>
            <img src={character.image} alt={character.name} />
            {characterSelected === character.id && (
              <p className="character-name">{character.name}</p>
            )}
          </div>
        ))}
      </div>
      <div className="row">
        {characters.slice(4, 8).map((character) => (
          <div
            key={character.id}
            className={`character ${characterSelected === character.id ? "character-selected" : ""}`}
            onClick={() => setCharacterSelected(character.id)}>
            <img src={character.image} alt={character.name} />
            {characterSelected === character.id && (
              <p className="character-name">{character.name}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterGrid;
