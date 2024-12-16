import MovieContainer from '@/containers/movie'
import React from 'react'
import Movies from "@/mocks/movies.json"
import { notFound } from 'next/navigation';

async function MoviePage({ params }) {

  const movieId = (await params).id;

  const movieDetail = Movies.results.find(movie => movie.id.toString() === movieId);

  if (movieDetail)
    return (
      <MovieContainer movie={movieDetail} />
    )
  return notFound();

}

export default MoviePage
