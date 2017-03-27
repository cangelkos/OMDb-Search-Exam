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

  componentDidMount() {
    
  }

  onSensorChange(isVisible) {
    isVisible && this.props.moreMoviesRequestThunk()
  }

  onClick(id) {
    this.props.history.push(`/movie/${id}`)
    
  }

  loadMoreMovies() {

  }

  renderThumbnails() {
    //console.log('MOVIES: ', this.props.movies)
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
    if (this.props.movies === null) {
      return (
        <Grid fluid>
          <Row>
            <div>'Type a movie to Search'</div>
          </Row>
        </Grid>
      )
    } else if (this.props.movies.length) {
      return (
        <Grid fluid>
          <Row>
            {this.renderThumbnails()}
            <VisibilitySensor onChange={this.onSensorChange.bind(this)} scrollCheck intervalCheck={false} delayedCall />
          </Row>
        </Grid>
      )
    } else {
      return (
        <Grid >
          <Row>
            <div>'No movies Found'</div>
          </Row>
        </Grid>
      )
    } 
  }

}

const  mapStateToProps = (state) => {
  return {
    movies: state.movies,
    omdbRequest: state.omdbRequest
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ moreMoviesRequestThunk }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)

