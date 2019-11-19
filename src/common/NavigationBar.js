import React from 'react'
import { Navbar, Nav, Form, FormControl, Button}  from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavigationBar(){
    return (
        <>
            <Navbar style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', color: '#FFCC00' }} collapseOnSelect expand="lg"  sticky="top">
                <Navbar.Brand href="#home">
                    <img
                        src="logo.jpg"
                        width="70"
                        height="50"
                        style={{ marginLeft: '40px' }}
                        className="d-inline-block align-top"
                        alt="Me4Real"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-center">

                    <Nav className=" justify-content-center" style={{ color: '#FFCC00'}} justify>
                        <Nav.Link style={{ color: '#FFCC00' }}  href="/">Home</Nav.Link>
                        <Nav.Link  href="event">Events</Nav.Link>
                        <Nav as={Link} to='news' >News</Nav>
                    <Nav.Link href="media">Media</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                </Nav>
                </Navbar.Collapse>

            </Navbar>

        </>
    )
}

export default NavigationBar