/**
 * Wanderlust Travel Agency - Main Application Component
 * 
 * This component serves as the entry point for the Travel Agency website.
 * It utilizes React-Bootstrap for responsive design and layout.
 */

import React from 'react';
// Importing Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing necessary React-Bootstrap components
import { Navbar, Nav, Container, Card, Row, Col, Carousel, Form, Button } from 'react-bootstrap';

function App() {
  return (
    /**
     * React.Fragment is used to group a list of children without adding extra nodes to the DOM.
     * The div with className "App" acts as the main wrapper for the application.
     */
    <React.Fragment>
      <div className="App">
        
        {/* --- NAVIGATION BAR SECTION --- */}
        {/* sticky="top" ensures the navbar stays at the top while scrolling */}
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

        {/* --- HERO HEADING SECTION --- */}
        <Container className="mt-5 text-center">
          <h1 className="display-4 fw-bold">Explore the World with Wanderlust</h1>
          <p className="lead text-muted">Your journey begins here. Discover breathtaking destinations and create unforgettable memories.</p>
        </Container>

        {/* --- CAROUSEL SECTION --- */}
        {/* fade prop provides a cross-fade transition between slides */}
        <Container className="my-5">
          <Carousel fade>
            {/* Carousel Item 1: Exotic Getaways */}
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
            
            {/* Carousel Item 2: Urban Adventures */}
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
            
            {/* Carousel Item 3: Ancient Wonders */}
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

        {/* --- POPULAR DESTINATIONS (CARDS) SECTION --- */}
        <Container id="destinations" className="my-5">
          <h2 className="text-center mb-4">Popular Destinations</h2>
          <Row>
            {/* Card 1: Paris */}
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
            
            {/* Card 2: Santorini */}
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
            
            {/* Card 3: Bali */}
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

        {/* --- CONTACT FORM SECTION --- */}
        <Container id="contact" className="my-5 p-5 bg-light rounded shadow-sm">
          <h2 className="text-center mb-4">Contact Us</h2>
          <Form>
            <Row>
              <Col md={6}>
                {/* Name Input */}
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                {/* Email Input */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>
            </Row>
            {/* Message Input */}
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

        {/* --- FOOTER SECTION --- */}
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
