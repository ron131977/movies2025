// import type { Metadata } from "next"
// import { MovieCard } from "@/components/movie-card"
// import { hiddenGems } from "@/lib/data"

// export const metadata: Metadata = {
//   title: "Hidden Gems - Movie & Tv Show",
//   description: "Discover underrated and overlooked movies that deserve more attention.",
// }

// export default function HiddenGemsPage() {
//   return (
//     <div className="container py-10">
//       <h1 className="text-3xl font-bold mb-6">Hidden Gems</h1>
//       <p className="text-muted-foreground mb-8 max-w-3xl">
//         These are the movies that may have flown under the radar but are absolutely worth your time. From indie darlings
//         to overlooked masterpieces, our collection of hidden gems showcases films that deserve more recognition.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {hiddenGems.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
//         ))}
//       </div>
//     </div>
//   )
// }


'use client'

import { useState, useEffect } from "react"
import { MovieCard } from "@/components/movie-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const API_KEY = "be3e130c5ee08bf14bc9078514f1999a"

// Remove the export of 'metadata' from the client component.
export default function HiddenGemsPage() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // Fetch hidden gems using the same API as on the home page (top_rated)
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
  }, [])

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Hidden Gems</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        These are the movies that may have flown under the radar but are absolutely worth your time. From indie darlings
        to overlooked masterpieces, our collection of hidden gems showcases films that deserve more recognition.
      </p>

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
