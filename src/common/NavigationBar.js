import React from 'react'
import { Navbar, Nav, Form, FormControl, Button}  from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavigationBar(){
    return (
        <>
            <Navbar style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', color: 'white' }} collapseOnSelect expand="lg" variant="light" sticky="top">
                <Navbar.Brand href="#home">
                    <img
                        src="/logo.jpg"
                        width="70"
                        height="50"
                        style={{ marginLeft: '40px' }}
                        className="d-inline-block align-top"
                        alt="Me4Real"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-center">

                    <Nav className=" justify-content-center" justify>
                    <Nav.Link  href="/">Home</Nav.Link>
                    <Nav.Link href="/event">Events</Nav.Link>
                    <Nav.Link href="/news">News</Nav.Link>
                    <Nav.Link href="/media">Media</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                </Navbar.Collapse>

            </Navbar>

        </>
    )
}

export default NavigationBar