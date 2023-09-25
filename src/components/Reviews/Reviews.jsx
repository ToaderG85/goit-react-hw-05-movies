import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetailsReviews } from '../api/api';
import style from './Reviews.module.css';

function Reviews() {
  const [movieData, setMovieData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const response = movieDetailsReviews(movieId);
    response
      .then(data => {
        setMovieData(data.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return movieData.length === 0 ? (
    <p>Sorry, we don't have information!</p>
  ) : (
    movieData.map(({ author_details: { name, username }, content, id }) => (
      <div className={style.reviews} key={id}>
        <h3 className={style.title}>Author: {name + ' ' + username}</h3>
        <p className={style.content}> {content}</p>
      </div>
    ))
  );
}

export default Reviews;