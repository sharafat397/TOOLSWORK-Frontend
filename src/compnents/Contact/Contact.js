import React from "react";
import { Button, Form } from "react-bootstrap";
import './Contact.css'
const Contact = () =>{
    return (
        <div className="Contact_outerDiv">
            <div className="d-flex">
                <div className="Contact_Social_links">
                            <img
                                className='Contact_brand'
                                src="image/iik.jpeg"
                                alt=""
                                width= "80"
                                height = "80"
                             />
                             <h6 className="mx-5 mt-3">Facebook: <span style={{color: "#3b5998"}}>facebook.com/iik-mark</span> </h6> 
                             <h6 className="mx-5 mt-3">Instagram: <span style={{color: "#E1306C"}}>instagram.com/iik-mark</span> </h6>
                             <h6 className="mx-5 mt-3">Whats app: <img 
                              
                             src="image/WhatsApp.jpg"
                             alt=""
                             width= "80"
                                height = "80">
                            </img> </h6>
                           
                </div>
                <div className="Contact_Important_links">
                    <h5 className="SiteMap"> SITEMAP </h5>
                    <a className='Contact_link' href="/">Home</a> <br></br>
                    <a className='Contact_link' href="/services">Services</a><br></br>
                    <a className='Contact_link' href="/contact">Contact</a><br></br>
                    <a className='Contact_link' href="/bannar">Bannar</a><br></br>
                    <a className='Contact_link' href="/addService">Add Service</a>
                            
                </div>
                <div className="Contact_Feedback">
                <h5 className="Feedback_title">Your Feedback? </h5>
                <Form>
                    <Form.Group className="mb-3 mx-4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                       
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 mx-4">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control type="text" placeholder="Your comment" />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>
                    <Button className="Feedback_btn" variant="danger" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
            </div>
            <hr></hr>
            <p className="CopyRight">©2023 IIK-Mark Agency / All rights reserved. / Privacy</p>
            
        </div>
    )
}

export default Contact;