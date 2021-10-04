import Button from '@restart/ui/esm/Button';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

import '../Header/Header.css'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

    return (
        <div>
            <Navbar bg="light" expand="lg" className='py-4'>
                <Container fluid className='container'>
                    <Navbar.Brand className='logo' href="#">Uni</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink
                                to="/home"
                                className='header'
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#5bbc2e",

                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/course"
                                className='header'
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#5bbc2e"
                                }}
                            >
                                Courses
                            </NavLink>
                            <NavLink
                                to="/features"
                                className='header'
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#5bbc2e"
                                }}
                            >
                                Featured
                            </NavLink>
                            <NavLink
                                to="/about"
                                className='header'
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#5bbc2e"
                                }}
                            >
                                About
                            </NavLink>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <FontAwesomeIcon icon={faSearch} className='awesomelogo' />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;