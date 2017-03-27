import React, { Component } from 'react';

import MovieList from '../containers/MovieList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MovieDetails from '../components/MovieDetails'
import { Route } from 'react-router-dom'



class App extends Component {
  constructor() {
    super();
  }

  render() {
    
    return (
    <div className='main-container'>
      
      <Header history={this.props.history}/>
      <MovieList history={this.props.history}/>
      <Route path="/movie" component={MovieDetails} />
      <Footer />
      
    </div>
    )
  }
}

export default App;