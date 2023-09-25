import React,{ useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from '../../components/api/api';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { MoviesSearchForm } from '../../components/MoviesSearchForm/MoviesSearchForm';
import Loader from 'components/Loader/Loader';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  function handleSubmit(values, actions) {
    const { name } = values;
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);

    actions.resetForm();
  }

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const response = searchMovie(movieName);
    setLoader(true);
    response
      .then(data => {
        setMovies(data.results);
        setLoader(false);
      })
      .catch(error => console.log(error));
  }, [movieName]);

  const visibleProducts = movies.filter(movie =>
    movie.original_title.toLowerCase().includes(movieName.toLowerCase())
  );

  return (
    <div>
      <MoviesSearchForm value={movieName} onSubmit={handleSubmit} />
      {loader && <Loader />}

      <MoviesList movies={visibleProducts} />
    </div>
  );
}

export default Movies;