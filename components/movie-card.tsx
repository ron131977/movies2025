// import Link from 'next/link'
// import Image from 'next/image'
// import { Card, CardContent, CardFooter } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { ExternalLink } from 'lucide-react'
// import type { Movie, TVShow } from '@/lib/data'

// interface MovieCardProps {
//   movie: Movie | TVShow
//   showWatchLinks?: boolean
// }

// export function MovieCard ({ movie, showWatchLinks = false }: MovieCardProps) {
//   const contentType = movie.type === 'movie' ? 'movie' : 'tv-show'

//   return (
//     <Card className='overflow-hidden transition-all hover:shadow-lg flex flex-col'>
//       <Link href={`/${contentType}/${movie.id}`}>
//         <div className='relative aspect-[2/3] w-full'>
//           <Image
//             src={movie.poster || '/placeholder.svg'}
//             alt={movie.title}
//             fill
//             className='object-cover'
//             quality={90}
//             style={{
//               filter:
//                 'contrast(1.3) saturate(1.3) brightness(1.05) hue-rotate(10deg)'
//             }}
//           />
//           <div className='absolute top-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded'>
//             {movie.rating}/10
//           </div>
//         </div>
//         <CardContent className='p-4'>
//           <h3 className='font-semibold line-clamp-1'>{movie.title}</h3>
//           <p className='text-sm text-muted-foreground'>
//             {movie.year} • {movie.genre.split(',')[0]}
//           </p>
//         </CardContent>
//       </Link>

//       {showWatchLinks && movie.whereToWatch && movie.whereToWatch.length > 0 && (
//         <CardFooter className='p-4 pt-0 mt-auto'>
//           <div className='w-full'>
//             <p className='text-sm font-medium mb-2'>Where to Watch:</p>
//             <div className='flex flex-wrap gap-2'>
//               {movie.whereToWatch.slice(0, 2).map(platform => (
//                 <Button
//                   key={platform.name}
//                   variant='outline'
//                   size='sm'
//                   asChild
//                   className='w-full'
//                 >
//                   <Link
//                     href={platform.url}
//                     target='_blank'
//                     rel='noopener noreferrer'
//                   >
//                     {platform.name} <ExternalLink className='ml-2 h-3 w-3' />
//                   </Link>
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </CardFooter>
//       )}
//     </Card>
//   )
// }


import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

interface MovieCardProps {
  movie: any // TMDb dynamic API object
  showWatchLinks?: boolean
}

export function MovieCard({ movie, showWatchLinks = false }: MovieCardProps) {
  // Detect content type
  const isMovie = movie.media_type === 'movie' || !!movie.title
  const isTV = movie.media_type === 'tv' || !!movie.name

  const contentType = isMovie ? 'movie' : isTV ? 'tv-show' : 'unknown'

  // Fallbacks for mixed content
  const title = movie.title || movie.name || 'Untitled'
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder.svg'
  const rating = typeof movie.vote_average === 'number' ? movie.vote_average.toFixed(1) : 'N/A'
  const year =
    movie.release_date?.split('-')[0] ||
    movie.first_air_date?.split('-')[0] ||
    'Unknown'

  const genre = 'Genre' // placeholder – implement genre mapping if needed

  return (
    <Card className='overflow-hidden transition-all hover:shadow-lg flex flex-col'>
      <Link href={`/${contentType}/${movie.id}`}>
        <div className='relative aspect-[2/3] w-full'>
          <Image
            src={poster}
            alt={title}
            fill
            className='object-cover'
            quality={90}
            style={{
              filter:
                'contrast(1.3) saturate(1.3) brightness(1.05) hue-rotate(10deg)',
            }}
          />
          <div className='absolute top-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded'>
            {rating}/10
          </div>
        </div>
        <CardContent className='p-4'>
          <h3 className='font-semibold line-clamp-1'>{title}</h3>
          <p className='text-sm text-muted-foreground'>
            {year} • {genre}
          </p>
        </CardContent>
      </Link>

      {showWatchLinks && movie.whereToWatch?.length > 0 && (
        <CardFooter className='p-4 pt-0 mt-auto'>
          <div className='w-full'>
            <p className='text-sm font-medium mb-2'>Where to Watch:</p>
            <div className='flex flex-wrap gap-2'>
              {movie.whereToWatch.slice(0, 2).map((platform: any) => (
                <Button
                  key={platform.name}
                  variant='outline'
                  size='sm'
                  asChild
                  className='w-full'
                >
                  <Link
                    href={platform.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {platform.name} <ExternalLink className='ml-2 h-3 w-3' />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}
