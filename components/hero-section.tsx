import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"
import { featuredMovies } from "@/lib/data"

export function HeroSection() {
  // Use the first featured movie for the hero
  const featuredMovie = featuredMovies[0]

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://akm-img-a-in.tosshub.com/indiatoday/images/story/202501/michael-b-jordan-from-sinners-29024623-16x9_0.jpg?VersionId=xnrhuFi25qNskpXm5jmSvaQ1uct86nFG&size=690:388')",
        }}
      >
        <div className="container relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{featuredMovie.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-sm">
                {featuredMovie.rating}/10
              </span>
              <span className="text-sm">
                {featuredMovie.year} • {featuredMovie.genre} • {featuredMovie.runtime}
              </span>
            </div>
            <p className="text-lg mb-6 text-gray-200">{featuredMovie.synopsis}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={`/movie/${featuredMovie.id}#trailer`}>
                  <Play className="mr-2 h-5 w-5" /> Watch Trailer
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/movie/${featuredMovie.id}`}>More Info</Link>
              </Button>
            </div>
            <div className="mt-6">
              <p className="text-sm mb-2">Where to Watch:</p>
              <div className="flex flex-wrap gap-2">
                {featuredMovie.whereToWatch.map((platform) => (
                  <Button key={platform.name} variant="secondary" size="sm" asChild>
                    <Link href={platform.url} target="_blank" rel="noopener noreferrer">
                      {platform.name} <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
