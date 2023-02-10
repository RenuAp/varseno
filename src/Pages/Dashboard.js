import React from 'react';
import { Container } from 'react-bootstrap';
import "./Dashboard.css"
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import ChartP from './ChartP';
import Slider from './Slider';
import ChartBar from './ChartBar';
import TabDetails from './TabDetails';
import ChartArea from './ChartArea';
import { FcCameraIdentification } from "react-icons/fc"

const Dashboard = () => {
  return (
    <div>
    <Container>
        <Row>
        <Col sm={3}>
            <Card>
      <Card.Body>
      <Card.Header>Featured</Card.Header>
        <Card.Text>
          With supporting text below as a natural lead-in.
          <span>
          <FcCameraIdentification/>
          </span>
        </Card.Text>
        <Button variant="primary">Bookings</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col sm={3}>
            <Card ClassName="card-second">
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in.
        </Card.Text>
        <Button variant="primary">Bookings</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col sm={3}>
            <Card ClassName="card-third">
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in.
        </Card.Text>
        <Button variant="primary">Bookings</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col sm={3}>
            <Card ClassName="card-fourth">
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in.
        </Card.Text>
        <Button variant="primary">Bookings</Button>
      </Card.Body>
    </Card>
            </Col>
        </Row>
        <Row>
        <Col sm={5} className="border-div">
        <Card>
      <Card.Body>
          <ChartBar/>
          </Card.Body>
          </Card>
        </Col>
        <Col sm={7} className="box-decor">
        <Card>
      <Card.Body>
          <Slider/>
          </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={6} className="box-decor">
        <Card>
      <Card.Body>
          <TabDetails/>
          </Card.Body>
          </Card>

        </Col>
        <Col sm={6} className="box-decor">
          <Card>
            <Card.Body>
              <ChartArea/>
            </Card.Body>
          </Card>
          
          </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Dashboard
