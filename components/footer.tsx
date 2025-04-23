import Link from "next/link"
import { Film } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Film className="h-6 w-6" />
              <span className="font-bold text-xl">Movie & Tv Show</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted source for movie reviews, trailers, and information.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/movies" className="text-sm text-muted-foreground hover:text-primary">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/tv-shows" className="text-sm text-muted-foreground hover:text-primary">
                  TV Shows
                </Link>
              </li>
              {/* <li>
                <Link href="/reviews" className="text-sm text-muted-foreground hover:text-primary">
                  Reviews
                </Link>
              </li> */}
              <li>
                <Link href="/hidden-gems" className="text-sm text-muted-foreground hover:text-primary">
                  Hidden Gems
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="text-sm text-muted-foreground hover:text-primary">
                  DMCA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://twitter.com/Movie & Tv Show"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/Movie & Tv Show"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com/Movie & Tv Show"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com/Movie & Tv Show"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Movie & Tv Show. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
