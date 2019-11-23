import React from 'react'
import { Card, Button, CardDeck } from 'react-bootstrap'
import EventCard from '../common/EventCard'
import '../App.css'
function UpcomingEvents() {
    return (
        <div className="contiainer-fluid">
            <h2 className="latest-news-h2"> Upcoming Events</h2>

            <div className="card-container">

     { [1, 2, 3].map(() => 
                    <EventCard />
                    )}
               
            </div>
         
        </div>
    )
}

export default UpcomingEvents