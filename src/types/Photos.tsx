export type NowShowingTVShow = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title?: string;
  name?: string;
  overview: string;
  first_air_date?: string;
  vote_average: number;
  original_language: string;
  video: boolean;
  release_date?: string;
  original_title?: string;
};

export type NowPlayingPhotosResponse = {
  results: NowShowingTVShow[];
  page: number;
  total_pages: number;
  total_results: number;
};
