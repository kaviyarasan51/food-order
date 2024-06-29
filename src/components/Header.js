import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../custom-hooks/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Header = () => {
  console.log("Header change");
  const [loginButtonName, setLoginButtonName] = useState(["Login"]);
  const [cartButtonName, setCartButtonName] = useState(["Add to cart"]);
  useEffect(() => {
    console.log("use effect in header called");
  }, [loginButtonName]);

  const userDetails = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const updateName = () => {
    userDetails.setUserName("DVG");
  };

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
      <ul className='menu-container flex items-center'>
        <Link to='/'>
          <li className='px-3 font-semibold' href='#'>
            🛒 Home
          </li>
        </Link>
        <Link to='/about'>
          <li className='px-3 font-semibold' href='#'>
            🆕 About Us
          </li>
        </Link>
        <Link to='/help'>
          <li className='px-3 font-semibold' href='#'>
            🆘 Help
          </li>
        </Link>
        <Link to='/contact'>
          <li className='px-3 font-semibold' href='#'>
            Contact Us
          </li>
        </Link>
        <Link to='/help'>
          <li className='px-3 font-semibold' href='#'>
            Help
          </li>
        </Link>
        <Link to='/grocery'>
          <li className='px-3 font-semibold' href='#'>
            Groceries
          </li>
        </Link>
        <li>
          <span className='px-3 font-semibold'>
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </span>
        </li>
        <li>
          <button
            className='login-btn px-3 font-semibold'
            onClick={() => {
              setLoginButtonName(
                loginButtonName === "Login" ? "Logout" : "Login"
              );
            }}>
            {loginButtonName}
          </button>
        </li>
        <li>
          <button
            className='bg-blue-500 px-2 py-2 rounded-lg'
            onClick={updateName}>
            Update Name
          </button>
        </li>
        <li>{userDetails.loggedUser}</li>
        <li>
          <button
            className='add-to-cart-btn px-3 font-semibold'
            onClick={() => {
              setCartButtonName(
                cartButtonName === "Add to cart" ? "Payment" : "Add to cart"
              );
            }}>
            {cartButtonName}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
