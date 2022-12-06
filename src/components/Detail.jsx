import React, { useEffect } from 'react'
import {Card} from 'flowbite-react'
import { useParams } from 'react-router'
import { api, api_key } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedMovie, selectedMovie } from '../redux/actions/movies'
const Detail = () => {

  const { movieId } = useParams()
  const dispatch = useDispatch()

  const getMovie = async () => {
    const res = await api.get(`/movie/${movieId}?api_key=${api_key}`)
    dispatch(selectedMovie(res.data))
  }


  useEffect(() => {
    
    if(movieId)  getMovie()

    return () => dispatch(removeSelectedMovie({}))
  },[movieId])


  let movie = {}
  movie = useSelector(state => state.movieData.movie)

  return (
    <div className='container mx-auto'>
       {
        JSON.stringify(movie)  !== '{}' ?
        <div className="w-100">
        <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {movie.original_title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                   {
                    movie.overview
                   }
                </p>

                <div>
                <span className='inline mt-4 p-2 rounded-xl bg-gray-500 text-white'>
                  {
                    parseInt(movie.popularity) / 100
                  }
                </span>
                </div>
                
                </Card>
        </div>
        : <h1>Loading...</h1>
       }
    </div>
  )
}

export default Detail