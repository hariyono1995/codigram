// import React from "react";
// import { useParams } from "react-router-dom";

// //  Config
// import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// //  Components
// import Grid from "./Grid";
// import Spinner from "./Spinner";
// import BreadCrumb from "./BreadCrumb";
// import MovieInfo from "./MovieInfo";
// import MovieInfoBar from "./MovieInfoBar";
// import Actor from "./Actor";

// //  Hook
// import useMovieFetch from "../hooks/useMovieFetch";
// //  No image
// import NoImage from "../images/no_image.jpg";

// const Movie = () => {
//   const { movieId } = useParams();
//   // const movie_id = parseInt(movieId);
//   const { state: movie, loading, error } = useMovieFetch(movieId);

//   console.log(movie);

//   if (error) return <div>Something went wrong...</div>;
//   if (loading) return <Spinner />;

//   return (
//     <>
//       <BreadCrumb title={movie.original_title} />
//       <MovieInfo movie={movie} />
//       <MovieInfoBar
//         budget={movie.budget}
//         time={movie.runtime}
//         revenue={movie.revenue}
//       />
//       <Grid header="Actors">
//         {(movie.actors || []).map((actor) => (
//           <Actor
//             key={actor.id}
//             actor={actor.name}
//             character={actor.character}
//             profile_path={
//               actor.profile_path
//                 ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
//                 : NoImage
//             }
//           />
//         ))}
//       </Grid>
//     </>
//   );
// };

// export default Movie;

//  Refactor Movie to class component
import React, { Component } from "react";
import { useParams } from "react-router-dom";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// Components
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
// Image
import NoImage from "../images/no_image.jpg";
import API from "../API";

class Movie extends Component {
  constructor(props, state) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      error: false,
    };
  }

  fetchMovie = async () => {
    const { movieId } = this.props.params;

    try {
      this.setState({ error: false, loading: true });

      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);
      // Get directors only
      const directors = credits.crew.filter(
        (member) => member.job === "Director"
      );

      this.setState({
        movie: {
          ...movie,
          actors: credits.cast,
          directors,
        },
        loading: false,
      });
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  };

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { movie, loading, error } = this.state;

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong...</div>;

    return (
      <>
        <BreadCrumb movieTitle={movie.original_title} />
        <MovieInfo movie={movie} />
        <MovieInfoBar
          time={movie.runtime}
          budget={movie.budget}
          revenue={movie.revenue}
        />
        <Grid header="Actors">
          {movie.actors.map((actor) => (
            <Actor
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              profile_path={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${actor.profile_path}`
                  : NoImage
              }
            />
          ))}
        </Grid>
      </>
    );
  }
}

const MovieWithParams = (props) => <Movie {...props} params={useParams()} />;

export default MovieWithParams;
