// import type { Metadata } from "next"
// import { MovieCard } from "@/components/movie-card"
// import { trendingShows } from "@/lib/data"

// export const metadata: Metadata = {
//   title: "TV Shows - Movie & Tv Show",
//   description: "Browse our collection of trending TV shows with reviews, trailers, and more.",
// }

// export default function TVShowsPage() {
//   return (
//     <div className="container py-10">
//       <h1 className="text-3xl font-bold mb-6">TV Shows</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {trendingShows.map((show) => (
//           <MovieCard key={show.id} movie={show} showWatchLinks={true} />
//         ))}
//       </div>
//     </div>
//   )
// }


// 'use client'

// import { useState, useEffect } from "react"
// import { MovieCard } from "@/components/movie-card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// const API_KEY = "be3e130c5ee08bf14bc9078514f1999a"

// // Remove the export of 'metadata' from the client component.
// export default function TVShowsPage() {
//   const [shows, setShows] = useState([])

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setShows(data.results)
//       })
//   }, [])

//   return (
//     <div className="container py-10">
//       <h1 className="text-3xl font-bold mb-6">Trending TV Shows</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {shows.map((show) => (
//           <MovieCard key={show.id} movie={show} showWatchLinks={true} />
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

export default function TVShowsPage() {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`,
    fetcher,
    { refreshInterval: 1000 * 60 * 60 } // Revalidate every hour
  )

  const shows = data?.results || []

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Trending TV Shows</h1>

      {error && (
        <p className="text-red-500 text-center mb-4">
          Failed to load TV shows. Please try again later.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shows.map((show) => (
          <MovieCard key={show.id} movie={show} showWatchLinks={true} />
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
