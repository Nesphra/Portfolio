import Logo from "../images/logo.svg"

function Navbar() {
    return (
        <header>
          <img className="logo" src={Logo} alt="Logo"></img>
          <nav>
            <ul className="navLinks">
              <li><a href="#">Social</a></li>
              <li><a href="#">About me</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </nav>
          <a href="#" className="button"><button class="buttonStyle">Contact me</button></a>
        </header>
    )
}

export default Navbar