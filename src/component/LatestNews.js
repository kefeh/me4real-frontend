import React from 'react'
import { Card, Button, CardDeck} from 'react-bootstrap'
import '../App.css'
function LatestNews(){
    return (
        <div className="contiainer-fluid">
            <h2 className="latest-news-h2"> Latest News</h2>

            <div className="card-container">

            <CardDeck>

           {[1,2,3].map(() => <Card style={{ width: '0rem' }}>
                <Card.Img variant="top" src="carousel.png" />
                <Card.Body>
                    <Card.Title>Card Title goes in here for </Card.Title>
                    <hr />
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                   <small className="text-muted">
                       Someone famous in <cite title="Source Title">Source Title</cite>
                   </small>                </Card.Body>
            </Card>
            )}
                </CardDeck>
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