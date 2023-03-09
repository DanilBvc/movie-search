import { movieItemFull } from '@/types/movieItem'
import { fetchMovieByID } from '@/utils/fecthMovieByID'
import { CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

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
  }, [id])
  return (
    <>
      {loading && <CircularProgress />}
      {(currentMovie !== undefined && currentMovie.Response === 'False') ? <div className='details-error'>Something went wrong...</div> : null}
      <div>{currentMovie !== undefined && currentMovie.Response === 'True' ? <div className="details__wrapper">
        <div className="details__up">
          <div className="details__up-poster">
            <img src={currentMovie?.Poster} alt={currentMovie.Title} />
          </div>
          <div className="details__up-movie">
            <h2>{currentMovie?.Title}</h2>
            <div className="details__up-table">
              <div className="details__up-table-item">
                <span className='details-up-type'>Genre</span> {currentMovie?.Genre}
              </div>
              <div className="details__up-table-item">
                <span className='details-up-type'>Released</span> {currentMovie?.Released}
              </div>
              <div className="details__up-table-item">
                <span className='details-up-type'>Rating</span> {currentMovie?.Rated}
              </div>
              <div className="details__up-table-item">
                <span className='details-up-type'>Language</span> {currentMovie?.Language}
              </div>
              <div className="details__up-table-item">
                <span className='details-up-type'>Awards</span>: {currentMovie?.Awards}
              </div>
              <div className="details__up-table-item">
                <span className='details-up-type'>Country</span>: {currentMovie?.Country}
              </div>
              <div className="details__up-table-item">
                <span className='details-up-type'>Direct</span>: {currentMovie?.Director}
              </div>
              <div className="details__up-table-item">
                <span className='details-up-type'>Time</span>: {currentMovie?.Runtime}
              </div>
              <div className="details__up-table-item">
                <span className='details-up-type'>Metascore</span>: {currentMovie?.Metascore}
              </div>
            </div>
          </div>
        </div>
        <div className="details__down">
          <div className='details__down-title'>Plot</div>
          {currentMovie.Plot}
        </div>
      </div> : <div>Nothing found</div>}
      </div>
    </>
  )
}

export default DetailsComponent
