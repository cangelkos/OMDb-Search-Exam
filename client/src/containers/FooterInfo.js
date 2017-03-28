import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'

class FooterInfo extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Navbar.Text>
        {
        this.props.isLoadingMovies
        ? 'Loading...'
        : this.props.moviesPage
          ? 'Now viewing: ' + this.props.movies.length  + ' of ' + this.props.moviesPage.total + ' results.'
          : this.props.movies
            ? 'No movies found...'
            : 'Please search for movies by title.'
        }

      </Navbar.Text>
    )
  }
}

const  mapStateToProps = (state) => {
  return {
    isLoadingMovies: state.isLoadingMovies,
    moviesPage: state.moviesPage,
    movies: state.movies
  }
}


export default connect(mapStateToProps, null)(FooterInfo)