import React from 'react'
import {Card } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Box = ({movie}) => {
  return (
    <div className="max-w-sm">
        <Link to={`/movies/${movie.id}`}>
            <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {movie.original_title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                   {
                    movie.overview.slice(0,200)
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
                
        </Link>
    </div>
  )
}

export default Box