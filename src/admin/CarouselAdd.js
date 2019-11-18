import React, {useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import '../App.css'
function CarouselAdd(params) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className="container">
            <br />
            <h2> What are you interested in doing </h2>
            <hr />
            <div className="row justify-content-md-center ">
                <div className="off-set-2 col-md-8">

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="img title" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.imageupload">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" placeholder="img" />
                    </Form.Group>
                    <div className="pull-right"> 
                        <Button type="submit" className="pull-right">Submit form</Button>
                    </div>

               </Form>
                </div>
            </div>
        </div>
    )
}
export default CarouselAdd