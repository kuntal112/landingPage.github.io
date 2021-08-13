let Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo_div">
        <h1>
          Lorem <br /> ipsum
        </h1>
      </div>
      <nav className="navbar">
        <ul className="navlist">
          <li className="navlinks">
            <a href="/">About</a>
          </li>
          <li className="navlinks">
            <a href="/">Services</a>
          </li>
          <li className="navlinks">
            <a href="/">Cuisine</a>
          </li>
          <li className="navlinks">
            <a href="/">Gallery</a>
          </li>
          <li className="navlinks">
            <a href="/">Contact</a>
          </li>
          <li className="navlinks">
            <a href="/">Book</a>
          </li>
        </ul>
      </nav>
      <button className="cart_btn">
        <a href="/">Cart</a>
      </button>
    </div>
  );
};
export default Sidebar;
