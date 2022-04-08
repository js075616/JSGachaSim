import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Reset Summon Simulator</Link>
      </div>
      <ul>
        <>
          <li>
            <p>Stones: 1000</p>
          </li>
        </>
      </ul>
    </header>
  );
}

export default Header;
