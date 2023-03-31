import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, []);
  return (
    <div>
      {character.name ? (
        <>
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Specie: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin?.name}</p>
          <img src={character.image} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
