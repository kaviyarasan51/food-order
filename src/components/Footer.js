import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const Footer = () => {
  const userDetails = useContext(UserContext);
  return <div className='footer'>{userDetails.loggedUser}</div>;
};

export default Footer;
