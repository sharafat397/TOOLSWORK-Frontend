import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Service.css"
const Service = (props) => {
  const { _id, name, img, price, duration } = props.realService
  const { handleDeleteService } = props
  return (
    <div>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={img}
        width= "250"
        height = "330"/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price} Taka Only</Card.Text>
         
          <Card.Text><Badge bg="secondary">{duration} day's </Badge></Card.Text>
          <hr></hr>
          
          <Link to={`/updateservice/${_id}`}>
            <Button variant="warning" className="btn_update">
              Update
            </Button>
          </Link>
          <Button
            onClick={() => handleDeleteService(_id)}
            variant="danger"
            className="ms-5 btn_delete"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Service