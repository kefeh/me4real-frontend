import React from 'react'
import { Card, Button, CardDeck } from 'react-bootstrap'
import '../App.css'
function UpcomingEvents() {
    return (
        <div className="contiainer-fluid">
            <h2 className="latest-news-h2"> Upcoming Events</h2>

            <div className="card-container">

     {[1, 2, 3].map(() => 
                    <div className="event-card">
                        <div className="event-container">
                            <div className="text-container">
                                <div className="date-container">
                                    <div className="day">
                                        20
                                    </div>
                                    <div className="month-container">
                                        <div className="month" style={{opacity:0.5}}> Jan</div>
                                        <div className="month"> Jan</div>
                                    </div>

                                </div>
                                    <div> Women engineer tech javascript gurus  </div>
                     <div style={{ padding: '20px'}}>
                         <Button variant="warning" size="md">
                                     More Detials
                                </Button>   
                             </div>
                        </div>
                    </div>
                    <hr />
                    </div>
                    )}
               
            </div>
        </div>
    )
}

export default UpcomingEvents