import Image from "next/image"
import { notFound } from "next/navigation"
import { Star, Clock, Calendar } from "lucide-react"
import { Suspense } from "react"

async function getMovieDetails(id: string) {
  // const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  const apiKey = "be3e130c5ee08bf14bc9078514f1999a";

  if (!apiKey) {
    throw new Error("TMDB API key is not set")
  }

  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=credits`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

async function getMovieTrailer(id: string) {
  // const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  const apiKey = "be3e130c5ee08bf14bc9078514f1999a";
  if (!apiKey) {
    throw new Error("TMDB API key is not set")//
  }
  // const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}`, {
  //   next: { revalidate: 3600 },
  // })
  const res = await fetch( `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}&first_air_date_year=2025`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) {
    return null
  }
  const data = await res.json()
  const trailer = data.results.find((video: any) => video.type === "Trailer")
  return trailer ? `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1` : null
}

export default async function MoviePage({ params }: { params: { id: string } }) {

  const movie = await getMovieDetails(params.id)
  const trailerUrl = await getMovieTrailer(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
       <h1 className="text-2xl font-bold mb-6"  style={{
             marginTop:"30px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            fontSize:"35px",
            textAlign: "center",
          }}> Movie 2025 - Tv Show Section.</h1>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <span>{movie.vote_average.toFixed(1)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-1" />
              <span>{movie.runtime} min</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-1" />
              <span>{new Date(movie.release_date).getFullYear()}</span>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{movie.overview}</p>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Genres</h2>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre: { id: number; name: string }) => (
                <span key={genre.id} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{
             marginTop:"30px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            fontSize:"35px",
            textAlign: "center",
          }}>Official Trailer</h2>
        <Suspense fallback={<div>Loading trailer...</div>}>
          <iframe
             width="100%"
             height="560"
            src={trailerUrl || ""}
            frameBorder="0"
            scrolling="0"
            allowFullScreen
            className="w-full aspect-video"
            style={{
              filter: "contrast(1.1) saturate(1.2) brightness(1.3) hue-rotate(0deg)"
            }}
          ></iframe>
        </Suspense>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4"style={{
             marginTop:"30px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            fontSize:"35px",
            textAlign: "center",
          }}>Watch Tv Show</h2>
        <iframe
          width="100%"
          height="560"
          src={`https://vidsrc.cc/v2/embed/tv/${params.id}`}
          frameBorder="0"
          scrolling="0"
          allowFullScreen
          className="w-full aspect-video"
          style={{
            filter: "contrast(1.1) saturate(1.2) brightness(1.3) hue-rotate(0deg)"
          }}
        ></iframe>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Cast</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movie.credits.cast.slice(0, 8).map((actor: { id: number; name: string; profile_path: string | null }) => (
            <div key={actor.id} className="text-center">
              <Image
                src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : "/placeholder.svg"}
                alt={actor.name}
                width={100}
                height={150}
                className="rounded-lg mx-auto mb-2"
              />
              <p className="text-sm">{actor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

