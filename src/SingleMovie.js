import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';
import { GiPopcorn } from 'react-icons/gi';
import { BsStarHalf } from 'react-icons/bs';
import NoImage from './no_image.png';

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);
  if (isLoading) {
    return (
      <section className="single-movie  ">
        <div className="skeleton skeleton-img" />
        <div className="single-movie-info">
          <div className=" skeleton skeleton-header"></div>
          <p className=" skeleton skeleton-para"></p>
          <p className=" skeleton skeleton-para"></p>
          <p className=" skeleton skeleton-para"></p>
          <p className=" skeleton skeleton-para"></p>
          <p className=" skeleton skeleton-para"></p>
          <p className=" skeleton skeleton-para"></p>
        </div>
      </section>
    );
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Runtime: runtime,
    imdbRating,
  } = movie;
  return (
    <section className="single-movie">
      <img src={poster === 'N/A' ? NoImage : poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{year}</p>
        <p>{plot}</p>
        <p>
          Runtime:
          <GiPopcorn size={24} />
          {runtime}
        </p>
        <p>
          IMDB Rating: <BsStarHalf size={24} /> {imdbRating}
        </p>
        <Link className="btn" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
