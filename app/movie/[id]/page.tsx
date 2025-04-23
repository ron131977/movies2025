// import Link from 'next/link'
// import Image from 'next/image'
// import { notFound } from 'next/navigation'
// import { Button } from '@/components/ui/button'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import YoutubePlayer from '@/components/YoutubePlayer'
// import { Star, Play, ExternalLink } from 'lucide-react'
// import { allMovies } from '@/lib/data'
// import { MovieCard } from '@/components/movie-card'

// interface MoviePageProps {
//   params: {
//     id: string
//   }
// }

// export function generateMetadata ({ params }: MoviePageProps) {
//   const movie = allMovies.find(movie => movie.id === params.id)

//   if (!movie) {
//     return {
//       title: 'Movie Not Found',
//       description: 'The requested movie could not be found.'
//     }
//   }

//   return {
//     title: `${movie.title} (${movie.year}) - Movie & Tv Show`,
//     description: movie.synopsis,
//     openGraph: {
//       title: `${movie.title} (${movie.year}) - Movie & Tv Show`,
//       description: movie.synopsis,
//       type: 'article'
//     }
//   }
// }

// export default function MoviePage ({ params }: MoviePageProps) {
//   const movie = allMovies.find(movie => movie.id === params.id)

//   if (!movie) {
//     notFound()
//   }

//   // Similar movies (just using other featured movies for demo)
//   const similarMovies = allMovies
//     .filter(
//       m =>
//         m.id !== movie.id && m.genre.split(',')[0] === movie.genre.split(',')[0]
//     )
//     .slice(0, 4)

//   return (
//     <div className='flex flex-col gap-10 pb-10'>
//       <section className='relative'>
//         <div className='absolute inset-0 bg-gradient-to-t from-background to-transparent z-10' />
//         <div
//           className='relative h-[50vh] bg-cover bg-center md-10'
//           style={{
//             backgroundImage: `url('${movie.backimage || '/placeholder.svg'}')`,
//             MarginBottom: '20px'
//           }}
//         />

//         <div className='container relative z-20 -mt-40'>
//           <div className='flex flex-col md:flex-row gap-8'>
//             <div className='relative w-full max-w-[300px] aspect-[2/3] mx-auto md:mx-0'>
//               <Image
//                 src={movie.poster || '/placeholder.svg'}
//                 alt={movie.title}
//                 fill
//                 quality={90}
//                 className='object-cover rounded-lg shadow-lg'
//                 style={{
//                   filter:
//                     'contrast(1.3) saturate(1.3) brightness(1.05) hue-rotate(10deg)'
//                 }}
//                 priority
//               />
//             </div>
//             <div className='flex-1'>
//               <h1 className='text-3xl md:text-4xl font-bold mb-2'>
//                 {movie.title}
//               </h1>
//               <div className='flex items-center gap-2 mb-4 flex-wrap'>
//                 <span className='text-sm text-muted-foreground'>
//                   {movie.year}
//                 </span>
//                 <span className='text-sm text-muted-foreground'>•</span>
//                 <span className='text-sm text-muted-foreground'>
//                   {movie.genre}
//                 </span>
//               </div>
//               <div className='flex items-center gap-2 mb-6'>
//                 <div className='flex items-center'>
//                   <Star className='h-5 w-5 text-yellow-500 fill-yellow-500' />
//                   <span className='ml-1 font-medium'>{movie.rating}/10</span>
//                 </div>
//               </div>
//               <p
//                 className='text-muted-foreground mb-6'
//                 style={{ marginTop: '60px' }}
//               >
//                 {movie.synopsis}
//               </p>

