import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchMovies  } from '../actions/index'

import { Grid, Row, Col, Thumbnail, Clearfix } from 'react-bootstrap'

import VisibilitySensor from 'react-visibility-sensor'

class MovieList extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    
  }

  onClick(id) {
    console.log(id);
  }

  onSensorChange(isVisible) {
    console.log(isVisible && 'Load More Movies!')
  }

  renderThumbnails() {
    console.log('MOVIES: ', this.props.movies)
    return this.props.movies.Search.map((movie, index) => {
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
    console.log(this.props.movies)
    if (this.props.movies === null) {
      return (
        <Grid fluid>
          <Row>
            <div>'Type a movie to Search'</div>
          </Row>
        </Grid>
      )
    } else if (this.props.movies.Response === "True") {
      return (
        <Grid fluid>
          <Row>
            {this.renderThumbnails()}
            <VisibilitySensor onChange={this.onSensorChange.bind(this)}/>
          </Row>
        </Grid>
      )
    } else if (this.props.movies.Response === "False") {
      return (
        <Grid fluid>
          <Row>
            <div>'No movies Found'</div>
          </Row>
        </Grid>
      )
    } else if (this.props.movies.Response === "Loading") {
      return (
        <Grid fluid>
          <Row>
            <div>'LOADING!'</div>
          </Row>
        </Grid>
      )
    }
  }

}

const  mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ searchMovies }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)

