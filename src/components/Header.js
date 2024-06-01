const Header = () => {
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
        <a href="#">🆕 Offers</a>
        <a href="#">🆘 Help</a>
        <a href="#">👤 Sign ln</a>
        <a href="#">🛒 Cart</a>
      </div>
    </div>
  );
};

export default Header;
