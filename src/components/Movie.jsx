import React from 'react'

import { useSelector } from 'react-redux'
import Box from './Box'
const Movie = () => {

    let movies = []
    movies = useSelector(state => state.movieData.movies)

  return (
    <div className='container mt-6 mx-auto'>
        <div className='grid  md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2'>
            {
                movies.length > 0 ?
                movies.map(movie => <Box key={movie.id} movie={movie} />)
                : <h1>Loading...</h1>
            }
        </div>

    </div>
  )
}

export default Movie