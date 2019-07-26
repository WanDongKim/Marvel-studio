import React, { Component } from 'react';

class Card extends Component {
    state= {
        name: this.props.name,
        img: this.props.src
    }
    render() {
        return (
            <div className="Card">
                <img className="Card_Image" src={this.state.img} alt={this.state.name} />
                <p className="Card_Title">{this.state.name}</p>
            </div>
        )
    }
}

export default Card;