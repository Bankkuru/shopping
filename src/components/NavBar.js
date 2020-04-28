import React from 'react'
import { Nav, Navbar, } from "react-bootstrap"

const NavBar = () => {
    return (
        <div>
            <header >
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Let's Shopping!!</Navbar.Brand>
                <Nav className="mr-auto">
                    < Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="https://www.facebook.com/wittawat.seiophoo" target='_blank'>Facebook</Nav.Link>
                    <Nav.Link href="" target='_blank'>Github</Nav.Link>
                </Nav>
            </Navbar>
            </header>
        </div>
    )
}

export default NavBar

