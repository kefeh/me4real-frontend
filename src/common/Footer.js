import React from 'react'
import { Nav, Button , Form} from 'react-bootstrap'
import { NavLink }  from 'react-router-dom'
function Footer(props) {
    
    return(
        <div className="container-fluid"> 

            {/* footer sectiojn  */}
            < section style={{ marginTop: '80px' }} >
                <div className="row" style={{ marginTop: '80px' }}>
                    <div className="col-md-3" >
                        <h3>Women PWR</h3>
                        <br />
                        <p>
                            I'm a paragraph.
                            Click here to add your own text and edit me.
                             Let your users get to know you.
                    </p>
                        <br /> <br />
                        <p> <b>Email:</b> info@mysite.com <br />
                            <b>Phone:</b> 123-456-7890 <br />
                            R<b>egistered Charity:</b> 12345-67</p>
                    </div>
                    <div className="col-md-6">
                        <h2>Get Monthly Updates</h2>
                        <Form.Control type="email" placeholder="Email" />
                        <div style={{ paddingTop: "20px" }}>
                            <Button variant="warning" size="lg" block="true"> Sign Up</Button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2>Quick Links</h2>
                        <Nav defaultActiveKey="/about" className="flex-column">
                            <nav className='nav'>
                                <ul style={{flexDirection: 'column'}}>
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

                    </div>
                </div>

            </section>
        
        </div>
    )
}
export default Footer;