//               <div className='mb-6'>
//                 <p className='font-medium mb-1'>
//                   Director:{' '}
//                   <span className='text-muted-foreground'>
//                     {movie.director}
//                   </span>
//                 </p>
//                 <p className='font-medium mb-1'>
//                   Cast:{' '}
//                   <span className='text-muted-foreground'>
//                     {movie.cast.map(actor => actor.name).join(', ')}
//                   </span>
//                 </p>{' '}
//               </div>
//               <div className='flex flex-wrap gap-4'>
//                 <Button asChild>
//                   <Link href='#trailer'>
//                     <Play className='mr-2 h-5 w-5' /> Watch Trailer
//                   </Link>
//                 </Button>
//                 <div className='flex flex-col gap-2 w-full mt-4'>
//                   <h3 className='font-medium'>Where to Watch:</h3>
//                   <div className='flex flex-wrap gap-2'>
//                     {movie.whereToWatch.map(platform => (
//                       <Button
//                         key={platform.name}
//                         variant='outline'
//                         size='sm'
//                         asChild
//                       >
//                         <Link
//                           href={platform.url}
//                           target='_blank'
//                           rel='noopener noreferrer'
//                         >
//                           {platform.name}{' '}
//                           <ExternalLink className='ml-2 h-4 w-4' />
//                         </Link>
//                       </Button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className='container' id='trailer'>
//         <h2 className='text-2xl font-bold mb-6'>Trailer</h2>
//         <YoutubePlayer videoId={movie.trailerId} />
//         {/* <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
//           <iframe
//             src={movie.trailerUrl}
//             title={`${movie.title} Trailer`}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="absolute top-0 left-0 w-full h-full"
//           ></iframe>
//         </div> */}
//       </section>

//       <section className='container'>
//         <Tabs defaultValue='about' className='w-full'>
//           <TabsList className='mb-6'>
//             <TabsTrigger value='about'>About</TabsTrigger>
//             <TabsTrigger value='reviews'>Reviews</TabsTrigger>
//             <TabsTrigger value='cast'>Cast & Crew</TabsTrigger>
//           </TabsList>

//           <TabsContent value='about' className='mt-0'>
//             <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
//               <div className='md:col-span-2'>
//                 <h3 className='text-xl font-bold mb-4'>Synopsis</h3>
//                 <p className='text-muted-foreground mb-6'>{movie.synopsis}</p>
//               </div>
//               <div>
//                 <h3 className='text-xl font-bold mb-4'>Movie Details</h3>
//                 <div className='space-y-4'>
//                   <div>
//                     <p className='font-medium'>Release Date</p>
//                     <p className='text-muted-foreground'>{movie.releaseDate}</p>
//                   </div>
//                   <div>
//                     <p className='font-medium'>Director</p>
//                     <p className='text-muted-foreground'>{movie.director}</p>
//                   </div>
//                   <div>
//                     <p className='font-medium'>Genre</p>
//                     <p className='text-muted-foreground'>{movie.genre}</p>
//                   </div>
//                   <div>
//                     <p className='font-medium'>Runtime</p>
//                     <p className='text-muted-foreground'>{movie.runtime}</p>
//                   </div>
//                   <div>
//                     <p className='font-medium'>Language</p>
//                     <p className='text-muted-foreground'>{movie.language}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </TabsContent>

//           <TabsContent value='reviews' className='mt-0'>

//             {movie.reviewId ? (
//               <div style={{ width: '100%', maxWidth: '100%', height: 'auto' }}>
//                 <YoutubePlayer videoId={movie.reviewId} />
//               </div>
//             ) : null}
//             <div className='space-y-8'>
//               {movie.reviews.map((review, index) => (
//                 <div key={index} className='p-6 border rounded-lg'>
//                   <div className='flex items-center gap-4 mb-4'>
//                     <div className='w-12 h-12 rounded-full bg-muted flex items-center justify-center'>
//                       <span className='font-bold'>{review.authorInitials}</span>
//                     </div>
//                     <div>
//                       <p className='font-medium'>{review.author}</p>
//                       <div className='flex items-center'>
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`h-4 w-4 ${
//                               i < review.rating
//                                 ? 'text-yellow-500 fill-yellow-500'
//                                 : 'text-muted'
//                             }`}
//                           />
//                         ))}
//                         <span className='ml-2 text-sm text-muted-foreground'>
//                           {review.date}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <p className='text-muted-foreground'>{review.content}</p>
//                 </div>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value='cast' className='mt-0'>
//             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
//               {movie.cast.map((actor, idx) => (
//                 <div key={actor.name || idx} className='text-center'>
//                   <div className='relative w-full aspect-square overflow-hidden rounded-lg mb-2'>
//                     <Image
//                       src={actor.image}
//                       alt={actor.name}
//                       fill
//                       quality={90}
//                       className='object-cover rounded-lg'
//                       style={{
//                         filter:
//                           'contrast(1.3) saturate(1.3) brightness(1.05) hue-rotate(10deg)'
//                       }}
//                     />
//                   </div>
//                   <p className='font-medium'>{actor.name}</p>
//                   <p className='text-sm text-muted-foreground'>
//                     {actor.character}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>
//       </section>

