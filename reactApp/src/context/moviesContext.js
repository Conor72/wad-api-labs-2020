import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies, getUpcoming , getTopRatedMovies} from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result, upcoming: [...state.upcoming], topRated: [...state.topRated]};
    case "load-upcoming":
      return {upcoming: action.payload.upcoming, movies: [...state.movies], topRated: [...state.topRated]};
      case "load-topRated":
        return { topRated: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming ]};
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], topRated: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  useEffect(() => {
    getUpcoming().then(upcoming => {
      console.log(upcoming);
      dispatch({ type: "load upcoming movies", payload: {upcoming}});
    });
  },[]);

  useEffect(() => {
    getTopRatedMovies().then(movies => {
      console.log(movies);
      dispatch({ type: "load topRated movies", payload: {movies}});
    });
  },[]);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        topRated: state.topRated,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider