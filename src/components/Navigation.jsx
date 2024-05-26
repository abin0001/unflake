import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Image from "react-bootstrap/Image"
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Nav'

import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../Assets/logo192.png"


const Navigation = () => {
  return (
    <>
    <Navbar bg='black'>
      <Container fluid className='bg-white'>
        <NavbarBrand href='#'>
          <Image src={Logo} fluid roundedCircle width={50} height={50}></Image>
        </NavbarBrand>
        <Nav>
          <NavLink href='#'>Home</NavLink>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#Career'>Careers</NavLink>
          <NavLink href='#Contact'>Contact</NavLink>
        </Nav>
        <Button>
          SIGN IN
        </Button>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation
