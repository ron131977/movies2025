import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { allContent } from "@/lib/data"

export const metadata: Metadata = {
  title: "Reviews - Movie & Tv Show",
  description: "Read our in-depth reviews of the latest movies and TV shows.",
}

export default function ReviewsPage() {
  // Sort content by rating (highest first)
  const sortedContent = [...allContent].sort((a, b) => b.rating - a.rating)

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Reviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedContent.map((content) => {
          const contentType = content.type === "movie" ? "movie" : "tv-show"
          const firstReview = content.reviews[0]

          return (
            <Card key={content.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/3 aspect-[2/3]">
                    <Image
                      src={content.poster || "/placeholder.svg"}
                      alt={content.title}
                      quality={90}
                      fill
                      style={{ filter: "contrast(1.3) saturate(1.3) brightness(1.05) hue-rotate(10deg)" }}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {content.rating}/10
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {content.year} • {content.genre.split(",")[0]}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{content.title}</h3>
                    <div className="mb-4">
                      <div className="flex items-center mb-1">
                        <p className="text-sm font-medium">{firstReview.author}</p>
                        <div className="flex ml-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < firstReview.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-3">{firstReview.content}</p>
                    </div>
                    <Button asChild size="sm">
                      <Link href={`/${contentType}/${content.id}`}>Read Full Review</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
