import React, { Component } from 'react';
import AddCommentForm from './addCommentForm';
import CommentList from './commentList';
import decode from "jwt-decode";

class CommentContainer extends Component {
    state={
        title: '',
        commentText: '',
        rating: 0,
        user_id: '',
        username: '',
        movie_id: this.props.movie_id,
        loggedIn: false
    }
    componentWillMount(){
        this._userLoggedIn();
    }
    _submitCommentForm = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/api/movie/${this.state.movie_id}/comment/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify({
                content_id: this.state.movie_id,
                commentTitle: this.state.title,
                commentText: this.state.commentText,
                rating: this.state.rating,
                user_id: this.state.user_id,
                username: this.state.username
            })
        }).then(res => {
            return res.json();
        }).then(res => {
            if(res.success) {
                window.location.reload();
            }
        })
        .catch(err => console.log(err));

    }
    _handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    _userLoggedIn = () => {
        if(sessionStorage.getItem("token")){
            const user = decode(sessionStorage.getItem("token"));
            this.setState({
                user_id: user.id,
                username: user.username,
                loggedIn: true
            });
        }
    }
    
    render() {
        return(
            <div className="Comment__Container">
                { this.state.loggedIn ? <AddCommentForm onSubmit={this._submitCommentForm} onChange={this._handleChange}/> : 'Log in to start review' }

                <CommentList movie_id={this.state.movie_id} />
            </div>
        )
    }
}

export default CommentContainer;