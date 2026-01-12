import { POSTER_BASE_URL } from "../../constants/photos";
import { NowShowingTVShow } from "../../types/Photos";

type Props = {
  photo: NowShowingTVShow;
};

const PhotoCard = ({ photo }: Props) => {
  return (
    <div className="photo-card">
      <img
        className="tvshow-image"
        src={`${POSTER_BASE_URL}${photo.poster_path}`}
        alt={`${photo.title || photo.name} poster`}
      />

      <h4>{photo.title || photo.name}</h4>
      <p>⭐ {photo.vote_average}</p>
    </div>
  );
};

export default PhotoCard;
