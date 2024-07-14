import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=apple&from=2024-07-13&to=2024-07-13&sortBy=popularity&apiKey=4c70f03b6d974495b23e4b0d92e06ae4`
        );
        setNewsData(response.data.articles);
      } catch (error) {
        setError('Failed to fetch news data');
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-widget">
      {error ? (
        <div>{error}</div>
      ) : newsData.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2>Top Headlines</h2>
          <ul>
            {newsData.slice(0, 5).map((article, index) => (
              <li key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <h3>{article.title}</h3>
                  <p>{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default News;
