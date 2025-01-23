import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Tv Show Not Found</h1>
      <p className="text-xl mb-8">Sorry, the Tv Sow you're looking for doesn't exist.</p>
      <Link href="/" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Go back to home
      </Link>
    </div>
  )
}

