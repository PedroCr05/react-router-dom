import { useParams } from "react-router-dom";

const PokemonDetails = (props) => {
  console.log(props);

  //   const params = useParams();
  //   console.log("pokemonId:", params);

  // These are two different methods of using params.
  // Destructed is underneath
  // No destructuring will just use a regular variable
  // Either or will work! :D

  //   const { pokemonId } = useParams();
  //   console.log(`pokemonId:`, pokemonId);

  return (
    <>
      <h2>Pokemon Details</h2>
      <dl>
        <dt>Weight:</dt>
        <dd></dd>
        <dt>Height:</dt>
        <dd></dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
