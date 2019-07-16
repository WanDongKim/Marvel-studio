import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Header from './components/base/header';
import Footer from './components/base/footer';
import Home from './components/home/home';

import MovieList from './components/movie/movieList';
import SeriesList from './components/series/seriesList';
import Movie_Detail from './components/movie/movie_details';
import FullCastList from './components/cast/full-cast_list';
import Series_Detail from './components/series/series_detail';



class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <Route exact path="/" component={Home} />
          
          <Route exact path="/movie" component={MovieList} />
          <Route exact path="/movie/:id" component={Movie_Detail} />
          <Route exact path="/movie/:id/full-cast" component={FullCastList} />

          <Route exact path="/series" component={SeriesList} />
          <Route exact path="/series/:id" component={Series_Detail} />
          <Route exact path="/series/:id/season/:season/full-cast" component={FullCastList} />


        <Footer />
      </div>
      </Router>

    );
  }
}

export default App;
