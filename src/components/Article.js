import React from 'react';

function Article(props) {
    return (
        <article>
            <a href={"https://reddit.com" + props.article.permalink} target="_blank">

                <h3 className='posttitle'>{props.article.title}</h3>
                <p className='selftext'>{props.article.selftext}</p>
                <p className='upvote'>Up Vote: {props.article.ups}</p>
                <p className='downvote'>Down Vote: {props.article.downs}</p>
                <p className='author'>Author: {props.article.author}</p>
                <p className='subreddit'>Subreddit:{props.article.subreddit}</p>


            </a>
        </article>
    )
}

export default Article;
