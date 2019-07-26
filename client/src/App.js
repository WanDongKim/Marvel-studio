import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Header from './components/base/header';
import Footer from './components/base/footer';
import Home from './components/home/home';

import MovieList from './components/movie/movieList';
import SeriesList from './components/series/seriesList';
import Movie_Detail from './components/movie/movie_details';
import FullCastList from './components/cast/full-cast_list';
import Series_Detail from './components/series/series_detail';
import SeasonList from './components/series/season/season_list';
import EpisodeList from './components/series/episode/episode_list';
import Login from './components/auth/login';
import Register from './components/auth/register';

const App = () => {
  return <Router>
  <Switch>
    <Route exact path="/login" component={LoginContainer}/>
    <Route exact path="/register" component={LoginContainer}/>

    <Route component={DefaultContainer}/>
  </Switch>
  </Router>
}

const LoginContainer = () => (
  <div className="container">
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route exact path="/" render={() => <Redirect to="/login" />} />

  </div>
)

const DefaultContainer = () => (
  <div className="App">
    <Header />
    
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login}  />
    <Route exact path="/register" component={Register} />

    <Route exact path="/movie" component={MovieList} />
    <Route exact path="/movie/:id" component={Movie_Detail} />
    <Route exact path="/movie/:id/full-cast" component={FullCastList} />

    <Route exact path="/series" component={SeriesList} />
    <Route exact path="/series/:id" component={Series_Detail} />
    <Route exact path="/series/:id/seasons" component={SeasonList} />
    <Route exact path="/series/:id/season/:season/full-cast" component={FullCastList} />
    <Route exact path="/series/:id/season/:season" component={EpisodeList} />

    <Footer />
  </div>
);

export default App;

