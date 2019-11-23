import React from 'react'
import '../App.css'
import {Button } from 'react-bootstrap'
function EventCard(params) {
    return(
        <div style={{ display: "flex", justifyContent: 'center' }}>

        <div className="_1eoat _2ipfx"  >
                <div className="_5vofw" style={{ borderBottomWidth: '1px', borderColor: '#FFCC00', justifyContent: 'center' }}>

                <div className="date-container">
                    <div className="day">
                        20
                        </div>
                    <div className="month-container">
                        <div className="month" style={{ opacity: 0.5 }}> Jan</div>
                        <div className="month"> Jan</div>
                    </div>
                </div>
                <div className="_3qhs">
                    <div className="_153IM">
                        <div className="event-item-title"> Lecture: The gender play gap</div>
                        <div className="event-item-title"> &nbsp;/&nbsp;</div>
                        <div className="event-item-location"> San Francisco</div>
                    </div>
                </div>
                <div className="2giuh">
                    <div style={{ paddingLeft: '85px' }}>

                        <Button variant="warning" size="md">
                            More Detials
                                </Button>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}
export default EventCard