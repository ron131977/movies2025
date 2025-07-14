// import type React from "react"
// import { Inter } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
// import { Toaster } from "@/components/ui/toaster"
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import Head from "next/head"
// import "./globals.css"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "Movie & Tv Show - Movie Reviews, Trailers & Information",
//   description:
//     "Discover the latest movies and TV shows with reviews, trailers, cast information and where to watch them legally.",
//   keywords:
//     "movies, tv shows, reviews, trailers, cast, where to watch, cinema, film reviews",
//   metadataBase: new URL("https://movieandtvshow.vercel.app"),
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://movieandtvshow.vercel.app",
//     title: "Movie & Tv Show - Movie Reviews, Trailers & Information",
//     description:
//       "Discover the latest movies and TV shows with reviews, trailers, cast information and where to watch them legally.",
//     siteName: "Movie & Tv Show",
//     images: [
//       {
//         url: "https://movieandtvshow.vercel.app/og_image.jpg", // ✅ Replace with actual image URL
//         width: 1280,
//         height: 720,
//         alt: "Movie & Tv Show - OG Image",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Movie & Tv Show - Movie Reviews, Trailers & Information",
//     description:
//       "Discover the latest movies and TV shows with reviews, trailers, cast information and where to watch them legally.",
//     images: ["https://movieandtvshow.vercel.app/og_image.jpg"], // ✅ Replace with actual image URL
//   },
//   generator: "dr.trailer",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head />
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//           <div className="flex min-h-screen flex-col">
//             <Header />
//             <main className="flex-1">{children}</main>
//             <Footer />
//           </div>
//           <Toaster />
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }


import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Head from "next/head" // ← Add this
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Movie & Tv Show - Movie Reviews, Trailers & Information",
  description:
    "Discover the latest movies and TV shows with reviews, trailers, cast information and where to watch them legally.",
  keywords:
    "movies, tv shows, reviews, trailers, cast, where to watch, cinema, film reviews",
  metadataBase: new URL("https://movieandtvshow.vercel.app"),
  google-adsense-account: "ca-pub-9514296812201677"
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://movieandtvshow.vercel.app",
    title: "Movie & Tv Show - Movie Reviews, Trailers & Information",
    description:
      "Discover the latest movies and TV shows with reviews, trailers, cast information and where to watch them legally.",
    siteName: "Movie & Tv Show",
    images: [
      {
        url: "https://movieandtvshow.vercel.app/og_image.jpg",
        width: 1280,
        height: 720,
        alt: "Movie & Tv Show - OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Movie & Tv Show - Movie Reviews, Trailers & Information",
    description:
      "Discover the latest movies and TV shows with reviews, trailers, cast information and where to watch them legally.",
    images: ["https://movieandtvshow.vercel.app/og_image.jpg"],
  },
  generator: "dr.trailer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <Head>
        <meta name="google-adsense-account" content="ca-pub-9514296812201677" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9514296812201677"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
