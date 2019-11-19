import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import '../App.css'
function About(params) {
    return (
        <div >
            <section>

                <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 20}}>
                    <a href="/"><p className="large-text">About</p></a>
                    <p className="small-text"> our goal, vision , mission</p>

            </div>
            </section>
            <section>

            <Jumbotron fluid>
                <Container>
                    <h1 style={{textAlign: 'center'}}>Fluid jumbotron</h1>
                    <p style={{ lineHeight: '1.5em', textAlign: 'center' }}>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                    <p style={{ lineHeight: '1.5em', textAlign: 'center', font: 'normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,sans-serif'}}>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
                Just click “Edit Text” or double click me to add your own content and make changes to the font. 
                Feel free to drag and drop me anywhere you like on your page. 
                I’m a great place for you to tell a story and let your users know a little more about you.
                This is a great space to write long text about your company and your services.
                 <br />You can use this space to go into a little more detail about your company. 
                Talk about your team and what services you provide. 
                Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
                Make your company stand out and show your visitors who you are.
            </p>
                </Container>
            </Jumbotron>
            </section>
            {/* Badge section */}
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

            {/* about us image section image on the right Our mission*/}
            <section>
                <div className="row">
                    <div className="col-md-6 " style={{ height: '525px',  }}>
                        <div className="section-image-side-text">
                        <h3 >Our Mission</h3>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                        </p>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ height: '525px', padding: 0 }}>
                        <img src="/carousel.png" height='525px' width="100%" />
                    </div>

                </div>
            </section>
            {/* about us image section image on the left Our viaion*/}
            <section>
                <div className="row">
                    <div className="col-md-6" style={{ height: '525px', padding: 0 }}>
                        <img src="/carousel.png" height='525px' width="100%" />
                    </div>

                    <div className="col-md-6" style={{ backgroundColor: 'white', height: '525px',  }}>
                        <div className="section-image-side-text">
                        <h3 >Our Vission</h3>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                        </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Badge section */}
            <section>

                <div className="row mission-height site-primary-bg-color middle" >
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

export default About