import React, { useEffect, useState, useRef } from 'react';
import {Carousel, Container, Image, Form, Button, Nav} from 'react-bootstrap'
import LatestNews from './component/LatestNews'
import UpcomingEvents from './component/UpcomingEvents'
import './App.css'
const carousels = [
    {
    img: "carousel.png",
    title: "First slide label",
    heading: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
    img: "carousel1.png",
    title: "Second slide label",
    heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
    img: "carousel2.png",
    title: "Third slide label",
    heading: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
]
function LandingPage() {
    const element = useRef(null)
useEffect(()=>{
    scrollToBottom()
    
}, [])
    const scrollToBottom = () => {
        element.current.scrollIntoView({ behavior: "auto" });
    }
    return (
        <div className="container-fluid" ref={element} >

        <section>
                <div className="row"  > 
                    <Carousel style={{ height: '575px' }}>
                {
                    carousels.map((item) => 
                        <Carousel.Item>
                            <img style={{ height: '575px' }}
                                className="d-block w-100"
                                src={item.img}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.heading}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
                
            </Carousel>
            </div>
            
        </section>
        <section>
            <div className="row" >
                    <div className="col-md-3 col-sm-3 mission-height site-primary-bg-color" >
                         <div style={{paddingTop: 20}} >
                            <a href="/"><p className="large-text">some text</p></a>
                            <p className="small-text"> our goal, vision , mission</p>
                        </div>
                         
                         </div>
                    <div className="col-md-3 col-sm-3 mission-height site-suppliment-bg-color" > 
                        <div style={{ paddingTop: 20 }} >
                            <a href="/"><p className="large-text">some text</p></a>
                            <p className="small-text"> our goal, vision , mission</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mission-height site-tertiary-bg-color" >
                        <div style={{ paddingTop: 20 }} >
                            <a href="/"><p className="large-text">some text</p></a>
                            <p className="small-text"> our goal, vision , mission</p>
                        </div>

                    </div>
                    <div className="col-md-3 mission-height site-secondary-bg-color"  >
                        <div style={{ paddingTop: 20 }} >
                            <a href="/"><p className="large-text">some text</p></a>
                            <p className="small-text"> our goal, vision , mission</p>
                        </div>
                    </div>

            </div>
        </section>

        {/* Latest news section */}
        <section>
            <LatestNews />
        </section>
        {/* Badge section */}
        <section>

                <div className="row mission-height site-primary-bg-color middle" >
                <br />
                <p  style={{textAlign: 'center', paddingTop:'30px',}}>
                        <span className="badge-section-text">am no bird; and no net ensnares me; I am a free <br />
   human being with an independent will.
   </span>
   lorem ipsum here
                </p>
            </div>

        </section>
            {/* up coming events section */}
            <section>
                <UpcomingEvents />
            </section>

            {/* Join us section */}
            <section>
                <div className="row">
                    <div className="col-md-4 site-primary-bg-color" style={{ height: '525px', textAlign: 'center' }}>
                        <div className="section-image-side-text" style={{ color: 'white' }}>
                            <h3 >Join Us</h3>
                            <p>
                                Empower our women and girls
                            </p>
                            <Button variant="warning"> Donate Now</Button>
                        </div>
                    </div>
                    <div className="col-md-8" style={{ height: '525px', padding: 0 }}>
                        <img src="carousel.png" height='525px' width="100%" />
                    </div>

                </div>
            </section>

        {/* footer section */}

        {/* <section  style={{backgroundColor: 'red'}}>
            <footer style={{textAlign: 'center'}}>
                 this is the footer section
            </footer>
        </section> */}
        </div>
    );
}

export default LandingPage;
