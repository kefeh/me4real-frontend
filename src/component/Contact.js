import React from 'react'
import '../App.css'
import { Form, Col, Button } from 'react-bootstrap'
function Contact(params) {
    return (
        <div >
            <section>

                <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 20 }}>
                    <a href="/"><p className="large-text">Contact</p></a>
                    <p className="small-text"> our goal, vision , mission</p>

                </div>
            </section>



            {/* about us image section image on the right Our mission*/}
            <section style={{paddingBottom: "60px"}}>
                <div className="row">
                    <div className="col-md-6" style={{ backgroundColor: 'white', height: '525px', }}>
                        <div className="section-image-side-text">
                            <h3 >Get in Touch</h3>
                        <p>
                            500 Terry Francois Street San Francisco, CA 94158 <br />
                                info@mysite.com  |   123-456-7890
                        </p>
                        <div  className="container"> 
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Name" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Email" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="formGridAddress1">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control placeholder=" Inquiry Main St" />
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message </Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>
 

 

                                    <Button variant="warning" type="submit">
                                        Send
                                    </Button>
                                </Form>


                        </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ height: '600px', padding: 0 }}>
                        <img src="/carousel.png" height='680px' width="100%" />
                    </div>

                </div>
            </section>
            {/* Badge section */}
            <br /> 
            <section>

                <div className="row mission-height site-secondary-bg-color middle" >
                    <br />
                    <p style={{ textAlign: 'center', paddingTop: '30px', }}>
                        <span className="badge-section-text">am no bird; and no net ensnares me; I am a free <br />
                            human being with an independent will.
                        </span>
                        lorem ipsum here
                    </p>
                </div>

            </section>
        </div>
    )
}

export default Contact