//       <section className='container'>
//         <h2 className='text-2xl font-bold mb-6'>You May Also Like</h2>
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
//           {similarMovies.map(movie => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }

// app/movies/[id]/page.tsx

import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import YoutubePlayer from '@/components/YoutubePlayer'
import { Star, Play, ExternalLink } from 'lucide-react'

const TMDB_API_KEY = process.env.TMDB_API_KEY // Place your key in .env

async function getMovieDetails (id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos,credits,reviews`
  )
  if (!res.ok) return null
  return res.json()
}

export async function generateMetadata ({ params }: { params: { id: string } }) {
  const movie = await getMovieDetails(params.id)
  if (!movie) {
    return {
      title: 'Movie Not Found',
      description: 'The requested movie could not be found.'
    }
  }
  return {
    title: `${movie.title} (${new Date(
      movie.release_date
    ).getFullYear()}) - Movie & TV Show`,
    description: movie.overview,
    openGraph: {
      title: `${movie.title} (${new Date(
        movie.release_date
      ).getFullYear()}) - Movie & TV Show`,
      description: movie.overview
    }
  }
}

export default async function MoviePage ({
  params
}: {
  params: { id: string }
}) {
  const movie = await getMovieDetails(params.id)
  if (!movie) return notFound()

  const trailer = movie.videos?.results?.find(
    (v: any) => v.type === 'Trailer' && v.site === 'YouTube'
  )
  const cast = movie.credits?.cast?.slice(0, 10) || []
  const reviews = movie.reviews?.results?.slice(0, 3) || []

  return (
    
    <div className='flex flex-col gap-10 pb-10'>
    <div className="container pt-6">
      <Link
        href="/movies"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
      >
        ← Back to Movies
      </Link>
    </div>
      <section className='relative'>
        <div className='absolute inset-0 bg-gradient-to-t from-background to-transparent z-10' />
        <div
          className='relative h-[50vh] bg-cover bg-center'
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          }}
        />
        <div className='container relative z-20 -mt-40'>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='relative w-full max-w-[300px] aspect-[2/3] mx-auto md:mx-0'>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                fill
                quality={90}
                className='object-cover rounded-lg shadow-lg'
                priority
                style={{
                  filter:
                    'contrast(1.3) saturate(1.3) brightness(1.05) hue-rotate(10deg)'
                }}
              />
            </div>
            <div className='flex-1'>
              <h1 className='text-3xl md:text-4xl font-bold mb-2'>
                {movie.title}
              </h1>
              <div className='flex items-center gap-2 mb-4 flex-wrap'>
                <span className='text-sm text-muted-foreground'>
                  {new Date(movie.release_date).getFullYear()}
                </span>
                <span className='text-sm text-muted-foreground'>•</span>
                <span className='text-sm text-muted-foreground'>
                  {movie.genres.map((g: any) => g.name).join(', ')}
                </span>
              </div>
              <div className='flex items-center gap-2 mb-6'>
                <Star className='h-5 w-5 text-yellow-500 fill-yellow-500' />
                <span className='ml-1 font-medium'>
                  {movie.vote_average.toFixed(1)}/10
                </span>
              </div>
              <p
                className='text-muted-foreground mb-6'
                style={{ marginTop: '60px' }}
              >
                {movie.overview}
              </p>
              <div className='mb-6'>
                <p className='font-medium mb-1'>
                  Director:{' '}
                  <span className='text-muted-foreground'>
                    {
                      movie.credits.crew.find((c: any) => c.job === 'Director')
                        ?.name
                    }
                  </span>
                </p>
                <p className='font-medium mb-1'>
                  Cast:{' '}
                  <span className='text-muted-foreground'>
                    {cast.map((a: any) => a.name).join(', ')}
                  </span>
                </p>
              </div>
              {trailer && (
                <Button asChild>
                  <Link href='#trailer'>
                    <Play className='mr-2 h-5 w-5' /> Watch Trailer
                  </Link>
                </Button>
              )}

              <div className='mt-6'>
                <p className='text-lg mb-2 font-bold'>Where to Watch:</p>
                <div className='flex flex-wrap gap-2'>
                  {[
                    {
                      name: 'Justwatch Free',
                      url: `https://justwatchfree.vercel.app/movie/${params.id}`
                    },
                    {
                      name: 'Video Stream Hub',
                      url: `https://videostreamhub.vercel.app/movie/${params.id}`
                    },
                    {
                      name: 'Tiny Movie Zone',
                      url: `https://tinymoviezone.vercel.app/movie/${params.id}`
                    }
                  ].map(platform => (
                    <Button
                      key={platform.name}
                      variant='secondary'
                      size='sm'
                      asChild
                    >
                      <Link
                        href={platform.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center group border-2 border-transparent transition-all duration-300 p-2 hover:border-gray-400 hover:shadow-lg hover:bg-gray-100'
                      >
                        {platform.name}
                        <ExternalLink className='ml-2 h-3 w-3 transition-transform duration-200 group-hover:scale-110' />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {trailer && (
        <section className='container' id='trailer'>
          <h2 className='text-2xl font-bold mb-6'>Trailer</h2>
          <YoutubePlayer videoId={trailer.key} />
        </section>
      )}

      <section className='container'>
        <Tabs defaultValue='about'>
          <TabsList className='mb-6'>
            <TabsTrigger value='about'>About</TabsTrigger>
            <TabsTrigger value='reviews'>Reviews</TabsTrigger>
            <TabsTrigger value='cast'>Cast & Crew</TabsTrigger>
          </TabsList>

          <TabsContent value='about'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='md:col-span-2'>
                <h3 className='text-xl font-bold mb-4'>Synopsis</h3>
                <p className='text-muted-foreground mb-6'>{movie.overview}</p>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-4'>Movie Details</h3>
                <div className='space-y-4'>
                  <div>
                    <p className='font-medium'>Release Date</p>
                    <p className='text-muted-foreground'>
                      {movie.release_date}
                    </p>
                  </div>
                  <div>
                    <p className='font-medium'>Runtime</p>
                    <p className='text-muted-foreground'>
                      {movie.runtime} minutes
                    </p>
                  </div>
                  <div>
                    <p className='font-medium'>Language</p>
                    <p className='text-muted-foreground'>
                      {movie.original_language.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value='reviews'>
            <div className='space-y-8'>
              {reviews.map((review: any) => (
                <div key={review.id} className='p-6 border rounded-lg'>
                  <p className='font-medium mb-2'>{review.author}</p>
                  <p className='text-muted-foreground'>{review.content}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value='cast'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
              {cast.map((actor: any) => (
                <div key={actor.id} className='text-center'>
                  <Image
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={actor.name}
                    width={120}
                    height={180}
                    quality={90}
                    className='rounded-md mx-auto mb-2'
                    style={{
                      filter:
                        'contrast(1.3) saturate(1.3) brightness(1.05) hue-rotate(10deg)'
                    }}
                  />
                  <p className='font-medium'>{actor.name}</p>
                  <p className='text-sm text-muted-foreground'>
                    {actor.character}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}





























