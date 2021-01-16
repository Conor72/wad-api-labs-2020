/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import express from 'express';
import {
  getMovies, getMovie, getMovieReviews, getUpcoming, getTopRatedMovies
} from '../tmdb-api';
import movieModel from './movieModel';



const router = express.Router();

router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

router.get('/upcoming', (req, res,next) => {
  getUpcoming()
  .then(upcoming => res.status(200).send(upcoming))
  .catch((error) => next(error));
});

router.get('/topRated', (req, res,next) => {
  getTopRatedMovies()
  .then(topRated => res.status(200).send(topRated))
  .catch((error) => next(error));
});

export default router;