import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>Home</li>
//         <li>Pokemon</li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

// -------------[Above is without the link attribute]-------------

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemon">Pokemon</Link>
        </li>
        <li>
          <Link to="/pokemon/new">New Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
