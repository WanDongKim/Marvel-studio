import React, { Component } from 'react';
import Comment from './comment';

class CommentList extends Component {
    state= {
        content_id: this.props.movie_id,
        comments: ''
    }
    componentDidMount() {
        this._getComments();
    }
    _renderComments = () => {
        const comments = this.state.comments.map((comment, index) => {
            return <Comment 
                key={comment._id}
                id={comment._id}
                movie_id={comment.content_id}
                index={index+1}
                title={comment.commentTitle}
                text={comment.commentText}
                rating={comment.rating}
                user_id={comment.user_id}
                username={comment.username} 
                createTime={comment.update}/>
        })
        return comments;
    }
    _getComments = async () => {
        const results = await this._callApi();
        this.setState({
            comments: results
        });
    }
    _callApi = () => {
        return fetch(`https://marvel-studio.herokuapp.com/api/movie/${this.state.content_id}/comment`)
        .then(response => response.json())
        .then(json => json.comments)
        .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.comments.length)
        return(
            <div className="Comment__List">
                {this.state.comments.length !== 0 ? this._renderComments() : <i>Add the first review here!</i>}
            </div>
        )
    }
}

export default CommentList;