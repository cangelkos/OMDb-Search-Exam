import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { moreMoviesRequestThunk  } from '../actions/index'

import { Grid, Row, Col, Thumbnail, Clearfix } from 'react-bootstrap'


import VisibilitySensor from 'react-visibility-sensor'

class MovieList extends Component {
  constructor() {
    super()
  }

  onSensorChange(isVisible) {
    isVisible && this.props.moreMoviesRequestThunk()
  }

  onClick(id) {
    this.props.history.push(`/?s=${this.props.searchTerm}`)
    this.props.history.push(`/movie/${id}`)    
  }

  renderThumbnails() {
    return this.props.movies.map((movie, index) => {
      return (
        <Col xs={12} sm={6} md={4} key={index}>
          <Thumbnail 
            href="#" 
            onClick={() => this.onClick(movie.imdbID)} 
            src={movie.Poster !== 'N/A' ? movie.Poster : 'assets/noposter.jpg' } 
            alt="242x200" 
          >
            <h4>{movie.Title}</h4>
            <h5>{movie.Year}</h5>
          
          </Thumbnail>
        </Col>
      
      )
    })
  }
  
  render() {
    return (
      this.props.movies
      ? <Grid fluid>
          <Row>
            {this.renderThumbnails()}
            <VisibilitySensor onChange={this.onSensorChange.bind(this)} scrollCheck intervalCheck={false} delayedCall />
          </Row>
        </Grid>
      : null
      )
  }

}

const  mapStateToProps = (state) => {
  return {
    movies: state.movies,
    omdbRequest: state.omdbRequest,
    searchTerm: state.moviesSearchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ moreMoviesRequestThunk }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)

