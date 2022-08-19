import React from 'react';
import './PostsItem.css';

export default function PostItem(props) {
    const {title, upvote, image, user, subreddit, comment_count} = props.post
    return (
        <div className="post">
            <div className="post_left">
                <i className="fas fa-caret-up"></i>
                <i className="fas fa-caret-down"></i>
                <span>{upvote}</span>
            </div>
            <div className="post_center">
                <img  src={image} alt=""/>
            </div>
            <div className="post_right">
                <h3><a href={'/r/${subreddit}/$(title)'}>{title}</a></h3>
                <span className='post_info'>
                    submitted an hour ago by
                    {" "}<a href={'/u/${user'}>{user}</a>{" "}
                    to
                    {" "}<a href={'/r/${subreddit}'}>{subreddit}</a>
                    <p className='post_info'>
                        {comment_count} comments | share | save | hide | report
                    </p>
                </span>
                </div>         
        </div>
    )
}