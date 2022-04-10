import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

function Header({ coins }) {
  return (
    <header className="header">
      <div className="logo">
        <h3 to="/">Summon Simulator</h3>
      </div>
      <div className="logo">
        <h4>Coins: {coins}</h4>
      </div>
    </header>
  );
}

export default Header;
