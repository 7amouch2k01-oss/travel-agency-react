import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Card, Row, Col, Carousel, Form, Button } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="#home">Wanderlust Travel Agency</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#destinations">Destinations</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Heading */}
        <Container className="mt-5 text-center">
          <h1 className="display-4 fw-bold">Explore the World with Wanderlust</h1>
          <p className="lead text-muted">Your journey begins here. Discover breathtaking destinations and create unforgettable memories.</p>
        </Container>

        {/* Carousel */}
        <Container className="my-5">
          <Carousel fade>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="/assets/8enxFFBEHYLm.jpg"
                alt="Beautiful Landscape"
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>Exotic Getaways</h3>
                <p>Find your paradise in the most remote corners of the world.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="/assets/fK6S5v8rESSw.jpg"
                alt="European Cities"
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>Urban Adventures</h3>
                <p>Explore the rich history and culture of Europe's iconic cities.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="/assets/p5aDXbF54ODw.jpg"
                alt="Ancient Wonders"
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>Timeless History</h3>
                <p>Step back in time and witness the grandeur of ancient civilizations.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

        {/* Destination Cards */}
        <Container id="destinations" className="my-5">
          <h2 className="text-center mb-4">Popular Destinations</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src="/assets/MGI6z68xYy1q.jpg" style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Paris, France</Card.Title>
                  <Card.Text>
                    The City of Light awaits. From the Eiffel Tower to the Louvre, experience the charm of Parisian culture and cuisine.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src="/assets/XzEyojxQWhV8.jpg" style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Santorini, Greece</Card.Title>
                  <Card.Text>
                    Famous for its stunning sunsets and white-washed buildings, Santorini is the ultimate romantic getaway in the Aegean Sea.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src="/assets/saNMJIU7bPN7.jpg" style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Bali, Indonesia</Card.Title>
                  <Card.Text>
                    Discover the spiritual heart of Indonesia. Bali offers lush jungles, pristine beaches, and a vibrant local culture.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Contact Form */}
        <Container id="contact" className="my-5 p-5 bg-light rounded shadow-sm">
          <h2 className="text-center mb-4">Contact Us</h2>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="How can we help you?" />
            </Form.Group>
            <div className="text-center">
              <Button variant="dark" type="submit" className="px-5">
                Send Message
              </Button>
            </div>
          </Form>
        </Container>

        {/* Footer */}
        <footer className="bg-dark text-white py-4 mt-5">
          <Container className="text-center">
            <p>&copy; 2026 Wanderlust Travel Agency. All rights reserved.</p>
            <Nav className="justify-content-center">
              <Nav.Link href="#" className="text-white">Privacy Policy</Nav.Link>
              <Nav.Link href="#" className="text-white">Terms of Service</Nav.Link>
              <Nav.Link href="#" className="text-white">Follow Us</Nav.Link>
            </Nav>
          </Container>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
