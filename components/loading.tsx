export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-bounce">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <div className="text-2xl">☺</div>
        </div>
      </div>
      <div className="mt-4 text-gray-400">Loading...</div>
    </div>
  )
}

