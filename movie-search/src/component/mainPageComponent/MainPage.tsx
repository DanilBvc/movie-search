import setMovies from '@/store/actionCreators/movie/setMovies'
import { movieItem } from '@/types/movieItem'
import { IReducers } from '@/types/store/reducers'
import { fetchMovies } from '@/utils/fetchMovie'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, CircularProgress, TextField, Pagination } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import setFavorite from '@/store/actionCreators/favorite/setFavoriteMovie'
import removeFavorite from '@/store/actionCreators/favorite/removeFavorite'
import { getFavoriteFromLocalStorage } from '@/utils/handleDataFromLocalStorage'
function MainPage() {
  const [input, setInput] = useState('man')
  const [searchInput, setSearchInput] = useState('man')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const movies = useSelector((state: IReducers) => state.setMovieReducer)
  const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }
  const handleSearch = (value: React.KeyboardEvent<HTMLElement>) => {
    if (value?.key === 'Enter') {
      setSearchInput(input);
    }
  }
  const handleFavorite = (movie: movieItem) => {
    if (movies.favorite.includes(movie.imdbID)) {
      dispatch(removeFavorite({ data: null, favorite: [movie.imdbID] }))
    } else {
      dispatch(setFavorite({ data: null, favorite: [movie.imdbID] }))
    }
  }
  useEffect(() => {
    setLoading(true)
    fetchMovies(searchInput, page).then((data) => {
      console.log(data)
      if (data !== undefined) {
        dispatch(setMovies({ data }))
      } else {
        setLoading(false)
        dispatch(setMovies({ data: null }))
      }
    }).then(() => setLoading(false))
  }, [page, searchInput])
  useEffect(() => {
    const favoriteMovies = getFavoriteFromLocalStorage()
    if (favoriteMovies !== null) {
      dispatch(setFavorite({ data: null, favorite: favoriteMovies }))
    }
  }, [])
  return (
    <div className='container'>
      <Head>
        <title>MainPage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-page__wrapper">
        <TextField id="standard-basic" label="Film name" variant="standard" fullWidth={true} value={input} onChange={(e) => { setInput(e.target.value) }} onKeyDown={(e) => { handleSearch(e) }} />
      </div>
      {loading ? <CircularProgress /> : <div className="main-page__items">
        {movies.movies === null ? <div className='nothing-found'>Nothing found</div> : movies.movies.map((movie) => <>
          <Card raised={true} >
            <Link className='action-link' href={{ pathname: `/details`, query: { id: movie.imdbID }, }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image={movie.Poster}
                  alt={movie.Title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Title: {movie.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Year: {movie.Year}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardActions>
              <div className="favorite__wrapper" onClick={() => { handleFavorite(movie) }}>
                {movies.favorite.includes(movie.imdbID) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </div>
            </CardActions>
          </Card>
        </>)}
      </div>}
      <div className="pagination-wrapper">
        <Pagination count={100} color="primary" onChange={(e, value) => { handlePagination(e, value) }} />
      </div>
    </div>
  )
}

export default MainPage
