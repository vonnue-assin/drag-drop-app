import { NowShowingMovies } from "../../types/Photos";
import PhotoCard from "../PhotoCard";

import "./styles.css";

type Props = {
  photos: NowShowingMovies[];
};

const PhotoGrid = ({ photos }: Props) => {
  return (
    <div className="photo-container">
      <div className="photo-grid">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
