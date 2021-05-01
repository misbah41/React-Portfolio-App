import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import './Heade.css'
const Header = () => {
  const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 20 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  let navbarClasses=['header-section'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }
  return (
    <header className={navbarClasses.join(" ")}>
      <div className="container">
        <Navbar  expand="lg">
          <Navbar.Brand className='logo' href="#home">Misbah Dev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <a className='nav-link menu-link' href="#home">Home</a>
              <a className='nav-link menu-link' href="#about">About</a>
              <a className='nav-link menu-link' href="#service">Service</a>
              <a className='nav-link menu-link' href="#portfolio">Portfolio</a>
              <a className='nav-link menu-link' href="#contact">Contact</a>
              <a className='nav-link menu-link' href="#blogs">Blogs</a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
