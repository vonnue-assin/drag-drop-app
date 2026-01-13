import { POSTER_BASE_URL } from "../../constants/photos";
import { NowShowingMovies } from "../../types/Photos";

import "./styles.css";

type Props = {
  photo: NowShowingMovies;
};

const PhotoCard = ({ photo }: Props) => {
  return (
    <div className="photo-card">
      <img
        className="movie-image"
        src={`${POSTER_BASE_URL}${photo.poster_path}`}
        alt={`${photo.title || photo.name} poster`}
      />

      <h4 className="title">{photo.title || photo.name}</h4>
      <p className="vote">⭐ {photo.vote_average}</p>
    </div>
  );
};

export default PhotoCard;
