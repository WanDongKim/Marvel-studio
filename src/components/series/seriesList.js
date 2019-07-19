import React, { Component } from "react";
import Series from "./series";
import LoadingBar from '../base/loading_bar';

class SeriesList extends Component {
  state = {
    series_list: [],
    pages: [1,2,3]
  };

  componentWillMount() {
    this.timerID = setTimeout(
      () =>  this._getSeriesList(),
      500
    );
    
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  _renderSeriesList = () => {
    const series_list = this.state.series_list.map((series) => {
      if(series.media_type ==='tv'){
        return <Series
        key={series.id}
        id={series.id}
        title={series.name}
        release_date={series.first_air_date}
        vote_average={series.vote_average}
        overview={series.overview}
        poster = {`https://image.tmdb.org/t/p/w500${series.poster_path}`} />
      }
      return undefined;
    })
    return series_list;

  }

  _getSeriesList = async () => {
    for(let i = 0; i<this.state.pages.length; i++){
      const results = await this._callApi(i+1);
      this.setState({
        series_list: this.state.series_list.concat(results)
      })
    }
  }

  _callApi = (page) => {
    return fetch(`https://api.themoviedb.org/4/list/116413?&api_key=005c2dfe9e66fb2c377f35ac409b86d7&sort_by=primary_release_date.desc&page=${page}`)
      .then(response => response.json())
      .then(json => json.results)
      .catch(err => console.log(err));
  }

  render() {
    const { series_list } =this.state;
    return (
      <div className="Series-list">
        {series_list.length !== 0 ? this._renderSeriesList() : <LoadingBar  type='cylon' color='#e50b14' />}
      </div>
    );
  }
}

export default SeriesList;

