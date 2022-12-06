import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {

    const navigate = useNavigate()

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center ">
        <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">404</h1>
        <div classNam="px-2 text-sm rounded rotate-12 absolute">
            Page Not Found
        </div>
        <button className="mt-5">
        <a
            onClick={() => navigate('/')}
            className="relative inline-block text-sm font-medium group bg-gray-700 text-gray-200  focus:outline-none focus:ring"
        >
            <span
            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5  group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>

            <span className  ="relative block px-8 py-3 order border-current">
            <router-link to="/">Go Home</router-link>
            </span>
        </a>
        </button>
    </main>
  )
}

export default NotFound