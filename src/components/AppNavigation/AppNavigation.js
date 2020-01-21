import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import AppRoutings from './AppRoutings';

class AppNavigation extends Component {
    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Navbar.Brand href="/">
                        LIBRARY
                        {/* <img src='http://tsdcollege.in/Images/TSDC-WEB-HEAD-NAV-BAR-50.jpg' alt="Lib" /> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" fill>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="books">Books</Nav.Link>
                            <NavDropdown title="Librarian" id="basic-nav-dropdown">
                                <NavDropdown.Item href="book-search">Search</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="book-issue">Issue a Book to student/staff</NavDropdown.Item>
                                <NavDropdown.Item href="book-receive">Receive a Book from student/staff</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="book-add">Add Books to Library</NavDropdown.Item>
                                <NavDropdown.Item href="book-remove">Remove Books from Library</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="books">View all the Books </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Admin" id="basic-nav-dropdown">
                                <NavDropdown.Item href="admin">Dashboard</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form style={{textAlign: "center"}} inline>
                            <FormControl type="text" placeholder="Search Books" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav>
                            <Nav.Link href="login">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* <AppRoutings /> */}
            </>
        );
    }
}

export default AppNavigation;
