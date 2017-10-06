import React from 'react'
import { Collapse, Navbar as NavbarRS, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {isOpen: false}
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <div>
        <NavbarRS color="faded" light toggleable>
          <NavbarBrand href="/">XMI</NavbarBrand>
          <NavbarToggler right onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/asociaciones">Asociaciones</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/recursos">Recursos</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </NavbarRS>
      </div>
    )
  }
}

export default Navbar