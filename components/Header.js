import React from 'react';

import { FormControl, Button, Form, Nav, Navbar} from 'react-bootstrap';
export default class Header extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="css/bootstrap.min.css"/>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">The Howling Bowl</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/food">Food</Nav.Link>
                        <Nav.Link href="/reserve">Join Us</Nav.Link>
                    </Nav>
                </Navbar>
                
            </div>
        )
    }
}