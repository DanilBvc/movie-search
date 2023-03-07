export interface movieItem {
  Title: string,
  Year: number,
  imdbID: string,
  Type: string,
  Poster: string
}
interface ratingItem {
  Source: string,
  Value: string
}
export interface movieItemFull {
  Title: string,
  Year: number,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  Ratings: ratingItem[],
  Metascore: number,
  imdbRating: number,
  imdbVotes: number,
  imdbID: string,
  Type: string,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: boolean
}
