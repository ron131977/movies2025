import Link from "next/link"
import { Home, Film, Tv, Clock, Heart, Search } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-16 bg-gray-900 h-screen flex flex-col items-center py-4 gap-8">
      <Link href="/" className="text-red-500 font-bold text-2xl">
      M&T 2025
      </Link>
      <nav className="flex flex-col gap-4">
        <Link href="/" className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
          <Home className="w-6 h-6" />
        </Link>
        {/* <Link
          href="/movies"
          className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Film className="w-6 h-6" />
        </Link>
        <Link href="/tv" className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
          <Tv className="w-6 h-6" />
        </Link>
        <Link
          href="/upcoming"
          className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Clock className="w-6 h-6" />
        </Link>
        <Link
          href="/favorites"
          className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Heart className="w-6 h-6" />
        </Link>
        <Link
          href="/search"
          className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Search className="w-6 h-6" />
        </Link> */}
      </nav>
    </div>
  )
}

