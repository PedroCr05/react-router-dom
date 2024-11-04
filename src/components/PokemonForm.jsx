import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  weight: 0,
  height: 0,
};

const PokemonForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPkmn(formData);
    setFormData(initialState);
    nav(`/pokemon`);
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default PokemonForm;
