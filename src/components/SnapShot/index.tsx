import { useState } from "react";

import { NowShowingTVShow } from "../../types/Photos";
import PhotoGrid from "../PhotoGrid";
import SearchBar from "../SearchBar";

import "./styles.css";

const ACCESS_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGJjZDM5YmMzZWVjYWRkNmI2YmYwZjlhNjVkOGFjYSIsIm5iZiI6MTc1NDMwMTM4OC4zMTQsInN1YiI6IjY4OTA4M2NjOGM4ZDJhMTJkNWRlNmViYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OuyXVE42TiqMJMD77oXoC1dtw-k7LxgcyZ7JLwhYmOs";

const SnapShot = () => {
  const [photos, setPhotos] = useState<NowShowingTVShow[]>([]);

  const searchPhotos = async (query: string) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    setPhotos(data.results);
  };

  return (
    <div className="container">
      <h1 className="snap">📸 Snap Shot</h1>
      <SearchBar onSearch={searchPhotos} />
      <PhotoGrid photos={photos} />
    </div>
  );
};

export default SnapShot;
