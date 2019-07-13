import React, { Component } from 'react';
import Header from './components/base/header';
import Footer from './components/base/footer';
import MovieList from './components/movie/movieList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
        <Footer />
      </div>
    );
  }
}

export default App;
