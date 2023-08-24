import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import favicon from "/TheStartledMooseLogoNB.png";
import "../../assets/styles/components.css";

function Header() {
  return (
    <Navbar collapseOnSelect expand="sm" className="navigation">
      <LinkContainer to="/">
        <Navbar.Brand className="navbarBrand">
          <img src={favicon} alt="logo" height="60px" />
        </Navbar.Brand>
      </LinkContainer>

      <Nav className="me-auto navbar-nav">
        <LinkContainer to="/">
          <Nav.Link className="navLink">Home</Nav.Link>
        </LinkContainer>
        {/* About Page */}
        <LinkContainer to="/AboutMe">
          <Nav.Link className="navLink">About Me</Nav.Link>
        </LinkContainer>
        {/* Gallery Page */}
        <LinkContainer to="/Gallery">
          <Nav.Link className="navLink">Gallery</Nav.Link>
        </LinkContainer>
        {/* Contacts and info */}
        <LinkContainer to="/Contact">
          <Nav.Link className="navLink">Contact Me</Nav.Link>
        </LinkContainer>
      </Nav>

      <Nav className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
        <div className="navIcons">
        Find me on: 
          <a href="https://www.linkedin.com/in/alanabarrettfrew/">
            <i className="fa navbarIcons fa-linkedin"></i>
          </a> & 
          <a href="https://www.facebook.com/TheStartledMooseArtGallery">
            <i className="fa navbarIcons fa-facebook"></i>
          </a>
        </div>
      </Nav>
    </Navbar>
  );
}

export default Header;
