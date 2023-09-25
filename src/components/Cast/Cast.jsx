import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { movieDetailsCast } from '../api/api';
import style from './Cast.module.css';

import error from '../../NotAvailable/no-photo.png';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

function Cast() {
  const [movieData, setMovieData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const response = movieDetailsCast(movieId);
    response
      .then(data => {
        setMovieData(data.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return movieData.length === 0 ? (
    <p>Sorry, we don't have information!</p>
  ) : (
    <ul className={style.list}>
      {movieData.map(({ profile_path, name, character, id }) => (
        <li className={style.item} key={nanoid()}>
          <img
            className={style.profile}
            src={profile_path ? BASE_URL + profile_path : error}
            alt={name}
          />
          <div className={style.details}>
            <p className={style.name}>{name}</p>
            <p className={style.character}>Character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default Cast;