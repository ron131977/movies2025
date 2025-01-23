"use client"

import { useEffect } from "react"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button onClick={reset} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
        Try again
      </button>
    </div>
  )
}

