import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> RunTracker</Link>
        </li>
        <li>
          <Link to="/record"> Record Run</Link>
        </li>
        <li>
          <Link to="/display"> Display Runs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
