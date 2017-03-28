import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetState, moviesRequestThunk } from '../actions/index'

import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap'
import Scroll from 'react-scroll'
import { debounce, once } from 'lodash'

class MovieSearch extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }

    this.search = debounce((isSubmit, offset) => {this.sendSearch(isSubmit, offset)}, 600)
    this.setURLChangeListener = once(this.createURLChangeListener)
  }
  
  sendSearch() {
    var searchTerm = this.state.searchTerm.replace(/\s+/g,' ').trim()
    this.setState({searchTerm: searchTerm})
    
    searchTerm 
      && this.props.moviesRequestThunk(searchTerm)
        .then(() => {
          this.props.history.action !== "POP" && Scroll.animateScroll.scrollToTop()
        })
      
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
        //DO NOT FIRE SEARCH
      }
      
    } else {
      searchTerm && this.setState({searchTerm: ''})
      
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
            <Button bsStyle="primary" onClick={this.onSubmit.bind(this)}>
              {this.props.isLoadingMovies ? (<img src="/assets/spinner.gif" />) : 'Search'}
            </Button>
         
      </Navbar.Form>
    )
  }
}

const  mapStateToProps = (state) => {
  return {
    isLoadingMovies: state.isLoadingMovies
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ moviesRequestThunk }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch)