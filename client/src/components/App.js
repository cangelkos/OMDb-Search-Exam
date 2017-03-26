import React, { Component } from 'react';

import MovieList from '../containers/MovieList'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Modal, Button }from 'react-bootstrap'

class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    
    return (
    <div className='main-container'>
      <Header history={this.props.history}/>
      <MovieList />
      <Footer />
      <Modal
          show={false}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
    )
  }
}

export default App;