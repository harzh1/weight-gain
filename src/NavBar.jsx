import logo from "/src/assets/logo.png";

function NavBar() {
  return (
    <>
      <header className="main-header">
        <div className="header-brand">
          <img className="logo-img" src={logo} alt="logo" />
          <p className="logo-name">Weight Gain</p>
        </div>

        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
