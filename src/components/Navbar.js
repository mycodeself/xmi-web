import React from 'react'
import { Collapse, Navbar as NavbarRS, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false}
  }
  render() {
    return (
      <NavbarRS color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggle}/>
        <NavbarBrand href="/">XMI</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/testimonios">Testimonios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/asociaciones">Asociaciones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/alas-vivas/noticias">Noticias</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </NavbarRS>
    )
  }
}

export default Navbar