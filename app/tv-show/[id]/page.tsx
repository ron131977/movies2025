// import Link from 'next/link'
// import Image from 'next/image'
// import { notFound } from 'next/navigation'
// import { Button } from '@/components/ui/button'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import YoutubePlayer from '@/components/YoutubePlayer'
// import { Star, Play, ExternalLink } from 'lucide-react'
// import { trendingShows } from '@/lib/data'
// import { MovieCard } from '@/components/movie-card'

// interface TVShowPageProps {
//   params: {
//     id: string
//   }
// }

// export function generateMetadata ({ params }: TVShowPageProps) {
//   const show = trendingShows.find(show => show.id === params.id)

//   if (!show) {
//     return {
//       title: 'TV Show Not Found',
//       description: 'The requested TV show could not be found.'
//     }
//   }

//   return {
//     title: `${show.title} (${show.year}) - MovieVault`,
//     description: show.synopsis,
//     openGraph: {
//       title: `${show.title} (${show.year}) - MovieVault`,
//       description: show.synopsis,
//       type: 'article'
//     }
//   }
// }

// export default function TVShowPage ({ params }: TVShowPageProps) {
//   const show = trendingShows.find(show => show.id === params.id)

//   if (!show) {
//     notFound()
//   }

//   // Similar shows
//   const similarShows = trendingShows.filter(s => s.id !== show.id).slice(0, 4)

//   return (
//     <div className='flex flex-col gap-10 pb-10'>
//       <section className='relative'>
//         <div className='absolute inset-0 bg-gradient-to-t from-background to-transparent z-10' />
//         <div
//           className='relative h-[50vh] bg-cover bg-center'
//           style={{
//             filter:
//               'contrast(1.2) saturate(1.3) brightness(1.05) hue-rotate(10deg)',
//             backgroundImage: `url('${show.backimage || '/placeholder.svg'}')`
//           }}
//         />
//         <div className='container relative z-20 -mt-40'>
//           <div className='flex flex-col md:flex-row gap-8'>
//             <div className='relative w-full max-w-[300px] aspect-[2/3] mx-auto md:mx-0'>
//               <Image
//                 src={show.poster || '/placeholder.svg'}
//                 alt={show.title}
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
//                 {show.title}
//               </h1>
//               <div className='flex items-center gap-2 mb-4 flex-wrap'>
//                 <span className='text-sm text-muted-foreground'>
//                   {show.year}
//                 </span>
//                 <span className='text-sm text-muted-foreground'>•</span>
//                 <span className='text-sm text-muted-foreground'>
//                   {show.genre}
//                 </span>
//                 <span className='text-sm text-muted-foreground'>•</span>
//                 <span className='text-sm text-muted-foreground'>
//                   {show.seasons} Season{show.seasons > 1 ? 's' : ''}
//                 </span>
//               </div>
//               <div className='flex items-center gap-2 mb-6'>
//                 <div className='flex items-center'>
//                   <Star className='h-5 w-5 text-yellow-500 fill-yellow-500' />
//                   <span className='ml-1 font-medium'>{show.rating}/10</span>
//                 </div>
//               </div>
//               <p
//                 className='text-muted-foreground mb-6'
//                 style={{ marginTop: '60px' }}
//               >
//                 {show.synopsis}
//               </p>
//               <div className='mb-6'>
//                 <p className='font-medium mb-1'>
//                   Creator:{' '}
//                   <span className='text-muted-foreground'>{show.creator}</span>
//                 </p>
//                 {/* <p className="font-medium mb-1">
//                   Cast: <span className="text-muted-foreground">{show.cast.join(", ")}</span>
//                 </p> */}
//                 <p className='font-medium mb-1'>
//                   Cast:{' '}
//                   <span className='text-muted-foreground'>
//                     {show.cast.map(actor => actor.name).join(', ')}
//                   </span>
//                 </p>
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
//                     {show.whereToWatch.map(platform => (
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
//         <YoutubePlayer videoId={show.trailerId} />
//         {/* <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
//           <iframe
//             src={show.trailerUrl}
//             title={`${show.title} Trailer`}
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
//                 <p className='text-muted-foreground mb-6'>{show.synopsis}</p>
//               </div>
//               <div>
//                 <h3 className='text-xl font-bold mb-4'>Show Details</h3>
//                 <div className='space-y-4'>
//                   <div>
//                     <p className='font-medium'>First Air Date</p>
//                     <p className='text-muted-foreground'>{show.year}</p>
//                   </div>
//                   <div>
//                     <p className='font-medium'>Creator</p>
//                     <p className='text-muted-foreground'>{show.creator}</p>
//                   </div>
//                   <div>
//                     <p className='font-medium'>Genre</p>
//                     <p className='text-muted-foreground'>{show.genre}</p>
//                   </div>
//                   <div>
//                     <p className='font-medium'>Seasons</p>
//                     <p className='text-muted-foreground'>{show.seasons}</p>
//                   </div>
//                   <div>
//                     <p className='font-medium'>Episodes</p>
//                     <p className='text-muted-foreground'>{show.episodes}</p>
//                   </div>
//                   <div>
//                     <p className='font-medium'>Network</p>
//                     <p className='text-muted-foreground'>{show.network}</p>
//                   </div>
//                   <div>
//                     <p className='font-medium'>Status</p>
//                     <p className='text-muted-foreground'>{show.status}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </TabsContent>

//           <TabsContent value='reviews' className='mt-0'>
//             {/* <div style={{ width: "100%", maxWidth: "100%", height: "auto" }}>
//           <YoutubePlayer videoId={show.reviewId} /></div> */}
//             {show.reviewId ? (
//               <div style={{ width: '100%', maxWidth: '100%', height: 'auto' }}>
//                 <YoutubePlayer videoId={show.reviewId} />
//               </div>
//             ) : null}
//             <div className='space-y-8'>
//               {show.reviews.map((review, index) => (
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
//               {show.cast.map((actor, idx) => (
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
//           {similarShows.map(show => (
//             <MovieCard key={show.id} movie={show} />
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }


import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import YoutubePlayer from '@/components/YoutubePlayer'
import { Star, Play, ExternalLink } from 'lucide-react'

const TMDB_API_KEY = process.env.TMDB_API_KEY

async function getTVDetails(id: string) {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos,credits,reviews`)
  if (!res.ok) return null
  return res.json()
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const show = await getTVDetails(params.id)
  if (!show) {
    return {
      title: 'TV Show Not Found',
      description: 'The requested TV show could not be found.',
    }
  }
  return {
    title: `${show.name} (${new Date(show.first_air_date).getFullYear()}) - Movie & TV Show`,
    description: show.overview,
    openGraph: {
      title: `${show.name} (${new Date(show.first_air_date).getFullYear()}) - Movie & TV Show`,
      description: show.overview,
    },
  }
}

export default async function TVPage({ params }: { params: { id: string } }) {
  const show = await getTVDetails(params.id)
  if (!show) return notFound()

  const trailer = show.videos?.results?.find(
    (v: any) => v.type === 'Trailer' && v.site === 'YouTube'
  )
  const cast = show.credits?.cast?.slice(0, 10) || []
  const reviews = show.reviews?.results?.slice(0, 3) || []

  return (
    <div className='flex flex-col gap-10 pb-10'>
    <div className="container pt-6">
      <Link
        href="/tv-shows"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
      >
        ← Back to Tv Show
      </Link>
    </div>
      <section className='relative'>
        <div className='absolute inset-0 bg-gradient-to-t from-background to-transparent z-10' />
        <div
          className='relative h-[50vh] bg-cover bg-center'
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${show.backdrop_path})`,
          }}
        />
        <div className='container relative z-20 -mt-40'>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='relative w-full max-w-[300px] aspect-[2/3] mx-auto md:mx-0'>
              <Image
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
                fill
                quality={90}
                className='object-cover rounded-lg shadow-lg'
                priority
              />
            </div>
            <div className='flex-1'>
              <h1 className='text-3xl md:text-4xl font-bold mb-2'>{show.name}</h1>
              <div className='flex items-center gap-2 mb-4 flex-wrap'>
                <span className='text-sm text-muted-foreground'>
                  {new Date(show.first_air_date).getFullYear()}
                </span>
                <span className='text-sm text-muted-foreground'>•</span>
                <span className='text-sm text-muted-foreground'>
                  {show.genres.map((g: any) => g.name).join(', ')}
                </span>
              </div>
              <div className='flex items-center gap-2 mb-6'>
                <Star className='h-5 w-5 text-yellow-500 fill-yellow-500' />
                <span className='ml-1 font-medium'>{show.vote_average.toFixed(1)}/10</span>
              </div>
              <p className='text-muted-foreground mb-6' style={{ marginTop: '60px' }}>
                {show.overview}
              </p>
              <div className='mb-6'>
                <p className='font-medium mb-1'>Creators:{' '}
                  <span className='text-muted-foreground'>
                    {show.created_by.map((c: any) => c.name).join(', ')}
                  </span>
                </p>
                <p className='font-medium mb-1'>Cast:{' '}
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
                      url: `https://justwatchfree.vercel.app/tv/${params.id}`
                    },
                    {
                      name: 'Video Stream Hub',
                      url: `https://videostreamhub.vercel.app/tv/${params.id}`
                    },
                    {
                      name: 'Tiny Movie Zone',
                      url: `https://tinymoviezone.vercel.app/tv/${params.id}`
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
                <p className='text-muted-foreground mb-6'>{show.overview}</p>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-4'>Show Details</h3>
                <div className='space-y-4'>
                  <div><p className='font-medium'>First Air Date</p><p className='text-muted-foreground'>{show.first_air_date}</p></div>
                  <div><p className='font-medium'>Seasons</p><p className='text-muted-foreground'>{show.number_of_seasons}</p></div>
                  <div><p className='font-medium'>Episodes</p><p className='text-muted-foreground'>{show.number_of_episodes}</p></div>
                  <div><p className='font-medium'>Language</p><p className='text-muted-foreground'>{show.original_language.toUpperCase()}</p></div>
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
                  <p className='text-sm text-muted-foreground'>{actor.character}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}








