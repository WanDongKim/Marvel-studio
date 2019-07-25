import React, { Component } from 'react';
import Reply from './reply';
import decode from "jwt-decode";


class Comment extends Component {
    state={
        user_id: this.props.user_id,
        current_user_id: '',
        loggedIn: false
    }
    componentWillMount() {
        this._isLoggedIn();
    }
    _isSameUser = () => {
        if(this.state.loggedIn === true) {
            if(this.state.current_user_id === this.state.user_id) {
                return true;
            }
        }
        return false;
    }
    _isLoggedIn = () => {
        if(sessionStorage.getItem("token")){
            const user = decode(sessionStorage.getItem("token"));
            this.setState({
                current_user_id: user.id,
                loggedIn: true
            });
        }
    }
    _deleteComment = (event) => {
        fetch(`http://localhost:3000/api/movie/${this.props.movie_id}/comment/delete/${this.props.id}`)
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err));
    }

    render() {
        const { title, text, rating, username, createTime, index } =this.props
        const className = index % 2 === 0 ? 'Comment even' : 'Comment odd';
        console.log(this._isSameUser())
        return(
            <div className={className}>
                <p className="Title">{title} <span>{rating} / 10</span></p>
                <p className="Title__Username"> by {username} 
                    { this._isSameUser() ? <button className="btnDelete" onClick={this._deleteComment}>Delete</button> : ' ' }
                </p> 
                <p className="Comment__Contents">{text}</p>
                <hr />
            </div>
        )
    }
}

export default Comment;