import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { clearMovieDetails, movieDetailsRequestThunk } from '../actions/index'

class MovieDetails extends Component {
  constructor() {
    super()
    this.state = {
      showModal: true
    }
  }
  
  componentWillMount() {
    let movieID = this.props.history.location.pathname.split('/movie/')[1]
    this.props.movieDetailsRequestThunk(movieID)
  }

  close() {
    this.setState({ showModal: false });
    this.props.clearMovieDetails();
    setTimeout(() => {this.props.history.goBack()}, 200) 
  }

  open() {
    this.setState({ showModal: true });
  }

  renderDetails() {
    
    let items = []

    for (let key in this.props.movieDetails) {
      switch(key) {
      
       case 'Poster':
         break;
       case 'Ratings':
         break;
       case 'Response':
         break;
       default:
         items.push(
          <div key={`i-${key}`}>
            <b>{key}: </b>
            <span>{this.props.movieDetails[key]}</span>
          </div>
          )
      }
    }



    //console.log(this.props.movieDetails)
    return (
      <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.movieDetails['Poster']}/>
          <hr/>
          {items}
          <b>Ratings: </b>
          {
            this.props.movieDetails['Ratings'].map((x, i) => {
              return (
                <ul key={`r-${i}`}>
                  <li>
                    <b>{x.Source}: </b>
                    <span>{x.Value}</span>
                  </li>
                </ul>
              )
            })
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  render() {
    return this.props.movieDetails 
      ? this.renderDetails()
      : null
  }
}

const  mapStateToProps = (state) => {
  return {
    isLoadingMovies: state.isLoadingMovies,
    movieDetails: state.movieDetails,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ clearMovieDetails, movieDetailsRequestThunk }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)