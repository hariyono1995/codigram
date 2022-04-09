import React from "react";
import { useParams } from "react-router-dom";

//  Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//  Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

//  Hook
import useMovieFetch from "../hooks/useMovieFetch";
//  No image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  // const movie_id = parseInt(movieId);
  const { state: movie, loading, error } = useMovieFetch(movieId);

  console.log(movie);

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <BreadCrumb title={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        budget={movie.budget}
        time={movie.runtime}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {(movie.actors || []).map((actor) => (
          <Actor
            actor={actor.name}
            character={actor.character}
            profile_path={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;