// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { MovieCard } from "@/components/movie-card"
// import { HeroSection } from "@/components/hero-section"
// import { featuredMovies, latestMovies, trendingShows, hiddenGems } from "@/lib/data"

// export default function Home() {
//   return (
//     <div className="flex flex-col gap-10 pb-10">
//       <HeroSection />

//       <section className="container">
//         <Tabs defaultValue="latest" className="w-full">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-bold">Discover</h2>
//             <TabsList>
//               <TabsTrigger value="latest">Latest Movies</TabsTrigger>
//               <TabsTrigger value="trending">Trending Series</TabsTrigger>
//               <TabsTrigger value="hidden">Hidden Gems</TabsTrigger>
//             </TabsList>
//           </div>

//           <TabsContent value="latest" className="mt-0">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {latestMovies.map((movie) => (
//                 <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
//               ))}
//             </div>
//             <div className="flex justify-center mt-8">
//               <Button asChild>
//                 <Link href="/movies">View All Movies</Link>
//               </Button>
//             </div>
//           </TabsContent>

//           <TabsContent value="trending" className="mt-0">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {trendingShows.map((show) => (
//                 <MovieCard key={show.id} movie={show} showWatchLinks={true} />
//               ))}
//             </div>
//             <div className="flex justify-center mt-8">
//               <Button asChild>
//                 <Link href="/tv-shows">View All TV Shows</Link>
//               </Button>
//             </div>
//           </TabsContent>

//           <TabsContent value="hidden" className="mt-0">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {hiddenGems.map((movie) => (
//                 <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
//               ))}
//             </div>
//             <div className="flex justify-center mt-8">
//               <Button asChild>
//                 <Link href="/hidden-gems">View All Hidden Gems</Link>
//               </Button>
//             </div>
//           </TabsContent>
//         </Tabs>
//       </section>

//       <section className="container">
//         <h2 className="text-2xl font-bold mb-6">Featured Reviews</h2>
//         <div className="grid grid-co  ls-1 md:grid-cols-2 gap-6">
//           {featuredMovies.slice(0, 2).map((movie) => (
//             <Card key={movie.id} className="overflow-hidden">
//               <CardContent className="p-0">
//                 <div className="flex flex-col md:flex-row">
//                   <div className="relative w-full md:w-1/3 aspect-[2/3]">
//                     <Image src={movie.poster || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
//                   </div>
//                   <div className="p-6 md:w-2/3">
//                     <div className="flex items-center gap-2 mb-2">
//                       <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
//                         {movie.rating}/10
//                       </span>
//                       <span className="text-xs text-muted-foreground">
//                         {movie.year} • {movie.genre.split(",")[0]}
//                       </span>
//                     </div>
//                     <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
//                     <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{movie.synopsis}</p>
//                     <Button asChild size="sm">
//                       <Link href={`/movie/${movie.id}`}>Read Review</Link>
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//         <div className="flex justify-center mt-8">
//           <Button asChild variant="outline">
//             <Link href="/reviews">View All Reviews</Link>
//           </Button>
//         </div>
//       </section>

//       <section className="bg-muted py-16">
//         <div className="container">
//           <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
//             <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
//             <p className="text-muted-foreground mb-6">
//               Get updates on the latest movies, exclusive reviews, and recommendations delivered straight to your inbox.
//             </p>
//             <div className="flex w-full max-w-md gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//               />
//               <Button>Subscribe</Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { MovieCard } from "@/components/movie-card"
// import { HeroSection } from "@/components/hero-section"

// const API_KEY = "be3e130c5ee08bf14bc9078514f1999a"

// export default function Home() {
//   const [latestMovies, setLatestMovies] = useState([])
//   const [latestShows, setLatestShows] = useState([])
//   const [hiddenGems, setHiddenGems] = useState([])

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
//       .then(res => res.json())
//       .then(data => setLatestMovies(data.results))

//     fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
//       .then(res => res.json())
//       .then(data => setLatestShows(data.results))

//     // For hidden gems, maybe use a different endpoint or filtered data
//     fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
//       .then(res => res.json())
//       .then(data => setHiddenGems(data.results))
//   }, [])

//   return (
//     <div className="flex flex-col gap-10 pb-10">
//       <HeroSection />

//       <section className="container">
//         <Tabs defaultValue="latest" className="w-full">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-bold">Discover</h2>
//             <TabsList>
//               <TabsTrigger value="latest">Latest Movies</TabsTrigger>
//               <TabsTrigger value="shows">Trending Shows</TabsTrigger>
//               <TabsTrigger value="hidden">Hidden Gems</TabsTrigger>
//             </TabsList>
//           </div>

