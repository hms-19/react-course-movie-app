import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { api, api_key } from '../api'
import { fetchMovies } from '../redux/actions/movies'
import Movie from './Movie'

const Home = () => {


  const dispatch = useDispatch()

  const getMovies = async () => {
    const res = await api.get(`/discover/movie?sort_by=popularity.desc&api_key=${api_key}`)
    dispatch(fetchMovies(res.data.results))
  }

  useEffect(() => {
    getMovies()
  },[])

  return (
    <div>
        <Movie />
    </div>
  )
}

export default Home