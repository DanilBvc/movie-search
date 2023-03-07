import { movieItemFull } from '@/types/movieItem'
import { IReducers } from '@/types/store/reducers'
import { fetchMovieByID } from '@/utils/fecthMovieByID'
import { CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function DetailsComponent() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [currentMovie, setCurrentMovie] = useState<movieItemFull>()
  const { id } = router.query
  useEffect(() => {
    if (id !== undefined && !Array.isArray(id)) {
      setLoading(true)
      fetchMovieByID(id).then((data) => setCurrentMovie(data)).then(() => setLoading(false))
    }
  }, [])
  return (
    <>
      {loading && <CircularProgress />}
      <div>{currentMovie !== undefined ? <div>{currentMovie.Actors}</div> : null}
      </div>
    </>
  )
}

export default DetailsComponent