//           <TabsContent value="latest" className="mt-0">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {latestMovies.map(movie => (
//                 <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
//               ))}
//             </div>
//             <div className="flex justify-center mt-8">
//               <Button asChild>
//                 <Link href="/movies">View All Movies</Link>
//               </Button>
//             </div>
//           </TabsContent>

//           <TabsContent value="shows" className="mt-0">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {latestShows.map(show => (
//                 <MovieCard key={show.id} movie={show} showWatchLinks={true} />
//               ))}
//             </div>
//             <div className="flex justify-center mt-8">
//               <Button asChild>
//                 <Link href="/tv-shows">View All TV Shows</Link>
//               </Button>
//             </div>
//           </TabsContent>

//           <TabsContent value="hidden" className="mt-0">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {hiddenGems.map(movie => (
//                 <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
//               ))}
//             </div>
//             <div className="flex justify-center mt-8">
//               <Button asChild>
//                 <Link href="/hidden-gems">View All Hidden Gems</Link>
//               </Button>
//             </div>
//           </TabsContent>
//         </Tabs>
//       </section>
//     </div>
//   )
// }

// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { MovieCard } from "@/components/movie-card"
// import { HeroSection } from "@/components/hero-section"

// const API_KEY = "be3e130c5ee08bf14bc9078514f1999a"

// export default function Home() {
//   const [latestMovies, setLatestMovies] = useState([])
//   const [latestShows, setLatestShows] = useState([])
//   const [hiddenGems, setHiddenGems] = useState([])

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
//       .then(res => res.json())
//       .then(data => {
//         const moviesWithType = data.results.map(m => ({
//           ...m,
//           media_type: "movie"
//         }))
//         setLatestMovies(moviesWithType)
//       })

//     fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
//       .then(res => res.json())
//       .then(data => {
//         const showsWithType = data.results.map(s => ({
//           ...s,
//           media_type: "tv"
//         }))
//         setLatestShows(showsWithType)
//       })

//     fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
//       .then(res => res.json())
//       .then(data => {
//         const gemsWithType = data.results.map(m => ({
//           ...m,
//           media_type: "movie"
//         }))
//         setHiddenGems(gemsWithType)
//       })
//   }, [])

//   return (
//     <div className="flex flex-col gap-10 pb-10">
//       <HeroSection />

//       <section className="container">
//         <Tabs defaultValue="latest" className="w-full">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-bold">Discover</h2>
//             <TabsList>
//               <TabsTrigger value="latest">Latest Movies</TabsTrigger>
//               <TabsTrigger value="shows">Trending Shows</TabsTrigger>
//               <TabsTrigger value="hidden">Hidden Gems</TabsTrigger>
//             </TabsList>
//           </div>

//           <TabsContent value="latest" className="mt-0">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {latestMovies.map(movie => (
//                 <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
//               ))}
//             </div>
//             <div className="flex justify-center mt-8">
//               <Button asChild>
//                 <Link href="/movies">View All Movies</Link>
//               </Button>
//             </div>
//           </TabsContent>

//           <TabsContent value="shows" className="mt-0">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {latestShows.map(show => (
//                 <MovieCard key={show.id} movie={show} showWatchLinks={true} />
//               ))}
//             </div>
//             <div className="flex justify-center mt-8">
//               <Button asChild>
//                 <Link href="/tv-shows">View All TV Shows</Link>
//               </Button>
//             </div>
//           </TabsContent>

//           <TabsContent value="hidden" className="mt-0">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {hiddenGems.map(movie => (
//                 <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
//               ))}
//             </div>
//             <div className="flex justify-center mt-8">
//               <Button asChild>
//                 <Link href="/hidden-gems">View All Hidden Gems</Link>
//               </Button>
//             </div>
//           </TabsContent>
//         </Tabs>
//       </section>
//     </div>
//   )
// }



















// "use client"

// import useSWR from "swr"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { MovieCard } from "@/components/movie-card"
// import { HeroSection } from "@/components/hero-section"

// const API_KEY = "be3e130c5ee08bf14bc9078514f1999a"
// const fetcher = (url: string) => fetch(url).then(res => res.json())

// export default function Home() {
//   const { data: latestMoviesData } = useSWR(
//     `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
//     fetcher,
//     { refreshInterval: 1000 * 60 * 60 } // refresh every 1 hour
//   )

