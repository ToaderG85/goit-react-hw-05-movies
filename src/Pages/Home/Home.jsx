import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trendingMovie } from '../../components/api/api';
import default_poster from '../../NotAvailable/no-poster.png';
import style from './Home.module.css';
import { BsFire } from 'react-icons/bs';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await trendingMovie();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1 className={style.trend_title}>
        {' '}
        <BsFire className={style.icon} />
        Trending Movies <BsFire className={style.icon} />
      </h1>
      <ul className={style.list}>
        {movies.map(movie => (
          <li className={style.item} key={movie.id}>
            <Link
              className={style.link}
              to={`movies/${movie.id}`}
              state={{ from: location }}
            >
              <img
                className={style.poster}
                src={
                  movie.poster_path
                    ? BASE_URL + movie.poster_path
                    : default_poster
                }
                alt={movie.original_title}
              />
              <h2 className={style.title}>{movie.original_title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;