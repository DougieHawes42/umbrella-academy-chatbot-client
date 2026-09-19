import { useState } from "react";

// style imports
import "./style.scss";

// image imports
import AllisonImage from "../../assets/media/allison.png";
import BenImage from "../../assets/media/ben.png";
import DiegoImage from "../../assets/media/diego.png";
import FiveImage from "../../assets/media/five.png";
import KlausImage from "../../assets/media/klaus.png";
import LutherImage from "../../assets/media/luther.png";
import SloaneImage from "../../assets/media/sloane.png";
import ViktorImage from "../../assets/media/viktor.png";

// chracter objects
const characters = [
  { id: 1, image: AllisonImage, name: "Allison" },
  { id: 2, image: BenImage, name: "Ben" },
  { id: 3, image: DiegoImage, name: "Diego" },
  { id: 4, image: FiveImage, name: "Five" },
  { id: 5, image: KlausImage, name: "Klaus" },
  { id: 6, image: LutherImage, name: "Luther" },
  { id: 7, image: SloaneImage, name: "Sloane" },
  { id: 8, image: ViktorImage, name: "Viktor" },
];

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterGrid;
