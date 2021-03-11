import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const NavShow = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/home");
    }
    return (
        <div className='container'>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Football Mania</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    <Nav.Link onClick={handleClick}>Back</Nav.Link>
                </Nav>
            </Navbar>

        </div>
    );
};

export default NavShow;