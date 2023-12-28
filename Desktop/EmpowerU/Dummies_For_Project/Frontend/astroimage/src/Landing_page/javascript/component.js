import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react';
import {
  MDBCarousel, MDBCarouselItem, MDBCarouselCaption
} from 'mdb-react-ui-kit';

import '../css/component.css';
import { Link } from "react-router-dom";

const ResponsiveAppBar=()=>{
  
  return(

    <div className="app">
    <header className="header">
    <Navbar bg="primary" data-bs-theme="dark">
    <div classname="nav-title">
              AstroImage
            </div>
            
        <Container>
         
          <Nav className="me-auto">
           
            
            <div classname="nav-button">
              <Link className="navbar-button" to="/loginpage">Login</Link>
              <Link className="navbar-button" to="/signup">Signup</Link>
            </div>
          </Nav>
        </Container>
      </Navbar> 
      
      
    </header>

    
        <div>
          <MDBCarousel showControls showIndicators>
            <MDBCarouselItem itemId={1}>
                <img src='https://img.freepik.com/free-photo/glowing-spaceship-orbits-planet-starry-galaxy-generated-by-ai_188544-9655.jpg?w=1380&t=st=1703710428~exp=1703711028~hmac=ae08087dd057fd14d8467da60ff3592a2a4866bd33802326258bbfa395bf92fd' className='d-block w-100' alt='...' />
              <MDBCarouselCaption>
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
                <img src='https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?w=1060&t=st=1703710492~exp=1703711092~hmac=2d26e930d79f6c5999fd8d295fde024cb03216049376f37ce413a3eedb1e955f' className='d-block w-100' alt='...' />

              <MDBCarouselCaption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
              <img src='https://img.freepik.com/free-photo/night-sky-glows-with-iridescent-deep-space-generative-ai_188544-11285.jpg?w=1380&t=st=1703710516~exp=1703711116~hmac=a13fe79bd59b99a3f73004cd1d6a5e54608457e14fa3c5639b93166c9f8f7302' className='d-block w-100' alt='...' />
              <MDBCarouselCaption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarousel>
        </div>
          
        
    

    <footer className="footer">
      <p>&copy; 2023 AstroImage. All rights reserved.</p>
    </footer>
    
  </div>

  );
}

export default ResponsiveAppBar;