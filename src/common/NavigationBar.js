import React from 'react'
import { Navbar, Nav, Form, FormControl, Button}  from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

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
                        <nav className='nav'>
                            <ul>
                                <li>
                                    <NavLink to='/' exact activeClassName='active'>
                                        Home
					                </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/event' exact activeClassName='active'>
                                        Events
					                </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/news' exact activeClassName='active'>
                                        News
					                </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/media' exact activeClassName='active'>
                                        Media
					                </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact' exact activeClassName='active'>
                                        Contact
					                </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about' exact activeClassName='active'>
                                        About
					                </NavLink>
                                </li>
                            </ul>
                        </nav>
                </Nav>
                </Navbar.Collapse>

            </Navbar>

        </>
    )
}

export default NavigationBar