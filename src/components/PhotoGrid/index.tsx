import { NowShowingTVShow } from "../../types/Photos";
import PhotoCard from "../PhotoCard";

type Props = {
  photos: NowShowingTVShow[];
};

const PhotoGrid = ({ photos }: Props) => {
  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoGrid;
