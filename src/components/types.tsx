export type TVMazeSeries = {
  score: number;
  show: Series;
};

export type Series = {
  name: string;
  id: number;
  genres: string[];
  runtime: number;
  url: string;
  image: {
    medium?: string;
    original?: string;
  };
};
