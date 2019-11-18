import React from 'react'
import { Nav, Button , Form} from 'react-bootstrap'
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
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link  >Support us</Nav.Link>
                            <Nav.Link href="news" eventKey="news">News</Nav.Link>
                            <Nav.Link href="event" eventKey="event">Events</Nav.Link>
                            <Nav.Link  eventKey="podcast">Podcast</Nav.Link>
                            <Nav.Link href="contact" eventKey="contact" disabled>
                                Contact
                            </Nav.Link>
                        </Nav>

                    </div>
                </div>

            </section>
        
        </div>
    )
}
export default Footer;