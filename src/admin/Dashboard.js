import React from 'react'
import { Card, CardColumns} from 'react-bootstrap'
import '../App.css'
function Dashboard(params) {
    return(
        <div className="container">
            <br />
            <h2> What are you interested in doing </h2>
            <hr /> 
            <div> 
                <CardColumns>

           {[1,2,3,4,5,6,7,8,9].map(()=>
               <Card className="text-center" bg="warning">
                   <Card.Body>
                       <Card.Title>Card title</Card.Title>
                       <Card.Text>
                           bbbbThis card has 
                       </Card.Text>
                       <Card.Text>
                           <small className="text-muted">Last updated 3 mins ago</small>
                       </Card.Text>
                   </Card.Body>
               </Card>
           )} 
            </CardColumns>
           </div>
        </div>
    )
}
export default Dashboard