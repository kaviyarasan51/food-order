import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../custom-hooks/useOnlineStatus";

const Header = () => {
  console.log("Header change");
  const [loginButtonName, setLoginButtonName] = useState(["Login"]);
  const [cartButtonName, setCartButtonName] = useState(["Add to cart"]);
  useEffect(() => {
    console.log("use effect in header called");
  }, [loginButtonName]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <img
            width='140px'
            height='100px'
            src={require("../../assets/images/swiggy.png")}
          />
        </Link>
      </div>
      <div className='menu-container'>
        <Link to='/'>🛒 Home</Link>
        <Link to='/about'>🆕 About Us</Link>
        <Link to='/help'>🆘 Help</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/help'>Help</Link>
        <span>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</span>
        <button
          className='login-btn'
          onClick={() => {
            setLoginButtonName(
              loginButtonName === "Login" ? "Logout" : "Login"
            );
          }}>
          {loginButtonName}
        </button>
        <button
          className='add-to-cart-btn'
          onClick={() => {
            setCartButtonName(
              cartButtonName === "Add to cart" ? "Payment" : "Add to cart"
            );
          }}>
          {cartButtonName}
        </button>
      </div>
    </div>
  );
};

export default Header;
