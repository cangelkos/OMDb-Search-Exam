import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchMovies, resetState, moviesRequest } from '../actions/index'

import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap'

import _ from 'lodash'

class MovieSearch extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }

    this.search = _.debounce((isSubmit, offset) => {this.sendSearch(isSubmit, offset)}, 600)
    this.setURLChangeListener = _.once(this.createURLChangeListener)
  }
  
  sendSearch() {
    var searchTerm = this.state.searchTerm.replace(/\s+/g,' ').trim()
    this.setState({searchTerm: searchTerm})
    console.log('SEARCHING FOR: ', searchTerm)
    searchTerm ? this.props.moviesRequest(searchTerm) : this.props.resetState()
  }

  onInputChange(event) {
      this.setState({searchTerm: event.target.value})
      this.search()
  }

  onSubmit(event) {
    event.preventDefault()
    let currentSearchTerm = this.props.history.location.search.split('s=')[1]
    this.state.searchTerm 
      && currentSearchTerm !== this.state.searchTerm
      && this.props.history.push(`/?s=${this.state.searchTerm}`)
    
  }

  componentWillMount() {
    this.checkSearchTerm()
    this.setURLChangeListener()
    
  }
  
  createURLChangeListener() {
    this.props.history.listen((location) => {
      this.checkSearchTerm()
    })
  }
  
  checkSearchTerm() {
   let searchTerm = this.props.history.location.search.split('s=')[1]
    if (searchTerm) {
      if (unescape(searchTerm) !== this.state.searchTerm) {
        this.setState({searchTerm: unescape(searchTerm)})
        this.search()
      } else {
        console.log('No search because search term is the same')
      }
      
    } else {
      this.setState({searchTerm: ''})
      this.props.resetState()
    }  
  }

  render() {
    return (
      <Navbar.Form>
          
            <FormGroup>
            <form
              onSubmit={this.onSubmit.bind(this)}
            >
              <FormControl 
                type="text" 
                placeholder="Search" 
                bsSize="large"
                value={this.state.searchTerm}
                onChange={this.onInputChange.bind(this)}
                onError={() => (this.src = 'Default.jpg')}
              />
            </form>
            </FormGroup>
            {' '}
            <Button type="submit" bsStyle="primary" onClick={this.onSubmit.bind(this)}>Search</Button>
         
      </Navbar.Form>
    )
  }
}

const  mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ searchMovies, resetState, moviesRequest }, dispatch)
}

export default connect(null, mapDispatchToProps)(MovieSearch)