import React from 'react'
import { Card, Button, CardGroup, CardColumns} from 'react-bootstrap'
import '../App.css'
function LatestNews(){
    return (
        <div className="contiainer-fluid">
            <h2 className="latest-news-h2"> Latest News</h2>

            <div className="card-container">

                <CardColumns>

           {[1,2,3].map(() => <Card >
                <Card.Img variant="top" src="carousel.png" />
                <Card.Body>
                    <Card.Title>Card Title goes in here for </Card.Title>
                    <hr />
                    <Card.Text>
                        Some quick example text to build
                </Card.Text>
                   <small className="text-muted">
                       Someone famous in <cite title="Source Title">Source Title</cite>
                   </small>                </Card.Body>
            </Card>
            )}
                </CardColumns>
            </div>
            <div className="readmore">

                <Button variant="warning" size="lg">
                        Read more
            </Button>
            </div>

        </div>
    )
}

export default LatestNews