import favicon from "/TheStartledMooseLogoNB.png";
import "../../assets/styles/components.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {" "}
            <img src={favicon} alt="logo" height="60px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutMe">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact Me
                </Link>
              </li>
             
            </ul>
            <div className="nav-icons">
                Find me on:
                <a
                  href="https://www.linkedin.com/in/joanna-daborn-764014210/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa navbar-icons fa-linkedin"></i>
                </a>{" "}
                &
                <a
                  href="https://www.facebook.com/TheStartledMooseArtGallery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa navbar-icons fa-facebook"></i>
                </a>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
