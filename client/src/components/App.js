//React
import React, { Component } from 'react';

//React-Router
import { Route } from 'react-router-dom'

//Components
import MovieList from '../containers/MovieList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MovieDetails from '../components/MovieDetails'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    
    return (
    <div className='main-container'>
      
      <Header history={this.props.history}/>
      <MovieList history={this.props.history}/>

      {/* Route for movie details overlay*/}
      <Route path="/movie" component={MovieDetails} />
      <Footer />
      
    </div>
    )
  }
}

export default App;