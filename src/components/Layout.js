import React from 'react'
import Navbar from './Navbar'

const Layout = (props) => (
  <div className="body">
    <Navbar/>
    <div className="container">
      <h1>{props.title}</h1>
      {props.children} 
    </div>
  </div>
);

export default Layout