import React from 'react'
import { Table, Form, Col, Button } from 'react-bootstrap'
import '../App.css'
function CarouselEdit(params) {
    return (
        <div className="container">
            <br />
            <div>
                <Button varient="warning"> Add Item</Button>
            </div> 
            <h2> Enter a number on the rank column to make it top when displayed </h2>
            <br />

            <div>
                <Table responsive="md">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>title</th>
                            <th>Description</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1,2,3,4,5,6].map((index) => 
                            <tr>
                                <td> <Form.Check type="checkbox" /></td>
                                <td>Simple title dog</td>
                                <td>This is a very long description of the carousel image</td>
                                <td>
                                    <Form.Group as={Col} md="4" sm="12" controlId="validationCustom05">
                                        <Form.Control type="text" placeholder="rank" required />
                                    </Form.Group></td>
                            </tr> 
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default CarouselEdit