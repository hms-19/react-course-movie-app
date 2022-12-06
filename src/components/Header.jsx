import React from 'react'
import {Navbar, TextInput} from 'flowbite-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {api, api_key} from '../api'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../redux/actions/movies'

const Header = () => {

  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit =  async (e) => {
    e.preventDefault()

    if(name !== ''){
      const res = await api.get(`/search/movie?api_key=${api_key}&query=${name}`)

      dispatch(fetchMovies(res.data.results))
    }
    else{
      const res = await api.get(`/discover/movie?sort_by=popularity.desc&api_key=${api_key}`)
      dispatch(fetchMovies(res.data.results))
  
    }
  }

  return (
    <Navbar
    fluid={true}
    rounded={true}
    >
    <Link to='/'>
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      WEBHUB
      </span>
    </Link> 
    
    <form onSubmit={handleSubmit} className='flex items-center justify-center'> 
      <TextInput
        type="text"
        sizing="md"
        placeholder='Search by movie name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type='submit' className='p-2 rounded-lg text-white bg-gray-800'>Search</button>
    </form>
  
    </Navbar>
  )
}

export default Header