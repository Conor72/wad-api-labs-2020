import React, { useContext } from "react";
import {MoviesContext} from './moviesContext'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  return (
    <>
        <div>
            {context.movies.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
  );
};

export default MovieListPage; 