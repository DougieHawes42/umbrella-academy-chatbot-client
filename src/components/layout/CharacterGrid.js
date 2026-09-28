import { useDispatch, useSelector } from "react-redux";

import { setSelectedCharacter } from "../../redux/characterSlice.js";

// style imports
import "./style.scss";

import { characters } from "../../assets/text/characterData.js";

const CharacterGrid = () => {
  const dispatch = useDispatch();

  const selectedCharacter = useSelector(
    (state) => state.character.selectedCharacter,
  );

  return (
    <div className="character-grid">
      <h2 className="character-grid-title">Select Your Character</h2>
      <div className="row">
        {characters.slice(0, 4).map((character) => (
          <div
            key={character.id}
            className={`character ${selectedCharacter === character.id ? "character-selected" : ""}`}
            onClick={() => dispatch(setSelectedCharacter(character.id))}>
            <img src={character.image} alt={character.name} />
            {selectedCharacter === character.id && (
              <p className="character-name">{character.name}</p>
            )}
          </div>
        ))}
      </div>
      <div className="row">
        {characters.slice(4, 8).map((character) => (
          <div
            key={character.id}
            className={`character ${selectedCharacter === character.id ? "character-selected" : ""}`}
            onClick={() => dispatch(setSelectedCharacter(character.id))}>
            <img src={character.image} alt={character.name} />
            {selectedCharacter === character.id && (
              <p className="character-name">{character.name}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterGrid;
