import setMovies from '@/store/actionCreators/movie/setMovies'
import { movieItem } from '@/types/movieItem'
import { IReducers } from '@/types/store/reducers'
import { fetchMovies } from '@/utils/fetchMovie'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, CircularProgress, TextField, Pagination } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
  useEffect(() => {
    setLoading(true)
    fetchMovies(searchInput, page).then((data) => {
      if (data !== undefined) {
        dispatch(setMovies({ data }))
      } else {
        setLoading(false)
      }
    }).then(() => setLoading(false))
  }, [page, searchInput])
  return (
    <div className='container'>
      <Head>
        <title>MainPage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-page__wrapper">
        <TextField id="standard-basic" label="Standard" variant="standard" value={input} onChange={(e) => { setInput(e.target.value) }} onKeyDown={(e) => { handleSearch(e) }} />
      </div>
      {loading ? <CircularProgress /> : <div className="main-page__items">
        {movies === null ? <div>Nothing found</div> : movies.movies.map((movie) => <>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={movie.Poster}
                alt={movie.Title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.Year}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href={{ pathname: `/details`, query: { id: movie.imdbID }, }}>
                More
              </Link>
            </CardActions>
          </Card>
        </>)}
      </div>}
      <Pagination count={100} color="primary" onChange={(e, value) => { handlePagination(e, value) }} />
    </div>
  )
}

export default MainPage
