import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

interface TvCardProps {
  id: number
  title: string
  posterPath: string | null
  releaseDate: string
}

export default function MovieCard({ id, title, posterPath, releaseDate }: TvCardProps) {
  const imageUrl = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : "/placeholder.svg"

  return (
    <div className="relative group">
      <Link href={`/tv/${id}`}>
        <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="mt-2">
          <h3 className="font-semibold text-sm line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-400">{releaseDate ? new Date(releaseDate).getFullYear() : "N/A"}</p>
        </div>
      </Link>
      <button className="absolute top-2 right-2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="w-4 h-4" />
      </button>
    </div>
  )
}

