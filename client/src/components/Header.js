//React
import React from 'react';

//React Bootstrap
import { 
  Navbar, 
  FormGroup, 
  FormControl, 
  Button,
   } from 'react-bootstrap';


//Redux Containers
import MovieSearch from '../containers/MovieSearch'

const Header = ({ history }) => {
  return (
   <div>
    <Navbar fluid fixedTop inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">OMDb-Search-App</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <MovieSearch history={history}/>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Header;