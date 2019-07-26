import React, { Component } from 'react';
import MainCarousel from './main_carousel';
import MainImage from '../../assets/images/image-asset.jpeg';
import Card from './movie_card_s';

class Home extends Component {
    state = {
        movies: [
            {
                name: 'BLACK WIDOW',
                img: require("../../assets/images/home/BlackWidow.jpg")
            },
            {
                name: 'THE ETERNALS',
                img: require("../../assets/images/home/Eternals.jpg")
            },
            {
                name: 'SHANG-CHI of Legend of Ten Rings',
                img: require("../../assets/images/home/Shangchi.jpg")
            },
            {
                name: 'DOCTOR STRANGE - Multiverse of Madness',
                img: require("../../assets/images/home/Dr.jpg")
            },
            {
                name: 'THOR - Love and Thunder',
                img: require("../../assets/images/home/Thor.jpg")
            }
        ],
        series: [
            {
                name: 'The FALCON and the  WINTER SOLDIER',
                img: require("../../assets/images/home/Falcon.jpg")
            },
            {
                name: 'WandaVision',
                img: require("../../assets/images/home/WandaVision.jpeg")
            },
            {
                name: 'LOKI',
                img: require("../../assets/images/home/Loki.jpg")
            },
            {
                name: 'WHAT IF...',
                img: require("../../assets/images/home/WhatIf.jpg")
            },
            {
                name: 'Hawkeye',
                img: require("../../assets/images/home/Hawkeye.jpg")
            }
        ]
    }

    _renderMovieCard = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Card 
                key={index}
                name={movie.name}
                src={movie.img}        
            />
        })
        return movies;
    }
    
    _renderSeriesCard = () => {
        const series = this.state.series.map((movie, index) => {
            return <Card 
                key={index}
                name={movie.name}
                src={movie.img}        
            />
        })
        return series;
    }

    render() {
        const background = {
            backgroundImage: `url("${MainImage}")`
        }
        return (
            <div className="home_container">
                <div className="masthead" >
                    <div className="masthead_content">
                        <p className="content_title">Marvel's new Phase 4</p>
                        <p><span>Marvel Studios</span> announces their upcoming movies and streaming series</p>
                        <a className="content_button" href="https://www.marvel.com/articles/movies/sdcc-2019-all-of-the-marvel-studios-news-coming-out-of-hall-h-at-san-diego-comic-con">Read more</a>
                        </div>
                    <div className="masthead_image" style={background} />
                </div>
                <div className="Upcomings">
                    <p className="Title">Upcoming Movies on Phase 4</p>
                    <div className="coming_movies">
                        {this._renderMovieCard() }
                    </div>

                    <p className="Title">Upcoming Disney+ Series on Phase 4</p>
                    <div className="coming_series">
                    {this._renderSeriesCard() }

                    </div>
                </div>

            </div>
        )
    }
}

export default Home;
