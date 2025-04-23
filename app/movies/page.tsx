// import type { Metadata } from "next"
// import { MovieCard } from "@/components/movie-card"
// import { allMovies } from "@/lib/data"

// export const metadata: Metadata = {
//   title: "Movies - Movie & Tv Show",
//   description: "Browse our collection of the latest and greatest movies with reviews, trailers, and more.",
// }

// export default function MoviesPage() {
//   return (
//     <div className="container py-10">
//       <h1 className="text-3xl font-bold mb-6">Movies</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {allMovies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
//         ))}
//       </div>
//     </div>
//   )
// }

// Add the 'use client' directive to the top of your component.
// 'use client'

// import { useState, useEffect } from "react"
// import { MovieCard } from "@/components/movie-card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// const API_KEY = "be3e130c5ee08bf14bc9078514f1999a"

// // Remove the export of 'metadata' from the client component.
// export default function MoviesPage() {
//   const [movies, setMovies] = useState([])

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setMovies(data.results)
//       })
//   }, [])

//   return (
//     <div className="container py-10">
//       <h1 className="text-3xl font-bold mb-6">Movies</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
//         ))}
//       </div>

//       <div className="flex justify-center mt-8">
//         <Button asChild>
//           <Link href="/">Back to Home</Link>
//         </Button>
//       </div>
//     </div>
//   )
// }







'use client'

import useSWR from 'swr'
import { MovieCard } from '@/components/movie-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const API_KEY = 'be3e130c5ee08bf14bc9078514f1999a'
const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function MoviesPage() {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
    fetcher,
    { refreshInterval: 1000 * 60 * 60 } // Revalidate every hour
  )

  const movies = data?.results || []

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Trending Movies</h1>

      {error && (
        <p className="text-red-500 text-center mb-4">
          Failed to load movies. Please try again later.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}
