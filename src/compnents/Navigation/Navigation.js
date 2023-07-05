import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Service from '../Service/Service';
import './Navigation.css'
const Navigation = () => {
   
    return (
        <div>
            <Navbar className='Nav_color' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img
                                className='Nav_brand'
                                src="image/iik.jpeg"
                                alt="First slide"
                                width= "80"
                                height = "80"
          /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto Nav_part">
                            <Nav.Link className='Nav_item' href="/"><span style={{color:'white'}}>Home</span></Nav.Link>
                            <Nav.Link className='Nav_item' href="/services"><span style={{color:'white'}}>Services</span></Nav.Link>
                            <Nav.Link className='Nav_item' href="/contact"><span style={{color:'white'}}>Contact</span></Nav.Link>
                            <Nav.Link className='Nav_item' href="/bannar"><span style={{color:'white'}}>Bannar</span></Nav.Link>
                            <Nav.Link className='Nav_item' href="/addService"><span style={{color:'white'}}>Add Service</span></Nav.Link>
                            
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            
        </div>
    )



}

export default Navigation;
