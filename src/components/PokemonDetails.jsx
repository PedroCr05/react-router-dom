import { useParams } from "react-router-dom";

const PokemonDetails = (props) => {
  //   const params = useParams();
  //   console.log("pokemonId:", params);

  // These are two different methods of using params.
  // Destructed is underneath
  // No destructuring will just use a regular variable
  // Either or will work! :D

  const { pokemonId } = useParams();
  //   console.log(`pokemonId:`, pokemonId);

  const singularPkmn = props.pokemon.find(
    (poke) => poke._id === Number(pokemonId)
  );

  // Using a console log here to check if our data is coming through is great.
  // console.log("Pokemon Object:", singularPkmn);

  return (
    <>
      <h2>{singularPkmn.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singularPkmn.weight}</dd>
        <dt>Height:</dt>
        <dd>{singularPkmn.height}</dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
