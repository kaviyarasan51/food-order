import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [LoginButton, setLoginButton] = useState(["login"]);
  useEffect(() => {}, [LoginButton]);
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img
            width="140px"
            height="100px"
            src={require("../../assets/images/swiggy.png")}
          />
        </Link>
      </div>
      <div className="menu-container">
        <Link to="/">🏠Home</Link>
        <Link to="/offers">🆕Offers</Link>
        <Link to="/contact">📞Contact</Link>
        <Link to="/help">🆘Help</Link>
      </div>
      <div>
        <button
          className="login-btn"
          onClick={() => {
            setLoginButton(LoginButton === "login" ? "logout" : "login");
          }}
        >
          {LoginButton}
        </button>
      </div>
    </div>
  );
};

export default Header;
