//React
import React from 'react';

//React Bootstrap
import { Navbar } from 'react-bootstrap';

//Redux Containers
import FooterInfo from '../containers/FooterInfo'

const Footer = () => {
  return (
    <Navbar fluid fixedBottom inverse>
      <FooterInfo />
    </Navbar>
  );
}

export default Footer;