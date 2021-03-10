import React from 'react';
import Header from '../Header/Header';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="container my-3">
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Football Mania</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">League</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
            <Header />
        </div>
    );
};

export default Home;