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
    <div className='header flex justify-between bg-orange-300 px-2 py-2'>
      <div className='logo-container'>
        <Link to='/'>
          <img
            width='140px'
            height='100px'
            src={require("../../assets/images/swiggy.png")}
          />
        </Link>
      </div>
      <div className='menu-container flex items-center'>
        <Link to='/'>
          <a className='px-3 font-semibold' href='#'>
            🛒 Home
          </a>
        </Link>
        <Link to='/about'>
          <a className='px-3 font-semibold' href='#'>
            🆕 About Us
          </a>
        </Link>
        <Link to='/help'>
          <a className='px-3 font-semibold' href='#'>
            🆘 Help
          </a>
        </Link>
        <Link to='/contact'>
          <a className='px-3 font-semibold' href='#'>
            Contact Us
          </a>
        </Link>
        <Link to='/help'>
          <a className='px-3 font-semibold' href='#'>
            Help
          </a>
        </Link>
        <Link to='/grocery'>
          <a className='px-3 font-semibold' href='#'>
            Groceries
          </a>
        </Link>
        <span className='px-3 font-semibold'>
          {onlineStatus ? "🟢 Online" : "🔴 Offline"}
        </span>
        <button
          className='login-btn px-3 font-semibold'
          onClick={() => {
            setLoginButtonName(
              loginButtonName === "Login" ? "Logout" : "Login"
            );
          }}>
          {loginButtonName}
        </button>
        <button
          className='add-to-cart-btn px-3 font-semibold'
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
