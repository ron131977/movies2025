// import MovieCard from "@/components/movie-card"
// import TvCard from "@/components/tv-card"
// import Loading from "@/components/loading"

// import { Suspense } from "react"

// async function getTrendingMovies() {
//   const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY

//   if (!apiKey) {
//     throw new Error("TMDB API key is not set")
//   }

//   try {
//     const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=2025`, {
//       next: { revalidate: 3600 },
//     })

//     if (!res.ok) {
//       throw new Error(`Failed to fetch movies: ${res.status} ${res.statusText}`)
//     }

//     const data = await res.json()
//     return data.results
//   } catch (error) {
//     console.error("Error fetching trending movies:", error)
//     throw error
//   }
// }

// async function getTrendingTVShows() {
//   const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY

//   if (!apiKey) {
//     throw new Error("TMDB API key is not set")
//   }

//   try {
//     const res = await fetch( `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&first_air_date_year=2025`, {
//       next: { revalidate: 3600 },
//     })

//     if (!res.ok) {
//       throw new Error(`Failed to fetch TV shows: ${res.status} ${res.statusText}`)
//     }

//     const data = await res.json()
//     return data.results
//   } catch (error) {
//     console.error("Error fetching trending TV shows:", error)
//     throw error
//   }
// }

// export default async function Home() {
//   let movies = []
//   let tvShows = []
//   let error = null

//   try {
//     movies = await getTrendingMovies()
//     tvShows = await getTrendingTVShows()
//   } catch (e) {
//     error = e
//   }

//   return (
    
//     <Suspense fallback={<Loading />}>
//         <h1 className="text-2xl font-bold mb-6"  style={{
//              marginTop:"30px",
//             fontFamily: "Poppins, sans-serif",
//             fontWeight: "bold",
//             fontSize:"35px",
//             textAlign: "center",
//           }}> Movie 2025 </h1>
//       <div className="p-8">
//         <h2 className="text-2xl font-bold mb-6">Trending Movies</h2>
//         {error ? (
//           <div className="text-center text-red-500">
//             <p>Error: {error.message}</p>
//           </div>
//         ) : movies.length > 0 ? (
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
//             {movies.map((movie: any) => (
//               <MovieCard
//                 key={movie.id}
//                 id={movie.id}
//                 title={movie.title}
//                 posterPath={movie.poster_path}
//                 releaseDate={movie.release_date}
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center text-gray-400">
//             <p>No movies found. Please try again later.</p>
//           </div>
//         )}

//         <div className="mt-8">
//           <h1 className="text-2xl font-bold mb-6">Trending TV Shows</h1>
//           {error ? (
//             <div className="text-center text-red-500">
//               <p>Error: {error.message}</p>
//             </div>
//           ) : tvShows.length > 0 ? (
//             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
//               {tvShows.map((tvShow: any) => (
//                 <TvCard
//                   key={tvShow.id}
//                   id={tvShow.id}
//                   title={tvShow.name}
//                   posterPath={tvShow.poster_path}
//                   releaseDate={tvShow.first_air_date}
//                 />
//               ))}
//             </div>
//           ) : (
//             <div className="text-center text-gray-400">
//               <p>No TV shows found. Please try again later.</p>
//             </div>
//           )}
//         </div>

//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-2">Featured Trailer</h3>
//               <iframe
//                 width="640"
//                 height="360"
//                 src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                 frameBorder="0"
//                 scrolling="0"
//                 allowFullScreen
//                 className="w-full aspect-video"
//               ></iframe>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">Additional Content</h3>
//               <iframe
//                 width="640"
//                 height="360"
//                 src={movies.length > 0 ? `https://vidsrc.cc/v2/embed/movie/${movies[0].id}` : null}
//                 frameBorder="0"
//                 scrolling="0"
//                 allowFullScreen
//                 className="w-full aspect-video"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Suspense>
//   )
// }

import MovieCard from "@/components/movie-card"
import TvCard from "@/components/tv-card"
import Loading from "@/components/loading"

import { Suspense } from "react"

// Helper to fetch movies
async function getTrendingMovies() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Graceful handling if the key is missing
  if (!apiKey) {
    console.error("TMDB API key is not set. Please check your environment variables.")
    return []
  }

  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=2025`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch movies: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    return data.results
  } catch (error) {
    console.error("Error fetching trending movies:", error)
    throw error
  }
}

// Helper to fetch TV shows
async function getTrendingTVShows() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Graceful handling if the key is missing
  if (!apiKey) {
    console.error("TMDB API key is not set. Please check your environment variables.")
    return []
  }

  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&first_air_date_year=2025`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch TV shows: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    return data.results
  } catch (error) {
    console.error("Error fetching trending TV shows:", error)
    throw error
  }
}

export default async function Home() {
  let movies = []
  let tvShows = []
  let error = null

  try {
    movies = await getTrendingMovies()
    tvShows = await getTrendingTVShows()
  } catch (e) {
    error = e
  }

  return (
    <Suspense fallback={<Loading />}>
      <h1
        className="text-2xl font-bold mb-6"
        style={{
          marginTop: "30px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
          fontSize: "35px",
          textAlign: "center",
        }}
      >
        Movie 2025
      </h1>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Trending Movies</h2>
        {error ? (
          <div className="text-center text-red-500">
            <p>Error: {error.message}</p>
          </div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {movies.map((movie: any) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                releaseDate={movie.release_date}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400">
            <p>No movies found. Please try again later.</p>
          </div>
        )}

        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-6">Trending TV Shows</h1>
          {error ? (
            <div className="text-center text-red-500">
              <p>Error: {error.message}</p>
            </div>
          ) : tvShows.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {tvShows.map((tvShow: any) => (
                <TvCard
                  key={tvShow.id}
                  id={tvShow.id}
                  title={tvShow.name}
                  posterPath={tvShow.poster_path}
                  releaseDate={tvShow.first_air_date}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400">
              <p>No TV shows found. Please try again later.</p>
            </div>
          )}
        </div>

        <div className="mt-8">
        
            <div>
        
          </div>
        </div>
      </div>
    </Suspense>
  )
}
