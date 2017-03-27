import React from 'react';
import { Navbar } from 'react-bootstrap';

import FooterInfo from '../containers/FooterInfo'

const Footer = () => {
  return (
    <Navbar fluid fixedBottom inverse>
      <FooterInfo />
    </Navbar>
  );
}

export default Footer;