import React from 'react';
import PostItem from './Postsitem';
import './Posts.css';

export default function Posts() {
    const posts = [
        {
            upvote: 547,
            image: "/images/landscape.jpg",
            title: 'Questions about new wallet',
            user: 'theindependentline',
            subreddit: 'politics',
            comment_count: 284,
        },
        {
            upvote: 547,
            image: "/images/landscape.jpg",
            title: 'Questions about new wallet',
            user: 'theindependentline',
            subreddit: 'politics',
            comment_count: 284,
        }
    
    ]
    return (
        <div className='posts'>
            {posts.map(post=> (
                <PostItem post={post} />
            ))}
        </div>
    )
}