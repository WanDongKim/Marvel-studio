import React, { Component } from 'react';

import Header from './components/base/header';
import Footer from './components/base/footer';
import Home from './components/home/home';

import MovieList from './components/movie/movieList';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import SeriesList from './components/series/seriesList';
import Movie_Detail from './components/movie/movie_details';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <Route exact path="/" component={Home} />
          
          <Route exact path="/movie" component={MovieList} />
          <Route path="/movie/:id" component={Movie_Detail} />

          <Route exact path="/series" component={SeriesList} />
        <Footer />
      </div>
      </Router>

    );
  }
}

export default App;
