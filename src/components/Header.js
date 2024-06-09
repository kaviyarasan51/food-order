import { useEffect, useState } from "react";

const Header = () => {
  const [LoginButton, setLoginButton] = useState(["login"]);
  useEffect(() => {}, [LoginButton]);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          width="140px"
          height="100px"
          src={require("../../assets/images/swiggy.png")}
        />
      </div>
      <div className="menu-container">
        <a href="#">
          {" "}
          Offers
          <sup>🆕</sup>
        </a>
        <a href="#">🆘 Help</a>
        <a href="#">👤 Sign ln</a>
        <a href="#">🛒 Cart</a>
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
