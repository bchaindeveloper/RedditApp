import React, { useState, useEffect, Children } from 'react';
import Article from './components/Article';
import './Feed.css';

export default function Feed() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('Trading');
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + ".json").then(
      res => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then(data => {
          if (data != null)
            setArticles(data.data.children);
        });
      }
    )
  }, [subreddit])

  return (
    <div className="App">
      <header>
        <input class="subreddit_input" onChange={e => setSubreddit(e.target.value)} value={subreddit} />
      </header>
      <div className="articles">
        {(articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''}
      </div>

    </div>
  );
}