//   const { data: latestShowsData } = useSWR(
//     `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
//     fetcher,
//     { refreshInterval: 1000 * 60 * 60 }
//   )

//   const { data: hiddenGemsData } = useSWR(
//     `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
//     fetcher,
//     { refreshInterval: 1000 * 60 * 60 }
//   )

//   const latestMovies = latestMoviesData?.results?.map(m => ({ ...m, media_type: "movie" })) || []
//   const latestShows = latestShowsData?.results?.map(s => ({ ...s, media_type: "tv" })) || []
//   const hiddenGems = hiddenGemsData?.results?.map(m => ({ ...m, media_type: "movie" })) || []

//   return (
//     <div className="flex flex-col gap-10 pb-10">
//       <HeroSection />

//       <section className="container">
//         <Tabs defaultValue="latest" className="w-full">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-bold">Discover</h2>
//             <TabsList>
//               <TabsTrigger value="latest">Latest Movies</TabsTrigger>
//               <TabsTrigger value="shows">Trending Shows</TabsTrigger>
//               <TabsTrigger value="hidden">Hidden Gems</TabsTrigger>
//             </TabsList>
//           </div>

//           <TabsContent value="latest">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {latestMovies.map(movie => (
//                 <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
//               ))}
//             </div>
//             <div className="flex justify-center mt-8">
//               <Button asChild>
//                 <Link href="/movies">View All Movies</Link>
//               </Button>
//             </div>
//           </TabsContent>

//           <TabsContent value="shows">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {latestShows.map(show => (
//                 <MovieCard key={show.id} movie={show} showWatchLinks={true} />
//               ))}
//             </div>
//             <div className="flex justify-center mt-8">
//               <Button asChild>
//                 <Link href="/tv-shows">View All TV Shows</Link>
//               </Button>
//             </div>
//           </TabsContent>

//           <TabsContent value="hidden">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {hiddenGems.map(movie => (
//                 <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
//               ))}
//             </div>
//             <div className="flex justify-center mt-8">
//               <Button asChild>
//                 <Link href="/hidden-gems">View All Hidden Gems</Link>
//               </Button>
//             </div>
//           </TabsContent>
//         </Tabs>
//       </section>
//     </div>
//   )
// }

















"use client"

import useSWR from "swr"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MovieCard } from "@/components/movie-card"
import { HeroSection } from "@/components/hero-section"

const API_KEY = "be3e130c5ee08bf14bc9078514f1999a"
const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Home() {
  // Fetch trending movies of the day (replace now_playing)
  const { data: trendingMoviesData } = useSWR(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
    fetcher,
    { refreshInterval: 1000 * 60 * 60 } // refresh every 1 hour
  )

  // Fetch trending TV shows of the day
  const { data: trendingShowsData } = useSWR(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`,
    fetcher,
    { refreshInterval: 1000 * 60 * 60 }
  )

  // Fetch hidden gems (top rated movies)
  const { data: hiddenGemsData } = useSWR(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    fetcher,
    { refreshInterval: 1000 * 60 * 60 }
  )

  // Mapping the results for movies and shows
  const trendingMovies = trendingMoviesData?.results?.map(m => ({ ...m, media_type: "movie" })) || []
  const trendingShows = trendingShowsData?.results?.map(s => ({ ...s, media_type: "tv" })) || []
  const hiddenGems = hiddenGemsData?.results?.map(m => ({ ...m, media_type: "movie" })) || []

  return (
    <div className="flex flex-col gap-10 pb-10">
      <HeroSection />

      <section className="container">
        <Tabs defaultValue="latest" className="w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Discover</h2>
            <TabsList>
              <TabsTrigger value="latest">Trending Movies</TabsTrigger>
              <TabsTrigger value="shows">Trending TV Shows</TabsTrigger>
              <TabsTrigger value="hidden">Hidden Gems</TabsTrigger>
            </TabsList>
          </div>

          {/* Trending Movies */}
          <TabsContent value="latest">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {trendingMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/movies">View All Movies</Link>
              </Button>
            </div>
          </TabsContent>

          {/* Trending TV Shows */}
          <TabsContent value="shows">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {trendingShows.map(show => (
                <MovieCard key={show.id} movie={show} showWatchLinks={true} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/tv-shows">View All TV Shows</Link>
              </Button>
            </div>
          </TabsContent>

          {/* Hidden Gems (Top Rated Movies) */}
          <TabsContent value="hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {hiddenGems.map(movie => (
                <MovieCard key={movie.id} movie={movie} showWatchLinks={true} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/hidden-gems">View All Hidden Gems</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
