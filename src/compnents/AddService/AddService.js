import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";

const AddService = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const durationRef = useRef();
  const imgRef = useRef();

  const handleAddService = (e) => {
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const duration = durationRef.current.value;
    const img = imgRef.current.value;

    const newService = { name, price, duration, img };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
      // stringify data -> json
    }).then(res=>res.json())
	.then(data=>{
		if(data.insertedId){
			alert("data is Successfully Added data")
      newService({})
		}
	})

    e.preventDefault();
  };

  return (
    <>
      {/* <h1>hi</h1> */}
      <Form onSubmit={handleAddService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Service Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Service Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Service Price</Form.Label>
          <Form.Control
            ref={priceRef}
            type="text"
            placeholder="Enter Service Price(Tk)"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Service duration</Form.Label>
          <Form.Control
            ref={durationRef}
            type="text"
            placeholder="Enter Service duration"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Service Image Link</Form.Label>
          <Form.Control
            ref={imgRef}
            type="text"
            placeholder="Enter Service Image Link"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default AddService;
